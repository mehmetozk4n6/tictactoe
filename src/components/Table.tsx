import {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { addPosition, changeTurn, selectTurn, whoWin } from '../redux/xoxSlice'

const Table = () => {
    const styles = {
        mainBox:'border-solid border-4 border-black w-32 h-32 ',
        boxTop:'border-t-0 ',
        boxBot:'border-b-0 ',
        boxLeft:'border-l-0 ',
        boxRight:'border-r-0 '
    }
    const [turnCount,setTurnCount] = useState(0)
    const turn = useAppSelector(selectTurn);
    const dispatch = useAppDispatch()

    const getId = (e: React.MouseEvent<HTMLTableCellElement, MouseEvent>) => {
        const target = e.target as HTMLTextAreaElement;
        target.innerText = turn === 'X' ? 'X' : 'O';

        dispatch(addPosition({turn,position:parseInt(target.id)}));

        if(turn === 'X') setTurnCount(prev=>prev+1);
        if(turnCount>1) dispatch(whoWin());

        dispatch(changeTurn());
    }
    
  return (
    <div className='bg-orange-200 p-6 rounded-md'>
        <table className='border-collapse border-none text-7xl text-center '>
        <tbody>
        <tr>
            <td onClick={getId} className={styles.mainBox+styles.boxTop+styles.boxLeft} id="0"></td>
            <td onClick={getId} className={styles.mainBox+styles.boxTop} id="1"></td>
            <td onClick={getId} className={styles.mainBox+styles.boxTop+styles.boxRight} id="2"></td>
        </tr>
        <tr>
            <td onClick={getId} className={styles.mainBox+styles.boxLeft} id="3"></td>
            <td onClick={getId} className={styles.mainBox} id="4"></td>
            <td onClick={getId} className={styles.mainBox+styles.boxRight} id="5"></td>
        </tr>
        <tr>
            <td onClick={getId} className={styles.mainBox+styles.boxBot+styles.boxLeft} id="6"></td>
            <td onClick={getId} className={styles.mainBox+styles.boxBot} id="7"></td>
            <td onClick={getId} className={styles.mainBox+styles.boxBot+styles.boxRight} id="8"></td>
        </tr>
        </tbody>
    </table>
    </div>
    
  )
}

export default Table