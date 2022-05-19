import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Word from "./components/Word";
import { getRandomWord } from "./db";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {

  const [word, setWord] = useState<string>(getRandomWord("initialWord"));
  const { words, updateLocalStorage } = useLocalStorage();

  const onClick = () => setWord(getRandomWord(word));

  return (
    <div className="App">
      <Heading />
      <Subheading />
      <Word word={word} />
      <div className="buttons">
        <Button text="Randomize" isPrimary onClick={onClick} />
        <Button text="Save word" />
      </div>
    </div>
  );
}

export default App;
