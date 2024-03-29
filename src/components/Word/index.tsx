import { FC, useContext } from "react";
import Icon from "../Icon";
import { IconsNames, IconsSizes } from "../Icon/types";
import { WordProps } from "./types";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";
import "./styles/index.scss";

const Word: FC<WordProps> = ({ word, removeWordFromStorage = () => {} }) => {
  const { pathname } = useLocation();

  const isIconDisplayed = pathname.includes("/saved");

  const { isLightTheme } = useContext(ThemeContext);

  const link = `https://dictionary.cambridge.org/dictionary/english/${word}`;

  const onDelete = () => {
    removeWordFromStorage(word);
  };

  return (
    <div className={`word ${isLightTheme ? "" : "word_dark"}`}>
      <a href={link} className="word__link" target="_blank" rel="noreferrer">
        {word}
        <div className={`word__icon ${isLightTheme ? "" : "word__icon_dark"}`}>
          <Icon name={IconsNames.RightArrow} size={IconsSizes.Small} />
        </div>
      </a>
      {isIconDisplayed && (
        <div
          className={`word__delete-button ${
            isLightTheme ? "" : "word__delete-button_dark"
          }`}
          onClick={onDelete}
        >
          <Icon name={IconsNames.DeleteIcon} />
        </div>
      )}
    </div>
  );
};

export default Word;
