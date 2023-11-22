import { FC } from "react";
import Icon from "../Icon";
import { IconsNames, IconsSizes } from "../Icon/types";
import "./styles/index.css";
import { WordProps } from "./types";

const Word: FC<WordProps> = ({ word }) => {
  const link = `https://dictionary.cambridge.org/dictionary/english/${word}`;
  return (
    <a className="word" target="_blank" href={link} rel="noreferrer">
      {word}
      <div className="word-icon">
        <Icon name={IconsNames.RightArrow} size={IconsSizes.Large} />
      </div>
    </a>
  );
};

export default Word;
