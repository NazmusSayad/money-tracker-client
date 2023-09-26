import { createStore } from 'react-rtk'
import Main from './slice/Main'
import User from './slice/User'
import Auth from './slice/Auth'
import Accounts from './slice/Accounts'
import Categories from './slice/Categories'
import Transactions from './slice/Transactions'

export const [store, useStore, actions] = createStore(
  Main,
  User,
  Auth,

  Accounts,
  Categories,
  Transactions
)
