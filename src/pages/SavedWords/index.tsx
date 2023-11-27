import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Warning } from "../../components/Warning";
import Word from "../../components/Word";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles/index.css";

export const SavedWords = () => {
  const { words, removeWordFromStorage, clearStorage } = useLocalStorage();

  const navigate = useNavigate();

  return (
    <div className="words__container">
      <div className="words__header">
        <h1 className="words__title">Saved Words</h1>
        {words.length ? (
          <Button text="Clear storage" onClick={clearStorage} />
        ) : (
          <Button
            text="Explore words"
            isPrimary
            onClick={() => navigate("/")}
          />
        )}
      </div>
      <Warning
        message={
          words.length
            ? `All words saved here are stored in your browser storage and can be
        deleted if you clear browser data, cookies, etc.`
            : `Your storage is empty. You can navigate to the randomiser page and learn some new words`
        }
      />
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
