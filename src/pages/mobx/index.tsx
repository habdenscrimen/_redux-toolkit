import React, { FC, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import 'mobx-react-lite/batchingForReactDom'

import { Counter, Users } from '~/components'
import { counterStore, usersStore } from './store'

interface Props extends RouteComponentProps {}

export const MobxPage: FC<Props> = () => {
  const cStore = useLocalStore(counterStore)
  const uStore = useLocalStore(usersStore)

  useEffect(() => {
    uStore.fetchUsers()
  }, [])

  return useObserver(() => (
    <main>
      <h2>MobX page</h2>

      <Counter
        decrement={cStore.decrement}
        increment={cStore.increment}
        counter={cStore.counter}
      />

      <Users isLoading={uStore.loading} users={uStore.users} />
    </main>
  ))
}
