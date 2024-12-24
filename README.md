# Fullstack Developer Technical Assessment

This repository contains my submission for the Fullstack Developer Technical Assessment. The application is built using React, TailwindCSS, Zustand (or Redux), Supabase, Prisma, and optionally Shadcn for UI enhancements. The goal is to replicate the provided Figma design while demonstrating full-stack skills.


## 🛠️ Tech Stack

### Frontend
- **React.js**: For building the user interface.
- **TailwindCSS**: For styling and achieving a responsive design.
- **Shadcn (Optional)**: For UI depth and polish.
- **Zustand or Redux**: For global state management.

### Backend
- **Supabase**: As the database and authentication provider.
- **Prisma**: For ORM and database interaction.
- **Node.js/Next.js API**: For handling CRUD operations.

### Deployment
- **Vercel/Netlify**: For live application hosting.

---

## 📖 Features

### Part 1: UI and State Management
- Fully responsive and visually accurate layout based on the provided Figma design.
- Components: Header, Navigation, Cards/Sections with reusability in mind.
- State Management: Global state to manage data from Supabase (using Zustand or Redux).
- Data Fetching & Updating: Dynamic data handling and seamless integration with Supabase.

### Part 2: Database and ORM
- **Supabase Setup**:
  - Defined relevant database tables/models (e.g., users, posts/items).
  - Configured API keys securely using `.env`.
- **Prisma ORM**:
  - Implemented CRUD API endpoints for seamless database interaction.
  - Integrated Prisma with state management to sync data in real-time.

---