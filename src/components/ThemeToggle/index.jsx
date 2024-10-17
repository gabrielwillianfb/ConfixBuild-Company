import { useEffect, useState } from 'react';
import Toggle from 'react-toggle';
import { useMediaQuery } from 'react-responsive';
import "react-toggle/style.css";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  useMediaQuery(
    { query: '(prefers-color-scheme: dark)' }, 
    undefined,
    preferDark => setIsDark(preferDark)
  );


  const storageKey = "theme-preference";
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem(storageKey)));

  useEffect(() => {
    if (isDark) {
      document.firstElementChild.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey, JSON.stringify(true));
    } else {
      document.firstElementChild.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey, JSON.stringify(false));
    }
  }, [isDark]);

  return (
    <div className="flex__center theme__toggle">
      <Toggle 
        checked={isDark}
        onChange={(event) => setIsDark(event.target.checked)}
        icons={false}
      />
    </div>
  )
}

export default ThemeToggle;