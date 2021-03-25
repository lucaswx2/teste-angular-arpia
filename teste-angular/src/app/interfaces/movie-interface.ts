export interface Review {
  id: string;
  title: string;
  author: string;
  score?: number;
  content: string;
}

export default interface MovieInterface {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  rating: number;
  ratingBase: number;
  reviewsCount: number;
  duration: number;
  genres: string[];
  releasedAt: string;
  reviews: Review[];
}
