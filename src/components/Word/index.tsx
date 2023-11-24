import { FC } from "react";
import Icon from "../Icon";
import { IconsNames, IconsSizes } from "../Icon/types";
import "./styles/index.css";
import { WordProps } from "./types";
import { useLocation } from "react-router-dom";

const Word: FC<WordProps> = ({ word, removeWordFromStorage = () => {} }) => {
  const { pathname } = useLocation();

  const isIconDisplayed = pathname.includes("/saved");

  const link = `https://dictionary.cambridge.org/dictionary/english/${word}`;

  const onDelete = () => {
    removeWordFromStorage(word);
  };

  return (
    <div className="word">
      <a href={link} className="word__link" target="_blank" rel="noreferrer">
        {word}
        <div className="word__icon">
          <Icon name={IconsNames.RightArrow} size={IconsSizes.Small} />
        </div>
      </a>
      {isIconDisplayed && (
        <div className="word__delete-button" onClick={onDelete}>
          <Icon name={IconsNames.DeleteIcon} />
        </div>
      )}
    </div>
  );
};

export default Word;
