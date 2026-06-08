import type { moviesDataIF } from "@/types/types";

export const genresData: string[] = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

export const movieLanguages: string[] = [
  "English",
  "Hindi",
  "Tamil",
  "Telugu",
  "Malayalam",
  "Kannada",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Bengali",
  "Urdu",
  "French",
  "Spanish",
  "German",
  "Italian",
  "Japanese",
  "Korean",
  "Chinese",
  "Russian",
  "Arabic"
];

export const ratingsData = ["1", "2", "3", "4", "5"];

export const formInitialState: moviesDataIF = {
  id: "",
  title: "",
  poster: "",
  description: "",
  genre: [],
  duration: "",
  rating: "",
  language: "",
}


/*




┌───────────────────────────────────────────────┐
│               Movie Details                   │
├───────────────────────────────────────────────┤
│ ┌──────────┐  Movie Title                     │
│ │          │  ⭐ 4.8                           │
│ │  Poster  │  English • 135 min              │
│ │          │                                  │
│ └──────────┘  Action • Adventure • Sci-Fi    │
├───────────────────────────────────────────────┤
│ Description                                   │
│ -------------------------------------------- │
│ Full movie description goes here...           │
├───────────────────────────────────────────────┤
│ Edit Movie                    Delete Movie    │
└───────────────────────────────────────────────┘

*/