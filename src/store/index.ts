import { createStore } from 'react-rtk'
import User from './slice/User'
import Auth from './slice/Auth'

export const [store, useStore, actions] = createStore(User, Auth)
