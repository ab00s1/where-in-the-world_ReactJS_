import { useEffect, useState } from "react";

export default function Header() {
  const [isDark, setDark] = useState(() => {
    if (!localStorage.getItem("isDark")) return false
    return localStorage.getItem("isDark") === "true";
  });
  const toggleDark = () => {
    return setDark(!isDark);
  };

  useEffect(() => {
    localStorage.setItem("isDark", isDark);
  }, [isDark]);

  const body = document.querySelector("body");
  if (isDark) body.classList.add("dark");
  else body.classList.remove("dark");
  return (
    <header>
      <a href="/">
        <h2 style={{ fontWeight: 800 }}>Where in the world?</h2>
      </a>
      <p onClick={toggleDark}>
      {isDark ? (
      <>
        <i className="fa-solid fa-sun" /> Light Mode
      </>
    ) : (
      <>
        <i className="fa-regular fa-moon" /> Dark Mode
      </>
    )}
      </p>
    </header>
  );
}
