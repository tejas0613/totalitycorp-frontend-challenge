# React E-commerce Website

This project is a simple e-commerce website built using React. It allows users to browse and purchase products, add them to a cart, and view their order summary.

## Tech Stack

- **React**: This project is built using React, a popular JavaScript library for building user interfaces.

- **Material-UI**: Material-UI is used for designing and styling the user interface components. It provides a clean and responsive design.

- **RESTful API**: Data for the products is fetched from a RESTful API using the `fetch` API in React.

- **State Management**: React's built-in state management is used to manage the shopping cart and product data.

## Approach

### Component Structure

The project is organized into components for modularity and reusability. Here's an overview of the component structure:

- **App**: The main component that manages the state and renders child components.
- **CardsDetails**: Displays the product cards and handles cart management.
- **Cart**: Displays the cart contents and allows users to review and place orders.
- **ProductCard**: Represents an individual product card.
- **CartItem**: Represents an item in the cart.

### Styling

Material-UI is used for styling components, providing a responsive and modern user interface. Custom CSS is also applied where necessary for fine-tuning the styling.

### Data Fetching

Data for the products is fetched from a RESTful API using the `fetch` API in React. The fetched data is stored in the component's state and displayed in the product cards.

### Cart Management

The shopping cart is managed using React's built-in state management. Users can add or remove items from the cart, adjust quantities, and view the order summary.

### Responsiveness

The application is designed to be responsive and works well on both desktop and mobile devices. Media queries are used to adjust the layout and styling for different screen sizes.

## Installation

To run the project locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/tejas0613/totalitycorp-frontend-challenge.git

2. You can also visit the site hosted on Vercel:
    https://totalitycorp-frontend-challenge-tejas0613.vercel.app/