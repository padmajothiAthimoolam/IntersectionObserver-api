# Products Infinite Scroll App

This is a React application that fetches and displays products from a dummy API, with an infinite scrolling feature. As the user scrolls down, more products are automatically fetched and appended to the list.

Features
Infinite Scrolling: Automatically loads more products as the user reaches the bottom of the page.
Intersection Observer: The app uses the Intersection Observer API to detect when the user scrolls to the bottom, which triggers the loading of more items.
React Hooks: Utilizes React hooks like useState, useEffect, and useRef for managing state, side effects, and references in the DOM.
Responsive Layout: Displays the products in a responsive card layout using Bootstrap's grid system.

Demo
A brief description of the app functionality:

Products Display: Each product is displayed in a card with a thumbnail image, description, and price.
Scroll to Load More: As you scroll down, more products are fetched from the API and added to the list.

Key Parts of the Code
useState Hooks:

products: Stores the fetched products.
hasMore: A boolean that tracks if there are more products to load.
page: Tracks the current page of the product list being fetched.
useRef Hook:

ElementRef: A reference to the DOM element that triggers the fetch when it comes into view.
useEffect Hook:

Sets up the IntersectionObserver that triggers the product fetching when the observed element intersects the viewport.
IntersectionObserver:

Monitors the ElementRef and triggers a new fetch if the user scrolls to the bottom of the page and hasMore is true.
Example Product Card
Each product is displayed inside a Bootstrap card layout, with the following details:

Thumbnail image
Product description
Price
API Used
DummyJSON Products API
The app fetches product data from this dummy API. It uses pagination, where limit specifies the number of products per page, and skip is used to determine how many products to skip for each new request.

Example Request
The app fetches products using the following URL structure:
https://dummyjson.com/products?limit=10&skip={page * 10}

limit: The number of products to fetch at once.
skip: How many products to skip, calculated by page * 10 where page is the current page number.
