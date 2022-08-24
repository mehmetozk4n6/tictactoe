import { createSlice} from '@reduxjs/toolkit';
import { RootState } from './store';

export interface XoxState {
  winConditions : Array<number[]>
  xConditions:Array<number>
  oConditions:Array<number>
  turn: 'X' | 'O'
  winner : 'X' | 'O' | ''
  winnedCondition:Array<number>
  turnCount:number
}

const initialState: XoxState = {
  winConditions: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ],
  xConditions:[],
  oConditions:[],
  turn:'X',
  winner : '',
  winnedCondition:[],
  turnCount:0
};


export const xoxSlice = createSlice({
  name: 'xox',
  initialState,
  reducers: {

    changeTurn: (state) => {
      state.turn = state.turn === 'X' ? 'O' :'X';
    },

    addPosition:(state,action) => {
      if(action.payload.turn==='X'){
        state.xConditions.push(action.payload.position)
      }else{
        state.oConditions.push(action.payload.position)
      }
      state.turnCount++;
    },

    whoWin:(state) => {

      state.winConditions.forEach(condition=>{
        let isWinX : Array<boolean> = []
        let isWinO : Array<boolean> = []

        state.xConditions.forEach(xEl => {
          if(condition.includes(xEl)){
            isWinX.push(true);
          }
        })
        if(isWinX.filter(ok=>ok===true).length===3){
          state.winner ='X';
          state.winnedCondition = condition
        }else{
          isWinX = [];
        }

        state.oConditions.forEach(oEl => {
          if(condition.includes(oEl)){
            isWinO.push(true);
          }
        })
        if(isWinO.filter(ok=>ok===true).length===3){
          state.winner ='O';
          state.winnedCondition = condition
        }else{
          isWinO = [];
        }
      })

    },

    reset:(state) => {
      window.location.reload()
    }
  },
});

export const {changeTurn, addPosition, whoWin, reset  } = xoxSlice.actions;

export const selectTurn = (state: RootState) => state.xox.turn;
export const selectWinner = (state: RootState) => state.xox.winner;
export const selectTurnCount = (state:RootState) => state.xox.turnCount;
export const selectWinnedCondition = (state:RootState) => state.xox.winnedCondition
export const selectXConditions = (state:RootState) => state.xox.xConditions
export const selectOConditions = (state:RootState) => state.xox.oConditions



export default xoxSlice.reducer;
