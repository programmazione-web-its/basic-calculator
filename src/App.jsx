import { useState, useRef, useReducer } from 'react'

import Button from './components/Button'
import { PlusIcon, MinusIcon } from '@phosphor-icons/react'

import countReducer from './countReducer'


function App() {

  const inputRef = useRef(null)
  const initialState = [
    {item: 'oooio'},
    {item: 'oooio'},
    {item: 'oooio'},
    {item: 'oooio'},
    {item: 'oooio'},
  ]
  const [count, dispatchCount] = useReducer(countReducer, initialState)



  // const increment = () => setCount((c) => c + 1)
  // const decrement = () => setCount((c) => c - 1)
  // const incrementByAmount = () =>
  //   setCount((c) => c + Number(inputRef.current.value))

  function increment() {
    // dispatchCount({ type: 'increment' })
    countReducer(initialState,{ type: 'decrement' })
  }

  function decrement() {
    dispatchCount({ type: 'decrement' })
  }

  function incrementByAmount() {
    dispatchCount({
      type: 'incrementByAmount', 
      payload: {
        amount: inputRef.current.value
      }
    })
  }

  return (
    <div className='container my-10'>
      <div className='lg:w-lg mx-auto '>
        <div className='text-center text-neutral-100'>
          <h1 className='text-4xl font-bold'>Let's count!</h1>
          <p className='text-xl my-4 text-primary font-bold'>{count}</p>
        </div>
        <div className='flex items-center gap-4 justify-center'>
          <Button title='Increment' icon={<PlusIcon />} onClick={increment} />
          <Button title='Decrement' icon={<MinusIcon />} onClick={decrement} />
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
            <Button icon={<PlusIcon size={24} />} onClick={incrementByAmount} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
