"use client";

import { useState } from "react";

export default function UserProfile({ user }: { user: any }) {
  const [theme, setTheme] = useState("dark");

  function saveUserData() {
    localStorage.setItem("user", JSON.stringify(user));
    fetch("/api/save", {
      method: "POST",
      body: JSON.stringify(user),
    });
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
    document.body.style.background = theme === "dark" ? "black" : "white";
    document.body.style.color = theme === "dark" ? "white" : "black";
  }

  return (
    <div style={{ border: "2px solid gray", padding: "20px" }}>
      <h2>
        {user.name} ({user.age})
      </h2>
      <p>Email: {user.email}</p>
      <button onClick={saveUserData}>Save</button>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>© 2025 Hardcoded Footer</p>
    </div>
  );
}
