import Line from './components/Line';
import Players from './components/Players';
import Result from './components/Result';
import Table from './components/Table';
import { useAppSelector } from './redux/hooks';
import { selectWinner } from './redux/xoxSlice';

function App() {
  const winner = useAppSelector(selectWinner)
  return (
    <div className="flex flex-col justify-center items-center">
      <Players/>
      <Table/>
      {winner !== '' && <Line/>}
      {winner !== '' && <Result/>}
    </div>
  );
}

export default App;
