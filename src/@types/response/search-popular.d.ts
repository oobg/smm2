declare module "search_popular_response" {
  // Interface for course thumbnails
  interface Thumbnail {
    url: string;
    size: number;
    filename: string;
  }

  // Interface for uploader or player info
  interface User {
    region: number;
    region_name: string;
    code: string;
    pid: number;
    name: string;
    country: string;
    last_active: number;
    last_active_pretty: string;
    mii_data: string;
    mii_image: string;
    mii_studio_code: string;
    pose: number;
    hat: number;
    shirt: number;
    pants: number;
    pose_name: string;
    hat_name: string;
    shirt_name: string;
    pants_name: string;
    wearing_outfit: boolean;
    courses_played: number;
    courses_cleared: number;
    courses_attempted: number;
    courses_deaths: number;
    likes: number;
    maker_points: number;
    easy_highscore: number;
    normal_highscore: number;
    expert_highscore: number;
    super_expert_highscore: number;
    versus_rating: number;
    versus_rank: number;
    versus_rank_name: string;
    versus_won: number;
    versus_lost: number;
    versus_win_streak: number;
    versus_lose_streak: number;
    versus_plays: number;
    versus_disconnected: number;
    coop_clears: number;
    coop_plays: number;
    recent_performance: number;
    versus_kills: number;
    versus_killed_by_others: number;
    multiplayer_stats_unk13: number;
    multiplayer_stats_unk14: number;
    first_clears: number;
    world_records: number;
    unique_super_world_clears: number;
    uploaded_levels: number;
    maximum_uploaded_levels: number;
    weekly_maker_points: number;
    last_uploaded_level: number;
    last_uploaded_level_pretty: string;
    is_nintendo_employee: boolean;
    comments_enabled: boolean;
    tags_enabled: boolean;
    super_world_id: string;
    badges: Badge[];
    unk3: boolean;
    unk12: boolean;
    unk16: boolean;
  }

// Interface for badges
  interface Badge {
    type: number;
    rank: number;
    type_name: string;
    rank_name: string;
  }

  // Interface for course details
  interface Course {
    name: string;
    description: string;
    uploaded_pretty: string;
    uploaded: number;
    data_id: number;
    course_id: string;
    game_style_name: string;
    game_style: number;
    theme_name: string;
    theme: number;
    difficulty_name: string;
    difficulty: number;
    tags_name: string[];
    tags: number[];
    tag1: number;
    tag2: number;
    world_record_pretty: string;
    world_record: number;
    upload_time_pretty: string;
    upload_time: number;
    num_comments: number;
    clear_condition: number;
    clear_condition_magnitude: number;
    clears: number;
    attempts: number;
    clear_rate_pretty: string;
    clear_rate: number;
    plays: number;
    versus_matches: number;
    coop_matches: number;
    likes: number;
    boos: number;
    unique_players_and_versus: number;
    weekly_likes: number;
    weekly_plays: number;
    one_screen_thumbnail: Thumbnail;
    entire_thumbnail: Thumbnail;
    unk2: number;
    unk3: string;
    unk9: number;
    unk10: number;
    unk11: number;
    unk12: number;
    uploader: User;
    first_completer: User;
    record_holder: User;
  }

  // Root interface for response
  export interface FetchPopularResult {
    courses: Course[];
    cache_hits: number;
  }
}
