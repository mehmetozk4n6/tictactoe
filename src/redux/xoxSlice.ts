import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';

export interface XoxState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  winConditions : Array<number[]>
  xConditions:Array<number>
  oConditions:Array<number>
  turn: 'X' | 'O'
  winner : 'X' | 'O' | ''
  winnedCondition:Array<number>
}

const initialState: XoxState = {
  value: 0,
  status: 'idle',
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
  winnedCondition:[]
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
    },

    whoWin:(state) => {

      state.winConditions.some(condition=>{
        let isWin : Array<boolean> = []
        state.xConditions.forEach(xEl => {
          if(condition.includes(xEl)){
            isWin.push(true);
          }
        })
        if(isWin.filter(ok=>ok===true).length===3){
          state.winner ='X';
          state.winnedCondition = condition
        }else{
          isWin = [];
        }
      })

      state.winConditions.some(condition=>{
        let isWin : Array<boolean> = []
        state.oConditions.forEach(oEl => {
          if(condition.includes(oEl)){
            isWin.push(true);
          }
        })
        if(isWin.filter(ok=>ok===true).length===3){
          state.winner ='O';
          state.winnedCondition = condition
        }else{
          isWin = [];
        }
      })
    }
  },
});

export const {changeTurn, addPosition,whoWin } = xoxSlice.actions;

export const selectTurn = (state: RootState) => state.xox.turn;
export const selectWinner = (state: RootState) => state.xox.winner;


export default xoxSlice.reducer;
