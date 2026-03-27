# Product Catalogue App

This is a frontend application built using React, TypeScript, and Tailwind CSS that fetches product data from a public API and displays it in a clean, responsive UI.

## What I implemented

- Fetched product data from Fake Store API
- Displayed products in a responsive grid layout
- Handled loading and error states for API calls
- Implemented search functionality to filter     products by title
- Enabled navigation to a product details page using React Router
- Displayed detailed product information (image, title, price, description, rating)
- Added a back button to return to the product list
- Implemented a favourite toggle feature using a heart icon
- Stored favourite products in localStorage so they persist after refresh

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router


## How would you scale this application?

If the application grows further, I would improve it by adding better state management, backend-based favourites, and features such as filters or pagination to handle larger amounts of data more efficiently.

## Tradeoffs

- I used localStorage for favourites instead of a backend to keep the implementation simple
- I used client-side search because the dataset is small and manageable
- I used the Fake Store API, which limits control over the available data

## How to run the project

```bash
npm install
npm run dev
```

