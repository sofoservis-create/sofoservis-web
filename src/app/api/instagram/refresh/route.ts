/*
 * Instagram token auto-refresh
 *
 * Called by the Vercel Cron Job (vercel.json) on the 1st of every month
 * at 06:00 UTC. Vercel automatically sends:
 *   Authorization: Bearer <CRON_SECRET>
 *
 * Required env vars (same ones set up for the main feed route):
 *   INSTAGRAM_ACCESS_TOKEN
 *   VERCEL_TOKEN
 *   VERCEL_PROJECT_ID
 *   CRON_SECRET
 */

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const vercelToken = process.env.VERCEL_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID;

  if (!token || !vercelToken || !projectId) {
    return NextResponse.json(
      {
        error:
          "Missing env vars: INSTAGRAM_ACCESS_TOKEN, VERCEL_TOKEN, or VERCEL_PROJECT_ID",
      },
      { status: 503 }
    );
  }

  try {
    const igRes = await fetch(
      `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    );
    const igData = await igRes.json();

    if (!igRes.ok || igData.error) {
      console.error("[instagram/refresh] Graph API error:", igData.error);
      return NextResponse.json(
        { error: "Instagram refresh failed", detail: igData.error },
        { status: 502 }
      );
    }

    const newToken: string = igData.access_token;

    const listRes = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}/env`,
      { headers: { Authorization: `Bearer ${vercelToken}` } }
    );
    const listData = await listRes.json();

    const envEntry = (listData.envs ?? []).find(
      (e: { key: string }) => e.key === "INSTAGRAM_ACCESS_TOKEN"
    );

    if (!envEntry) {
      return NextResponse.json(
        { error: "INSTAGRAM_ACCESS_TOKEN not found in Vercel project env vars" },
        { status: 404 }
      );
    }

    const patchRes = await fetch(
      `https://api.vercel.com/v9/projects/${projectId}/env/${envEntry.id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${vercelToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: newToken }),
      }
    );

    if (!patchRes.ok) {
      const patchData = await patchRes.json();
      console.error("[instagram/refresh] Vercel PATCH failed:", patchData);
      return NextResponse.json(
        { error: "Failed to update token in Vercel", detail: patchData },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Instagram access token refreshed successfully",
      expiresIn: igData.expires_in,
    });
  } catch (err) {
    console.error("[instagram/refresh] unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
