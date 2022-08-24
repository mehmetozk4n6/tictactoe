import LineFinish from './components/Line';
import Players from './components/Players';
import Result from './components/Result';
import Table from './components/Table';
import { useAppSelector } from './redux/hooks';
import { selectTurnCount, selectWinner } from './redux/xoxSlice';


function App() {
  const winner = useAppSelector(selectWinner)
  const turnCount = useAppSelector(selectTurnCount)
  return (
    <div className="App flex flex-col justify-center items-center w-96 mx-auto ">
      <Players/>
      <Table/>
      {winner !== '' ? <Result/> : turnCount===9 ? <Result/> : <></>}
      {winner !== '' ? <LineFinish/> : turnCount===9 ? <LineFinish/> : <></>}
    </div>
  );
}

export default App;
