import React from "react";
import { ColorPickerProps } from "./type";

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
    console.log(color);
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
      onClick={handleHideModalClickOutside}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        width: "25%",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          width: "35px",
          height: "35px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          onClick={() => setOpenModal(!openModal)}
          style={{
            backgroundColor: color,
            width: "25px",
            height: "25px",
            borderRadius: "50%",
            margin: "0 auto",
            cursor: "pointer",
          }}
        />
      </div>
      <span
        style={{
          fontWeight: "bold",
        }}
      >
        {convertEnglishToSpanishAnyColor(color)}
      </span>
      {openModal && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "black",
            display: "flex",
            flexDirection: "column",
            zIndex: 1,
            gap: "5px",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {colors.map((color) => (
            <div
              style={{
                backgroundColor: color.color,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                margin: "0 auto",
                cursor: "pointer",
              }}
              onClick={() => {
                handleChangeColor(color.color);
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
