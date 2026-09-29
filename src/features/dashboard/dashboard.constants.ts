export const DashboardConstants = {
  userApiURL: 'https://jsonplaceholder.typicode.com/users',
  userTableColumns: [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'username', label: 'Username' },
    { key: 'email', label: 'Email' },
    { key: 'phone', label: 'Phone' },
  ] as const,
}
