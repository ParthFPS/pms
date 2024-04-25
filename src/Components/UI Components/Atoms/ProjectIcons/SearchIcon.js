import React from "react";

const SearchIcon = (props) => {
  const { color = "#fff", size = "24px" } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: size,
        width: size,
      }}
    >
      <svg
        style={{
          width: "100%",
          height: "100%",
        }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4697 20.5303C19.7626 20.8232 20.2374 20.8232 20.5303 20.5303C20.8232 20.2374 20.8232 19.7626 20.5303 19.4697L19.4697 20.5303ZM18.9303 17.8697C18.6375 17.5768 18.1626 17.5768 17.8697 17.8697C17.5768 18.1626 17.5768 18.6375 17.8697 18.9303L18.9303 17.8697ZM4.75 11.6C4.75 7.81685 7.81685 4.75 11.6 4.75V3.25C6.98842 3.25 3.25 6.98843 3.25 11.6H4.75ZM11.6 4.75C15.3831 4.75 18.45 7.81685 18.45 11.6H19.95C19.95 6.98843 16.2116 3.25 11.6 3.25V4.75ZM18.45 11.6C18.45 15.3832 15.3831 18.45 11.6 18.45V19.95C16.2116 19.95 19.95 16.2116 19.95 11.6H18.45ZM11.6 18.45C7.81685 18.45 4.75 15.3832 4.75 11.6H3.25C3.25 16.2116 6.98842 19.95 11.6 19.95V18.45ZM20.5303 19.4697L18.9303 17.8697L17.8697 18.9303L19.4697 20.5303L20.5303 19.4697Z"
          fill={color}
        />
      </svg>
    </div>
  );
};

export default SearchIcon;
