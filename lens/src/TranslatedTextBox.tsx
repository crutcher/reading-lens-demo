import { TranslatedTerm } from "./term";
import { TermSpan } from "./TermSpan";
import React from "react";

export function TranslatedTextBox(props: {
  content: (TranslatedTerm | string)[];
}) {
  return (
    <div className="noselect">
      {props.content.map((item, index) => {
        if (typeof item === "string") {
          return item;
        } else {
          return (
            <TermSpan
              key={index}
              phrase={item.phrase}
              translation={item.translation}
            />
          );
        }
      })}
    </div>
  );
}
