import React, { FC, Fragment } from 'react'

interface Props {
  decrement: () => void
  increment: () => void
  counter: number
}

export const Counter: FC<Props> = ({ decrement, increment, counter }) => (
  <Fragment>
    <h3>Counter</h3>
    <section>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </section>
  </Fragment>
)
