# Product Catalogue App

This is a frontend application built using React, TypeScript, and Tailwind CSS that fetches product data from a public API and displays it in a clean, responsive UI.

## What I implemented

- Fetched product data from Fake Store API
- Displayed products in a responsive grid layout
- Handled loading and error states for API calls
- Implemented real-time search to filter products by title
- Enabled navigation to a product details page using React Router
- Displayed detailed product information (image, title, price, description, rating)
- Added a back button to return to the product list
- Implemented a favourite toggle feature using a heart icon
- Stored favourite products in localStorage so they persist after refresh
- Added simple client-side pagination for cleaner product browsing
- Refactored favourite logic into a reusable custom hook to avoid duplication
- Added basic accessibility improvements (aria-labels for icon buttons)

## Improvements Made

- Fixed initial loading state issue in Product Details to prevent UI flicker
- Implemented favourite toggle in both list and detail views
- Refactored favourite logic into a reusable custom hook
- Improved search to real-time filtering for better UX
- Added accessibility improvements (aria-labels for icon buttons)
- Removed unused CSS to align with Tailwind best practices

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router


## How would you scale this application?

- Adding global state management (Context API or Redux)
- Moving favourites and user data to a backend instead of localStorage
- Implementing server-side search, filtering, and pagination for better performance
- Adding caching and API optimization
- Improving accessibility and adding unit/integration testing

## Tradeoffs

- Used localStorage for favourites instead of a backend to keep the implementation simple
- Used client-side search because the dataset is small and manageable
- Used the Fake Store API, which limits control over the available data

## How to run the project

```bash
npm install
npm run dev
```

