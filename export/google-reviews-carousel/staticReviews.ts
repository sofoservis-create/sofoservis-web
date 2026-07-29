/**
 * Static fallback reviews — shown when the Google Places API key is missing
 * or the API returns nothing. Replace with real reviews of the business
 * the other website belongs to (copy them from its Google profile).
 */
export interface StaticReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number; // unix seconds — used for sorting (newest first)
}

const NOW = Math.floor(Date.now() / 1000);
const WEEK = 604800;

export const staticReviews: StaticReview[] = [
  {
    author_name: "Jana Príkladová",
    rating: 5,
    text: "Skvelá skúsenosť, odporúčam každému. Rýchla komunikácia a profesionálny prístup.",
    relative_time_description: "2 weeks ago",
    time: NOW - 2 * WEEK,
  },
  {
    author_name: "Peter Vzorový",
    rating: 5,
    text: "Všetko prebehlo presne podľa dohody, férová cena a milý personál.",
    relative_time_description: "a month ago",
    time: NOW - 4 * WEEK,
  },
  // ...add more
];
