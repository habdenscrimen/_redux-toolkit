import { User } from './types/user'

export const requestUsers = (): Promise<Array<User>> =>
  fetch('https://jsonplaceholder.typicode.com/users').then((r) => r.json())
