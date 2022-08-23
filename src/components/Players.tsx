import { useAppSelector } from "../redux/hooks"
import { selectTurn } from "../redux/xoxSlice"

const Players = () => {
    const turn = useAppSelector(selectTurn);
    return (
    <div className='flex justify-around m-4 items-center w-full'>
        <div className={`${turn === 'X' ? 'text-green-600 bg-slate-200 ' : 'bg-stone-800 text-sky-50 '}p-2 rounded-md`}>Player X</div>
        <div className="text-6xl">
            {turn==='X'?'🠔':'🠖'}
        </div>
        <div className={`${turn === 'O' ? 'text-green-600 bg-slate-200 ' : 'bg-stone-800 text-sky-50 '}p-2 rounded-md`} >Player O</div>
    </div>
  )
}

export default Players