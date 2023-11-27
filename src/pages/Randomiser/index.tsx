import { useState } from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Subheading from "../../components/Subheading";
import Word from "../../components/Word";
import { getRandomWord } from "../../db";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles/index.scss";

export const Randomiser = () => {
  const [word, setWord] = useState<string>(getRandomWord("initialWord"));

  const { saveWord } = useLocalStorage();

  const onClick = () => setWord(getRandomWord(word));
  return (
    <div className="randomiser">
      <Heading />
      <Subheading />
      <div className="randomiser__word-wrapper">
        <Word word={word} />
      </div>
      <div className="randomiser__buttons">
        <Button text="Randomize" isPrimary onClick={onClick} />
        <Button text="Save word" onClick={() => saveWord(word)} />
      </div>
    </div>
  );
};
