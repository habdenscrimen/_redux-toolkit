import React, { FC, Fragment } from 'react'
import { User } from '~/types/user'

interface Props {
  isLoading: boolean
  users: Array<User>
}

export const Users: FC<Props> = ({ isLoading, users }) => {
  return (
    <Fragment>
      <h3>Users</h3>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        users.map((u) => (
          <div key={u.id}>
            <span>{u.name}</span>
            <span>{u.username}</span>
          </div>
        ))
      )}
    </Fragment>
  )
}
