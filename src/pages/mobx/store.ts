import { User } from '~/types/user'
import { requestUsers } from '~/request-users'

// -- counter store -- //

export const counterStore = () => ({
  counter: 0,

  increment() {
    this.counter += 1
  },

  decrement() {
    this.counter -= 1
  },
})

// -- users store -- //

export const usersStore = () => ({
  loading: false,
  users: [] as Array<User>,

  fetchUsers() {
    this.loading = true

    return requestUsers()
      .then((users) => {
        this.users = users.map((u) => ({
          id: u.id,
          name: u.name,
          username: u.username,
        }))
      })
      .catch(console.error)
      .finally(() => {
        this.loading = false
      })
  },
})
