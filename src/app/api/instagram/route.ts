/*
 * Instagram Graph API – feed endpoint
 *
 * ONE-TIME SETUP (do this once in a browser before deploying):
 *
 * 1. Go to developers.facebook.com → Create App → Consumer type.
 *    Add the "Instagram Basic Display" product to your app.
 *
 * 2. Under Instagram Basic Display → Basic Display, add the sofoservis
 *    Instagram account as a Test User. Generate a short-lived token
 *    (valid 1 hour) from the "User Token Generator" panel.
 *
 * 3. Exchange it for a long-lived token (valid 60 days):
 *    curl "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=<APP_SECRET>&access_token=<SHORT_TOKEN>"
 *
 * 4. Add these env vars to Vercel (Settings → Environment Variables):
 *    INSTAGRAM_ACCESS_TOKEN   ← the long-lived token from step 3
 *    VERCEL_TOKEN             ← account API token from vercel.com/account/tokens
 *    VERCEL_PROJECT_ID        ← project ID from Vercel project → Settings → General
 *    CRON_SECRET              ← any random string (e.g. openssl rand -hex 32)
 *
 * The cron job at /api/instagram/refresh runs on the 1st of every month
 * and automatically renews the token for another 60 days — zero maintenance.
 */

import { NextResponse } from "next/server";

export const revalidate = 3600;

const FIELDS = "id,media_type,media_url,thumbnail_url,permalink,timestamp,caption";

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      {
        error:
          "INSTAGRAM_ACCESS_TOKEN is not configured. " +
          "See setup instructions at the top of src/app/api/instagram/route.ts.",
      },
      { status: 503 }
    );
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=24&access_token=${token}`;
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (!res.ok || data.error) {
      console.error("[instagram] Graph API error:", data.error);
      return NextResponse.json(
        { error: data.error?.message ?? "Instagram API error" },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { posts: data.data ?? [] },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error("[instagram] fetch error:", err);
    return NextResponse.json(
      { error: "Failed to fetch Instagram feed" },
      { status: 500 }
    );
  }
}
