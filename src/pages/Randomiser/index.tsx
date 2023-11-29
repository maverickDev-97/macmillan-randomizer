import { useState } from "react";
import toast from "react-hot-toast";
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

  const onSave = () => {
    toast.promise(
      saveWord(word),
      {
        success: "The word has been saved",
        error: "The word is already saved",
        loading: "Saving...",
      },
      {
        style: {
          position: "relative",
          top: 80,
        },
      }
    );
  };
  return (
    <div className="randomiser">
      <Heading />
      <Subheading />
      <div className="randomiser__word-wrapper">
        <Word word={word} />
      </div>
      <div className="randomiser__buttons">
        <Button text="Randomize" isPrimary onClick={onClick} />
        <Button text="Save word" onClick={onSave} />
      </div>
    </div>
  );
};
