export interface NavigationItem {
  label: string
  path?: string
  children?: { label: string; path: string }[]
}

export const businessNavigation: NavigationItem[] = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Templates', path: '/templates' },
  {
    label: '⚙️ Admin',
    children: [
      { label: 'Close Quarter', path: '/admin/close-quarter' },
      { label: 'LE Calculation', path: '/admin/le-calculation' },
      { label: 'Rounding Model Calculation', path: '/admin/rounding-model-calculation' },
    ],
  },
  {
    label: '👥 Role',
    children: [
      { label: 'Role Definition', path: '/role/role-definition' },
      { label: 'Role Assignment', path: '/role/role-assignment' },
    ],
  },
  {
    label: '🔄 Restatement',
    children: [
      { label: 'Initiate and Define', path: '/restatement/initiate-and-define' },
      { label: 'Track and Action', path: '/restatement/track-and-action' },
    ],
  },
]
