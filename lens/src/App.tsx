import React from "react";
import "./App.css";
import { TranslatedTerm } from "./term";
import { TranslatedTextBox } from "./TranslatedTextBox";
import { FRENCH_FRANKENSTEIN_CONTENT } from "./samples";

function App() {
  return <TranslatedTextBox content={FRENCH_FRANKENSTEIN_CONTENT} />;
}

export default App;
