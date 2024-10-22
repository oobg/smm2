declare module "search_popular_request" {
  export interface FetchPopularParams {
    count: number;
    difficulty: "e" | "n" | "ex" | "sex";
    rejectRegions: string; // "j" | "u" | "e" | "a" 의 조합 문자열
  }
}
