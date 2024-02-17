import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>Copyright ⓒ {year}</div>
    </footer>
  );
}
