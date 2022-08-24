import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { changeTurn, selectTurn, selectTurnCount } from "../redux/xoxSlice";

const Players = () => {
  const turn = useAppSelector(selectTurn);
  const turnCount = useAppSelector(selectTurnCount);
  const dispatch = useAppDispatch();
  const ChangeTurn = () => {
    dispatch(changeTurn());
  };
  return (
    <>
      {turnCount < 1 && (
        <h3 className="text-center">
          You can change the first player when you click the player button
        </h3>
      )}
      <div className="flex justify-around m-4 items-center w-full">
        <button
          className={`${
            turn === "X"
              ? "text-gray-900 bg-slate-200 "
              : "bg-stone-800 text-sky-50 "
          }p-2 rounded-md`}
          id="PlayerX"
          onClick={ChangeTurn}
          disabled={turn === "X" || turnCount > 0}
        >
          Player X
        </button>
        <div className="text-6xl">{turn === "X" ? "🠔" : "🠖"}</div>
        <button
          className={`${
            turn === "O"
              ? "text-gray-900 bg-slate-200 "
              : "bg-stone-800 text-sky-50 "
          }p-2 rounded-md`}
          id="Player0"
          onClick={ChangeTurn}
          disabled={turn === "O" || turnCount > 0}
        >
          Player O
        </button>
      </div>
    </>
  );
};

export default Players;
