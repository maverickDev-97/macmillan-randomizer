import { useLocalStorage } from "../../hooks/useLocalStorage";

export const SavedWords = () => {
  const { words } = useLocalStorage();
  return (
    <div>
      <h3> The draft version of words list</h3>
      {words.map((word) => (
        <div>{word}</div>
      ))}
    </div>
  );
};
