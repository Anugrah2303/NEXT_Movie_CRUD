# 🎬 NextMovies

A sleek, modern movie management app built with **Next.js 15** and **Tailwind CSS v4**. Browse, add, edit, and delete movies with real-time search, filtering, sorting, and pagination — all powered by client-side session storage.

---

## ✨ Features

- 🔍 **Live Search** — Filter movies by title in real time
- 🎭 **Genre & Language Filters** — Narrow down your collection effortlessly
- ⭐ **Min Rating Filter** — Show only movies above a certain rating
- 🔃 **Multi-key Sorting** — Sort by title, rating, or duration (asc/desc)
- 📄 **Pagination** — Browse large collections with ease (8 movies per page)
- ➕ **Add Movie** — Submit new movies through a validated form
- ✏️ **Edit Movie** — Update any existing movie's details
- 🗑️ **Delete Movie** — Remove movies from your list
- 📋 **Movie Detail Page** — Full-screen view with all metadata
- 💾 **Session Storage** — Data persists across page navigations within a session
- 📱 **Responsive Design** — Works across desktop and mobile screens

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 15](https://nextjs.org/) | React framework with App Router |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling with CSS variables |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [generate-unique-id](https://www.npmjs.com/package/generate-unique-id) | Unique ID generation for movies |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles & CSS variables
│   ├── add-movie/
│   │   └── page.tsx                # Add movie page
│   ├── update-movie/[id]/
│   │   └── page.tsx                # Edit movie page
│   └── [id]/
│       └── page.tsx                # Movie detail page
├── components/
│   ├── Header.tsx                  # App header with navigation
│   ├── MoviesDisplay.tsx           # Main listing with filters & pagination
│   ├── MovieCard.tsx               # Individual movie card
│   ├── Form.tsx                    # Shared add/edit form
│   ├── Input.tsx                   # Reusable input component
│   ├── Button.tsx                  # Reusable button component
│   ├── Icon.tsx                    # Icon wrapper component
│   └── OptionsList.tsx             # Datalist/select options
├── data/
│   └── data.ts                     # Static data (genres, languages, form state)
├── types/
│   └── types.ts                    # Shared TypeScript interfaces
├── utils/
│   ├── storage.ts                  # Session storage helpers
│   └── movieFunctions.ts           # CRUD operations (update, delete)
└── validator/
    └── movieValidate.ts            # Form validation logic
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clonehttps://github.com/Anugrah2303/NEXT_Movie_CRUD.git
cd next-movies

# Install dependencies
npm install
```

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📝 Movie Data Schema

Each movie stored in session storage follows this structure:

```ts
interface moviesDataIF {
  id: string;          // Auto-generated unique ID
  title: string;       // Movie title (min 2 chars)
  poster: string;      // Direct image URL (jpg/png/webp/gif)
  description: string; // Description (min 20 chars)
  genre: string[];     // e.g. ["Action", "Drama"]
  duration: number;    // Runtime in minutes
  rating: number;      // Rating from 1–10
  language: string;    // e.g. "English", "Hindi"
}
```

---

## ✅ Form Validation Rules

| Field | Rules |
|---|---|
| **Title** | Required, minimum 2 characters |
| **Poster** | Valid direct image URL (`.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`); Google image URLs rejected |
| **Description** | Required, minimum 20 characters |
| **Genre** | At least one genre required |
| **Duration** | Required, must be greater than 0 |
| **Rating** | Required, must be between 1 and 10 |
| **Language** | Required |

---

## 🎨 Design System

The app uses a dark cinematic theme defined via CSS custom properties:

```css
--background:    #0b0b14   /* Deep dark navy */
--surface:       #141426   /* Card background */
--surface-2:     #1b1b33   /* Elevated surface */
--primary:       #e50914   /* Netflix-style red */
--accent:        #a855f7   /* Purple accent */
--text:          #f5f5ff   /* Primary text */
--text-secondary:#b6b6d6   /* Secondary text */
--success:       #22c55e   /* Edit action */
--danger:        #ef4444   /* Delete action */
```

---

## 📸 Screenshots

> _Add your screenshots here after running the project._

| Home Page | Movie Detail | Add Movie |
|---|---|---|
| ![Home]() | ![Detail]() | ![Add]() |

---

## 🔮 Possible Improvements

- [ ] Migrate storage from `sessionStorage` to `localStorage` or a database for persistence
- [ ] Add authentication (NextAuth.js)
- [ ] Integrate TMDB API for auto-fetching movie metadata
- [ ] Add favorites / watchlist feature
- [ ] Dark/light theme toggle
- [ ] Unit tests with Jest & React Testing Library

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with ❤️ using Next.js & Tailwind CSS
</div>