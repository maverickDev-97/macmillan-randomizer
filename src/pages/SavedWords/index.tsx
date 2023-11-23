import Word from "../../components/Word";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./styles/index.css";

export const SavedWords = () => {
  const { words } = useLocalStorage();
  return (
    <div>
      <div className="grid">
        {words.map((word) => (
          <Word key={word} word={word} />
        ))}
      </div>
    </div>
  );
};
