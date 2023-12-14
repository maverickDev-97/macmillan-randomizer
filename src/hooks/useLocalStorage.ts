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

  const saveWord = async (word: string) => {
    return new Promise((resolve, reject) => {
      if (!checkWord(word)) {
        updateLocalStorage(word);
        setTimeout(() => resolve(null), 500);
      } else {
        reject();
      }
    });
  };

  const removeWordFromStorage = (wordToRemove: string) => {
    const allWords = getAllSavedWords();
    const updatedArray = allWords
      ?.split(",")
      .filter((word) => word !== wordToRemove);
    setWords(updatedArray || []);
    localStorage.setItem("words", updatedArray?.join(",") || "");
  };

  const clearStorage = () => {
    if (
      window.confirm(
        "Are you sure you want to clear your storage? All words will be deleted."
      )
    ) {
      localStorage.removeItem("words");
      setWords([]);
    }
  };

  useEffect(() => {
    const storageWords = getAllSavedWords();
    if (storageWords) {
      setWords(storageWords.split(","));
    }
  }, []);

  return {
    words,
    updateLocalStorage,
    checkWord,
    saveWord,
    removeWordFromStorage,
    clearStorage,
  };
};
