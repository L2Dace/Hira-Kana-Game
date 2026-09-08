import { gameStates, useGameStore } from "../store";
import { useShallow } from "zustand/react/shallow";

export const Menu = () => {
  const { startGame, gameState, goToMenu } = useGameStore(
    useShallow((state) => ({
      startGame: state.startGame,
      gameState: state.gameState,
      goToMenu: state.goToMenu,
    })),
  );
  return (
    <>
      <div
        className={`menu ${
          gameState !== gameStates.MENU ? "menu--hidden" : ""
        }`}
      >
        <div>
          <h1>Hira-Kana Game</h1>
          <p>Dăm ba bảng chữ cái, chơi để học nè</p>
        </div>
        <button
          disabled={gameState !== gameStates.MENU}
          onClick={() => startGame({ mode: "hiragana" })}
        >
          Hiragana
        </button>
        <button
          disabled={gameState !== gameStates.MENU}
          onClick={() => startGame({ mode: "katakana" })}
        >
          Katakana
        </button>
        <div>
          <p>
            Sử dụng mũi tên hoặc ASWD để di chuyển, phím cách để nhảy.
          </p>
        </div>
        <div>
          <p>
            Made with 💙 by{" ducduy.vectorjr "}
            {/* <a href="https://youtube.com/@WawaSensei" target="_blank">
              Wawa Sensei
            </a>
            , 3D models from{" "}
            <a href="https://instagram.com/belyakova.dsn" target="_blank">
              Camilla
            </a> */}
          </p>
        </div>
      </div>
      <div
        className={`scores ${
          gameState !== gameStates.GAME_OVER ? "scores--hidden" : ""
        }`}
      >
        <h1>M trùm rồi ! Chơi lại cho nhớ mặt chữ nhé !</h1>
        <button
          onClick={goToMenu}
          disabled={gameState !== gameStates.GAME_OVER}
        >
          Chơi lại
        </button>
      </div>
    </>
  );
};
