import { useState } from "react";
import "./ColorPalette.css";

const colorsInArray = [
  "#f28983",
  "#D7AEFB",
  "#238AC5",
  "#ff6200",
  "#ff00fe",
  "#6a6572",
  "#0d0af2",
  "#f30c0e",
];

export const ColorPalette = ({ notecolor, colorChangeHandler }) => {
  const [isHidden, setHidden] = useState(true);
  return (
    <>
      <div
        onMouseOver={() => {
          setHidden(!isHidden);
        }}
        onMouseOut={() => {
          setHidden(!isHidden);
        }}
        className="palette"
      >
        <i className="fas fa-palette"></i>

        <div
          className="colorPaletteContainer boxShadow"
            style={{ display: isHidden ? "none" : "flex" }}
        >
          {colorsInArray.map((color) => {
            return (
              <div
                key={color}
                className="colorPalette"
                style={{
                  backgroundColor: color,
                }}
                onClick={() => {
                  colorChangeHandler(color);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};
