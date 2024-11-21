import type { FetchPopularParams } from "search_popular_request"
import type { FetchPopularResult } from "search_popular_response"
import { mariOverUrl } from "@/script/constants"

const fetchPopular = async (params: FetchPopularParams): Promise<FetchPopularResult> => {
  const {
    count,
    difficulty,
    rejectRegions
  } = params;
  const url = new URL(`${mariOverUrl}/search_popular`);

  const searchParams = new URLSearchParams();
  searchParams.append("count", String(count));
  searchParams.append("difficulty", difficulty);
  searchParams.append("reject_regions", rejectRegions);

  url.search = searchParams.toString();

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  return response.json();
};

export {
  fetchPopular,
}
