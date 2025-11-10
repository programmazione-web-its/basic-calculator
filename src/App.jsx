import { useState, useRef, useReducer } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, incrementByAmount } from './store/counterSlice'


import Button from './components/Button'
import { PlusIcon, MinusIcon } from '@phosphor-icons/react'

import countReducer from './countReducer'


function App() {

  const inputRef = useRef(null)
 
  const count = useSelector(state => state.count) 
  const dispatch = useDispatch()

  // const increment = () => setCount((c) => c + 1)
  // const decrement = () => setCount((c) => c - 1)
  // const incrementByAmount = () =>
  //   setCount((c) => c + Number(inputRef.current.value))

  function handleIncrement() {
   dispatch(increment())
  }

  function handleDecrement() {
   dispatch(decrement())
  }

  function handleIncrementByAmount() {
   dispatch(incrementByAmount({amount: inputRef.current.value}))
  }

  return (
    <div className='container my-10'>
      <div className='lg:w-lg mx-auto '>
        <div className='text-center text-neutral-100'>
          <h1 className='text-4xl font-bold'>Let's count!</h1>
          <p className='text-xl my-4 text-primary font-bold'>{count.value}</p>
        </div>
        <div className='flex items-center gap-4 justify-center'>
          <Button title='Increment' icon={<PlusIcon />} onClick={handleIncrement} />
          <Button title='Decrement' icon={<MinusIcon />} onClick={handleDecrement} />
        </div>
        <div className='my-7 text-center'>
          <h3 className='text-neutral-100 font-semibold text-lg'>
            Increment by amount
          </h3>
          <div className='flex items-center justify-center gap-3'>
            <input
              ref={inputRef}
              className='bg-surface border border-secondary font-mono py-2 px-1 rounded-md my-4 text-neutral-100 '
              type='number'
            />
            <Button icon={<PlusIcon size={24} />} onClick={handleIncrementByAmount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
