# Debounce API Call in React

A simple React application that demonstrates how to handle API calls efficiently using the **debounce concept** while typing in an input field.  
The app fetches food suggestions from an external API and displays results in real time.

---

## 🚀 Features

- Real-time search suggestions
- Optimized API calls using input-based triggering
- Prevents unnecessary API requests
- Clean and minimal UI
- Built using React Hooks

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6)
- Fetch API
- Tailwind CSS

---

## 📸 How It Works

1. User types in the input field.
2. The input value updates using `useState`.
3. An API call is triggered on input change using `useEffect`.
4. Matching food items are fetched and displayed in a dropdown list.

---

## 📂 Code Overview

- `useState` → Manage input value and API response list
- `useEffect` → Trigger API call on input change
- `fetch()` → Fetch data from external API
- Conditional rendering → Show suggestions only when data exists

---

## 🔗 API Used

