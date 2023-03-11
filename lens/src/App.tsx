import React from 'react';
import logo from './logo.svg';
import './App.css';

interface TranslatedTerm {
    phrase: string;
    translation: string;
}

interface PhraseBoxProps extends TranslatedTerm {
    showTranslation: boolean;
    toggle: (term: TranslatedTerm) => void;
}

function PhraseBox(props: PhraseBoxProps) {
    let showTranslation = props.phrase != props.translation && props.showTranslation;

    let translation = null;
    if (showTranslation) {
        translation = <span className="PhraseBox-Translation">{props.translation}</span>;
    }
    return <span
        onClick={() => props.toggle(props)}
        className="PhraseBox">
            <span className="PhraseBox-Phrase">{props.phrase}</span>
        {translation}
        </span>;
}

function termKey(term: TranslatedTerm) {
    return `${term.phrase}:${term.translation}`;
}

function App() {
    const [knownVocab, setKnownVocab] = React.useState<{ [key: string]: boolean }>({});

    const content: (TranslatedTerm | string)[] = [
        {phrase: "le", translation: "the"},
        {phrase: "chat", translation: "cat"},
        ",",
        {phrase: "avec", translation: "with"},
        {phrase: "le", translation: "the"},
        {phrase: "Google", translation: "Google"},
        ".",
    ];

    let toggle = (term: TranslatedTerm) => {
        let key = termKey(term);

        let tmp = {...knownVocab};
        if (tmp[key]) {
            delete tmp[key];
        } else {
            tmp[key] = true;
        }
        setKnownVocab(tmp)
    };

    return (
        <div className="App">
            {content.map((item, index) => {
                if (typeof item === "string") {
                    return item;
                } else {
                    return <PhraseBox
                        key={index}
                        phrase={item.phrase}
                        translation={item.translation}
                        showTranslation={!knownVocab[termKey(item)]}
                        toggle={toggle}
                    />;
                }
            })}
        </div>
    );
}

export default App;
