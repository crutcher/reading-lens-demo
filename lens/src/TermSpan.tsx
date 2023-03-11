import "./TermSpan.css";
import React from "react";
import { termKey, TranslatedTerm } from "./term";
import { toggleTerm } from "./features/vocabSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectTermSpan } from "./features/termSpanSelectionSlice";

export function TermSpan(props: TranslatedTerm) {
  let spanId = React.useState(Math.random())[0];

  const { inVocab, isActive } = useSelector((state: any) => ({
    inVocab: state.vocab.value[termKey(props)],
    isActive: state.termSpanSelection.value === spanId,
  }));
  const dispatch = useDispatch();

  const showTranslation = !inVocab && props.phrase !== props.translation;

  let translation = null;
  if (showTranslation) {
    translation = <span className="Translation">{props.translation}</span>;
  }
  return (
    <span
      onClick={() => {
        dispatch(toggleTerm(props));
        dispatch(selectTermSpan(spanId));
      }}
      className={"TermSpan" + (isActive ? " Active" : "")}
    >
      {props.phrase}
      {translation}
    </span>
  );
}
