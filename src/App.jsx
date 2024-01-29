import Main from "./components/Main";
import { GameProvider } from "./context/GameContext";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <GameProvider>
        <Main />
      </GameProvider>
    </>
  );
}

export default App;
