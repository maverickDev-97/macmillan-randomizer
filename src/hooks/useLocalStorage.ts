import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [words, setWords] = useState<string[]>([]);

  const getAllSavedWords = () => {
    const storageWords = localStorage.getItem("words");
    return storageWords;
  };

  const updateLocalStorage = (word: string) => {
    const allWords = getAllSavedWords();
    localStorage.setItem(
      "words",
      allWords?.length ? `${words},${word}` : `${word}`
    );
    setWords([...words, word]);
  };

  const checkWord = (word: string) => {
    const storageWords = getAllSavedWords();
    return storageWords?.includes(word);
  };

  const saveWord = (word: string) => {
    if (!checkWord(word)) updateLocalStorage(word);
    return null;
  };

  useEffect(() => {
    const storageWords = localStorage.getItem("words");
    if (storageWords) {
      setWords(storageWords.split(","));
    }
  }, []);

  return {
    words,
    updateLocalStorage,
    checkWord,
    saveWord,
  };
};
