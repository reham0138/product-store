# Product Store

A responsive product listing website built with **React**, **TypeScript**, and **Tailwind CSS**. It fetches products from the [DummyJSON](https://dummyjson.com/products) API and displays them page by page.

![Product Store screenshot](screenshots/home.png)

<!-- Live demo: add your Vercel/Netlify link here once deployed -->
<!-- **Live demo:** https://your-project.vercel.app -->

## Features

- Fetches products dynamically from the DummyJSON API
- Displays 8 products per page
- Product cards with image, title, price, and rating
- Pagination with Previous and Next buttons and page numbers
  - Previous is disabled on the first page
  - Next is disabled on the last page
  - Long page lists are shortened with an ellipsis (for example `1 2 3 4 5 ... 25`)
- Loading message while products are being fetched
- Error message if the API request fails
- Empty state when no products are returned
- Responsive layout for mobile, tablet, and desktop
  - Header with a collapsible menu on small screens
  - Product grid: 1 column on mobile, 2 on tablet, 4 on desktop
- Pending requests are cancelled when the page changes quickly, so old results never overwrite new ones

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vite.dev/)
- [DummyJSON API](https://dummyjson.com/docs/products)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/product-store.git

# Go into the project folder
cd product-store

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local address shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The production files are created in the `dist` folder.

## Project Structure

```
product-store/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── Pagination.tsx
│   │   ├── Loader.tsx
│   │   ├── ErrorMessage.tsx
│   │   └── EmptyState.tsx
│   ├── hooks/
│   │   └── useProducts.ts
│   ├── types/
│   │   └── product.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## How It Works

- `useProducts` is a custom hook that takes the current page number, calculates `skip` as `(page - 1) * 8`, and fetches `https://dummyjson.com/products?limit=8&skip=...`. It returns the products, the total count, and the loading and error states.
- `App` keeps the current page in state, calculates the total number of pages, and decides what to show: the loader, the error message, the empty state, or the product grid with pagination.
- `ProductGrid` maps over the products and renders a `ProductCard` for each one.
- `Pagination` receives the current page, the total pages, and a function to change the page.

## API

Products are loaded from:

```
https://dummyjson.com/products?limit=8&skip=0
```

## Author

**Reham**

- LinkedIn: [your-profile](https://www.linkedin.com/in/your-profile/)