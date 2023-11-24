import { FC, MouseEvent } from "react";
import Icon from "../Icon";
import { IconsNames, IconsSizes } from "../Icon/types";
import "./styles/index.css";
import { WordProps } from "./types";

const Word: FC<WordProps> = ({ word }) => {
  const link = `https://dictionary.cambridge.org/dictionary/english/${word}`;

  const onDelete = (event: MouseEvent<HTMLDivElement>) => {
    console.log(`Delete ${word}`);
  };

  return (
    <div className="word">
      <a href={link} className="word__link" target="_blank" rel="noreferrer">
        {word}
        <div className="word__icon">
          <Icon name={IconsNames.RightArrow} size={IconsSizes.Small} />
        </div>
      </a>
      <div className="word__delete-button" onClick={onDelete}>
        <Icon name={IconsNames.DeleteIcon} />
      </div>
    </div>
  );
};

export default Word;
