import { createStore } from 'react-rtk'
import User from './slice/User'

export const [store, useStore, actions] = createStore(User)
