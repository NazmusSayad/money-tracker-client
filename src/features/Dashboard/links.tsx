import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

type Link = {
  Icon: any
  iconProps?: object

  to: string
  main?: boolean
  shortLabel: string
  longLabel: string
}

const links: Link[] = [
  {
    Icon: AntDesign,
    iconProps: { name: 'book' },

    to: '/transaction',
    main: true,
    shortLabel: 'Trans.',
    longLabel: 'Transaction',
  },
  {
    Icon: Ionicons,
    iconProps: { name: 'md-stats-chart-outline' },

    to: '/statistics',
    main: true,
    shortLabel: 'Stats',
    longLabel: 'Statistics',
  },
  {
    Icon: Feather,
    iconProps: { name: 'database' },

    to: '/accounts',
    main: true,
    shortLabel: 'Acc.',
    longLabel: 'Accounts',
  },
  {
    Icon: Entypo,
    iconProps: { name: 'dots-three-horizontal' },

    to: '/more',
    main: true,
    shortLabel: 'More',
    longLabel: 'More',
  },
]

export default links
