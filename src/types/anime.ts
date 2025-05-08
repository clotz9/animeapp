export interface AnimeSearch {
  mal_id: number;
  title: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

export interface AnimeDetail {
  title: string;
  synopsis: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  score: number;
  episodes: number;
  status: string;
  type: string;
  year: number;
  genres: {
    name: string;
  }[];
}

export interface ApiResponse<T> {
  data: AnimeSearch[];
  pagination: {
    last_visible_page: number;
  };
}
