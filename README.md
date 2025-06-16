# Coffee Shop Web Application
![Screenshot (25)](https://github.com/user-attachments/assets/0aa24ebd-4b06-4f8f-8bd8-cc775e6872c9)


This is a modern coffee shop web application built with Next.js, React, and Tailwind CSS. It provides a user-friendly interface for browsing products, managing a shopping cart, and checking out.

## Features

*   **Responsive Navbar:** A navigation bar with "Home", "Order", "Information", and "Cart" links.
    *   Responsive hamburger menu for mobile devices.
    *   Active link highlighting to indicate the current page.
    *   Displays the number of items in the cart.
    *   Slightly transparent background for the mobile menu to show content underneath.
*   **Dynamic Product Display:**
    *   Products page (`/order`) displaying various coffee-related items with images, titles, prices, and an "Add Item" button.
    *   Dynamic product detail pages (`/products/[id]`) to show individual product information.
*   **Shopping Cart Functionality:**
    *   `Cart` page (`/cart`) to view, update quantities, and remove items from the cart.
    *   Uses Zustand for efficient state management of cart items.
    *   Calculates and displays the total price.
    *   "Confirm Order" button navigates to the checkout page.
    *   The cart component expands to fill the page when empty, with a friendly message.
*   **Checkout Process:**
    *   `Checkout` component (`/checkout`) for users to enter their address and contact information.
    *   Client-side validation for phone number (must start with +98) and email format.
    *   Displays "This field is required" messages for empty inputs upon submission.
    *   Validation logic is extracted to a separate utility file (`utils/validation.ts`) for cleaner code.
*   **Coffee Shop Information:**
    *   `CoffeeShopInfo` component on the homepage providing details about the coffee shop, including contact information and location.
    *   Displays interior images of the coffee shop with updated image paths and modern `next/image` usage.
*   **Achievements/Prizes Section:**
    *   `Prizes` component on the homepage showcasing random awards and achievements won by the coffee shop.
*   **Clean Code Architecture:**
    *   Separation of concerns with dedicated components for different functionalities (Navbar, Products, Cart, Checkout, CoffeeShopInfo, Prizes).
    *   Centralized UI state management using Zustand for the mobile menu.
    *   Utility functions for validation.

## Technologies Used

*   [Next.js](https://nextjs.org/) (React Framework)
*   [React](https://reactjs.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Zustand](https://zustand-bear.github.io/zustand/) (State Management)

## Setup and Running the Project

To get this project up and running on your local machine, follow these steps:

### 1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies:

Install the necessary Node.js packages using npm:

```bash
npm install
```

### 3. Run the Development Server:

Start the Next.js development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000` (or another port if 3000 is in use).

### 4. Clear Cache (if encountering issues):

If you experience any display issues (e.g., images not showing correctly), it's often helpful to clear the Next.js cache and restart the server:

```bash
Remove-Item -Recurse -Force .\.next ; npm run dev # For Windows PowerShell
# Or for Git Bash/WSL/Linux/macOS:
# rm -rf .next && npm run dev
```

## Folder Structure

```
.
├── app/
│   ├── api/
│   │   └── page.tsx
│   ├── cart/
│   │   └── page.tsx
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── Checkout.tsx
│   │   ├── CoffeeShopInfo.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── Prizes.tsx
│   │   └── Products.tsx
│   ├── products/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── store/
│   │   ├── cartStore.ts
│   │   └── uiStore.ts
│   ├── utils/
│   │   └── validation.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── icon/
│   ├── images/
│   │   └── (various product and shop images)
│   └── Info/
│       └── (employee and shop interior images)
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
├── tsconfig.json
└── ... (other Next.js config files)
```

## Future Enhancements

*   **Payment Gateway Integration:** Implement a secure payment processing system.
*   **User Authentication:** Add user login and registration.
*   **Admin Panel:** Create a dashboard for managing products, orders, and users.
*   **Advanced Search/Filtering:** Enhance product search capabilities.
*   **Review System:** Allow users to leave reviews for products.
