import React from "react";
import { useContext, useState } from "react";
import { useLanguage, useSwitchLanguage } from "./LanguageContext";

const textStyle = {
  fontSize: "3rem",
};
const divStyle = {
  fontSize: "3rem",
};
const app = {
  textAlign: "center",
  fontSize: "3rem",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};
const buttonStyle = {
  margin: "2rem",
  padding: "1rem",
};

const LanguageSwitch = () => {
  const language = useLanguage();
  const switchLanguage = useSwitchLanguage();
  let content;
  const switchContent = () => {
    if (language === "english") {
      return (content = "Hello,my name is Vincent!");
    } else if (language === "chinese") {
      return (content = "你好，我叫陈翔！");
    }
  };
  switchContent();

  return (
    <div style={app}>
      <div style={divStyle}>
        <button style={buttonStyle}>English</button>
        <button style={buttonStyle} onClick={switchLanguage}>
          Chinese
        </button>
        <button style={buttonStyle}>Japanese</button>
        <button style={buttonStyle}> Spanish</button>
      </div>
      <div style={textStyle}>{content}</div>
    </div>
  );
};
export default LanguageSwitch;
