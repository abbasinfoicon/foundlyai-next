"use client";

import { useEffect, useState } from "react";

type GoogleFont = { family: string };

const fallbackFonts = [
  "Inter", "Roboto", "Open Sans", "Lato", "Montserrat", "Poppins",
  "Raleway", "Nunito", "Nunito Sans", "DM Sans", "Manrope", "Outfit",
  "Plus Jakarta Sans", "Work Sans", "Source Sans 3", "Merriweather",
  "Playfair Display", "Lora", "Roboto Condensed", "Oswald", "Dosis",
  "Ubuntu", "Mukta", "PT Sans", "Fira Sans", "Rubik", "Karla",
];

export default function FontFamilyDropdown() {
  const [fonts, setFonts] = useState<string[]>(fallbackFonts);
  const [selectedFont, setSelectedFont] = useState("Raleway");

  useEffect(() => {
    const savedFont = localStorage.getItem("foundly-preview-font");
    if (savedFont) setSelectedFont(savedFont);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_FONTS_API_KEY || "AIzaSyBtYPtjnLKTMz4aCAZEfFLn6OjklWEx_oA";
    if (!apiKey) return;

    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=alpha`)
      .then((response) => {
        if (!response.ok) throw new Error("Google Fonts API request failed");
        return response.json();
      })
      .then((data: { items?: GoogleFont[] }) => {
        if (data.items?.length) {
          setFonts(data.items.map((font) => font.family).sort((a, b) => a.localeCompare(b)));
        }
      })
      .catch((error) => console.error("Unable to load Google Fonts:", error));
  }, []);

  useEffect(() => {
    const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(selectedFont).replace(/%20/g, "+")}:wght@300;400;500;600;700;800&display=swap`;
    let link = document.getElementById("foundly-preview-google-font") as HTMLLinkElement | null;

    if (!link) {
      link = document.createElement("link");
      link.id = "foundly-preview-google-font";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
    link.href = fontUrl;

    document.documentElement.dataset.previewFont = "true";
    document.documentElement.style.setProperty("--foundly-preview-font", `"${selectedFont}", sans-serif`);
    localStorage.setItem("foundly-preview-font", selectedFont);
  }, [selectedFont]);

  return (
    <div className="fixed bottom-5 right-5 z-[99999]">
      <select
        aria-label="Preview website font family"
        value={selectedFont}
        onChange={(event) => setSelectedFont(event.target.value)}
        className="w-[210px] cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-800 shadow-lg outline-none focus:border-[#245ae2]"
      >
        {fonts.map((font) => (
          <option key={font} value={font}>{font}</option>
        ))}
      </select>
    </div>
  );
}
