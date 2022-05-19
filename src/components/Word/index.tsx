import { FC, useState } from "react";
import Icon from "../Icon";
import { IconsNames, IconsSizes } from "../Icon/types";
import "./styles/index.css";
import { WordProps } from "./types";

const Word: FC<WordProps> = ({ word }) => {
    const link = `https://www.macmillandictionary.com/dictionary/british/${word}`;
    return (
        <a className="word" target="_blank" href={link}>
            {word}
            <div className="word-icon">
                <Icon name={IconsNames.RightArrow} size={IconsSizes.Large} />
            </div>
        </a>
    )
}

export default Word;