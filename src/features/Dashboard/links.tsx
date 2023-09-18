import { ReactNode } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

type Link = {
  icon: ReactNode
  to: string
  main?: boolean
  shortLabel: string
  longLabel: string
}

const links: Link[] = [
  {
    icon: <AntDesign name="book" size={24} />,
    to: '/transaction',
    main: true,
    shortLabel: 'Trans.',
    longLabel: 'Transaction',
  },
  {
    icon: <Ionicons name="md-stats-chart-outline" size={24} />,
    to: '/statistics',
    main: true,
    shortLabel: 'Stats',
    longLabel: 'Statistics',
  },
  {
    icon: <Feather name="database" size={24} />,
    to: '/accounts',
    main: true,
    shortLabel: 'Acc.',
    longLabel: 'Accounts',
  },
  {
    icon: <Entypo name="dots-three-horizontal" size={24} />,
    to: '/more',
    main: true,
    shortLabel: 'More',
    longLabel: 'More',
  },
]

export default links
