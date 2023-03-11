import React from "react";
import "./App.css";
import { TranslatedTextBox } from "./TranslatedTextBox";
import { FRENCH_FRANKENSTEIN_CONTENT } from "./sampleContent";

function App() {
  return <TranslatedTextBox content={FRENCH_FRANKENSTEIN_CONTENT} />;
}

export default App;
