import { useEffect, useState } from "react"

export const useLocalStorage = () => {
    const [words, setWords] = useState<string[]>([]);

    const updateLocalStorage = (word: string) => {
        localStorage.setItem("words", `${words},${word}`);
        setWords([...words, word])
    }

    useEffect(() => {
        const storageWords = localStorage.getItem("words");
        if (storageWords) {
            setWords(storageWords.split(","));
        }
    }, [])

    return {
        words,
        updateLocalStorage
    }
}