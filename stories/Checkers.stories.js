import React from "react";
import Board from "./containers/Board";
import "./style.css";

// This is used by Storybook:
export default {
  title: "Checkers"
};

// This is the main app:
export const Checkers = () => {
  return <Board size={400} />;
};
