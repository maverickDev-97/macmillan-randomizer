import { Warning } from "../../components/Warning";
import Word from "../../components/Word";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles/index.css";

export const SavedWords = () => {
  const { words, removeWordFromStorage } = useLocalStorage();

  return (
    <div className="words__container">
      <h1 className="words__title">Saved Words</h1>
      <Warning />
      <div className="words__grid">
        {words.map((word) => (
          <Word
            key={word}
            word={word}
            removeWordFromStorage={removeWordFromStorage}
          />
        ))}
      </div>
    </div>
  );
};
