# ☕ Coffee Shop Web App

![Screenshot (26)](/Info//Screenshot%20(26).png)


- Developed by mohammadreza mirzai

A modern, responsive coffee shop web application built with Next.js, React, Tailwind CSS, and Zustand. Users can browse products, sign up, manage their cart, and view their personal dashboard—all with a beautiful, mobile-friendly UI.

---

## 🚀 Features

- **Handcrafted Coffee Experience:**
  Eye-catching landing page with a full-background hero image and a call-to-action to order coffee.

- **Product Catalog:**
  Browse a variety of coffee and pastry products, each with detailed pages, images, and user comments.

- **Shopping Cart:**
  Add products to your cart, view quantities, and proceed to checkout with a smooth, grid-based cart UI.

- **User Signup & Dashboard:**

  - Register with personal and address details (real-time validation, password match checks).
  - User data is securely stored in `localStorage` for a seamless experience.
  - After signup, access a personalized dashboard displaying your info in organized, card-based sections.
  - Easily reset your account or return to the home page.

- **Achievements & Awards:**
  Dedicated section showcasing the coffee shop's awards and community recognition.

- **Responsive & Accessible:**
  Fully responsive layouts, accessible navigation, and consistent use of Tailwind CSS for a polished look.

- **State Management:**
  Uses Zustand for efficient, scalable state management (cart, UI state).

---

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- TypeScript

---

## 📂 Project Structure

```
app/
  components/      # Reusable UI components (Navbar, Footer, Cart, Dashboard, etc.)
  data/            # Static data (products, prizes)
  store/           # Zustand stores for cart and UI state
  products/        # Product detail pages (dynamic routing)
  cart/            # Cart page
  checkout/        # Checkout page
  signup/          # Signup page
  dashboard/       # User dashboard
  order/           # Order confirmation
  info/            # Additional info pages
  utils/           # Utility functions (validation, etc.)
public/
  images/          # Product and shop images
  icon/            # SVG and PNG icons
  Info/            # Shop info images
```

---

## 🧑‍💻 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

---

## ✨ Customization

- **Add/Edit Products:**
  Update `app/data/Products.ts` to change the product catalog.

- **Update Awards:**
  Edit `app/data/PrizesData.ts` to showcase new achievements.

- **Styling:**
  All UI is styled with Tailwind CSS. Adjust classes in components for custom themes.

---

## 📝 License

This project is for educational/demo purposes.
Feel free to use, modify, and share!

---

## 🙏 Acknowledgements

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/) and [SVGRepo](https://www.svgrepo.com/)

---
