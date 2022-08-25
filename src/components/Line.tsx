import { Line } from 'react-lineto';
import { useAppSelector } from '../redux/hooks';
import { selectWinnedCondition, selectWinner } from '../redux/xoxSlice';

const LineFinish = () => {
  const winnedCondition = useAppSelector(selectWinnedCondition)
  const winner = useAppSelector(selectWinner)
  let x1;
  let x0;
  let y1;
  let y0;
  if(winnedCondition.length>0){
    winnedCondition.forEach((id,index) => {
      if(index === 0){
        const element = document.getElementById(`${id}`)
        const position = element?.getBoundingClientRect();
        x0 = position?.left;
        y0 = position?.top;
        console.log(x0,y0);
      }
      if(index === 2){
        const element = document.getElementById(`${id}`)
        const position = element?.getBoundingClientRect();
        x1 = position?.left;
        y1 = position?.top;
        console.log(x1,y1);
        
      }
      
    })
  }

  return (
    <Line x0={x0===undefined ? 0 : x0+44} y0={y0===undefined ? 0 : y0+40} x1={x1===undefined ? 0 : x1+44} y1={y1===undefined ? 0 : y1+40} borderColor={winner==='X' ? '#AB1A1A' : 'black'} borderWidth={10}/>
  )
}

export default LineFinish