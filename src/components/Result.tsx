import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectWinner } from '../redux/xoxSlice'

const Result = () => {
    const winner = useAppSelector(selectWinner);
  return (
<div className="fixed z-10 inset-0 overflow-y-auto">
  <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
    <div className="relative bg-white opacity-95 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h1 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">Winner is {winner} !!!</h1>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">New Game</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Result