import { useState } from "react";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Word from "./components/Word";
import { getRandomWord } from "./db";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Header } from "./components/Header";

function App() {
  const [word, setWord] = useState<string>(getRandomWord("initialWord"));
  const { saveWord } = useLocalStorage();

  const onClick = () => setWord(getRandomWord(word));

  return (
    <div className="App">
      <Header />
      <main>
        <Heading />
        <Subheading />
        <Word word={word} />
        <div className="buttons">
          <Button text="Randomize" isPrimary onClick={onClick} />
          <Button text="Save word" onClick={() => saveWord(word)} />
        </div>
      </main>
    </div>
  );
}

export default App;
