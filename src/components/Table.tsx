import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addPosition, changeTurn, selectOConditions, selectTurn, selectXConditions, whoWin } from "../redux/xoxSlice";
import "./Table.css"

const Table = () => {
  const [turnCount, setTurnCount] = useState(0);
  const turn = useAppSelector(selectTurn);
  const xConditions = useAppSelector(selectXConditions);
  const oConditions = useAppSelector(selectOConditions);
  const allConditions = [...xConditions,...oConditions]
  const dispatch = useAppDispatch();
  const styles = {
    mainBox: `border-solid border-4 border-black w-20 h-20 cursor-pointer `,
    boxTop: "border-t-0 ",
    boxBot: "border-b-0 ",
    boxLeft: "border-l-0 ",
    boxRight: "border-r-0 ",
  };

  const addBackGround = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const target = e.target as HTMLTextAreaElement;
    if(!allConditions.includes(parseInt(target.id))){
      turn === 'X' ? target.classList.add("xstyle") : target.classList.add("ostyle")
    }
  };
  const removeBackGround = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const target = e.target as HTMLTextAreaElement;
    target.classList.remove("xstyle")
    target.classList.remove("ostyle")
  };

  const getId = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
    const target = e.target as HTMLTextAreaElement;

    if(!allConditions.includes(parseInt(target.id))){
      target.innerText = turn === "X" ? "X" : "O";
      if(turn === 'O'){
        target.classList.add("text-red-700")
      }
      
      target.classList.remove("xstyle")
      target.classList.remove("ostyle")
      dispatch(addPosition({ turn, position: parseInt(target.id) }));

      if (turn === "X") setTurnCount((prev) => prev + 1);
      if (turnCount > 1) dispatch(whoWin());
      dispatch(changeTurn());
    }
  };

  return (
    <div className="bg-orange-200 p-6 rounded-md relative">
      <table className="border-collapse border-none text-7xl text-center ">
        <tbody>
          <tr>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxTop + styles.boxLeft}
              id="0"
            ></td>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxTop}
              id="1"
            ></td>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxTop + styles.boxRight}
              id="2"
            ></td>
          </tr>
          <tr>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxLeft}
              id="3"
            ></td>
            <td onClick={getId} onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround} className={styles.mainBox} id="4"></td>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxRight}
              id="5"
            ></td>
          </tr>
          <tr>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxBot + styles.boxLeft}
              id="6"
            ></td>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxBot}
              id="7"
            ></td>
            <td
              onClick={getId}
              onMouseEnter={addBackGround}
              onMouseLeave={removeBackGround}
              className={styles.mainBox + styles.boxBot + styles.boxRight}
              id="8"
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
