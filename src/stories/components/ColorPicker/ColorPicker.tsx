import React from "react";
import { ColorPickerProps } from "./type";
import "./style.css";

const ColorPicker = ({
  valueColor,
  onChangeColor,
  colors = [
    { name: "Red", color: "red" },
    { name: "Blue", color: "blue" },
    { name: "Green", color: "green" },
    { name: "Yellow", color: "yellow" },
    { name: "Orange", color: "orange" },
    { name: "Purple", color: "purple" },
    { name: "Pink", color: "pink" },
  ],
}: ColorPickerProps) => {
  const [color, setColor] = React.useState<string>(valueColor || "orange");
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const convertEnglishToSpanishAnyColor = (color: string): string => {
    const colorMap: { [key: string]: string } = {
      red: "Rojo",
      blue: "Azul",
      green: "Verde",
      yellow: "Amarillo",
      orange: "Naranja",
      purple: "Púrpura",
      pink: "Rosa",
    };
    return colorMap[color] || color;
  };

  const handleHideModalClickOutside = (e: any) => {
    if (e.target.id === "modal") {
      setOpenModal(false);
    }
  };

  const handleChangeColor = (color: string) => {
    setColor(color);
    onChangeColor
      ? onChangeColor(color)
      : console.log("No function onChangeColor");
  };

  return (
    <div
      id="modal"
      className="color-picker-container"
      onClick={handleHideModalClickOutside}
    >
      <div className="color-picker-wrapper">
        <div
          className="color-picker-circle"
          onClick={() => setOpenModal(!openModal)}
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="color-picker-label">
        {convertEnglishToSpanishAnyColor(color)}
      </span>
      {openModal && (
        <div className="color-picker-modal">
          {colors.map((c) => (
            <div
              key={c.color}
              className="color-picker-option"
              style={{ backgroundColor: c.color }}
              onClick={() => {
                handleChangeColor(c.color);
                setOpenModal(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
