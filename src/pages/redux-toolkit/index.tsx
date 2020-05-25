import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDispatch, useSelector, Provider } from 'react-redux'

import { Counter, Users } from '~/components'
import { store, Store, counterSilce, fetchUsers } from './store'

interface Props extends RouteComponentProps {}

const ReduxToolkit: FC<Props> = () => {
  const dispatch = useDispatch()

  const counter = useSelector((store: Store) => store.counter)
  const usersStore = useSelector((store: Store) => store.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <main>
      <h2>ReduxToolkitPage</h2>

      <Counter
        decrement={() => dispatch(counterSilce.actions.decrement())}
        increment={() => dispatch(counterSilce.actions.increment())}
        counter={counter}
      />

      <Users isLoading={usersStore.loading} users={usersStore.users} />
    </main>
  )
}

export const ReduxToolkitPage: FC<Props> = (props) => (
  <Provider store={store}>
    <ReduxToolkit {...props} />
  </Provider>
)
