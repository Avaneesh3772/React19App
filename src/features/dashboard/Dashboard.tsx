import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getUsersList } from './dashboard.service'

export function Dashboard() {
  const usersQuery = useQuery({
    queryKey: ['dashboard', 'users'],
    queryFn: getUsersList,
  })

  useEffect(() => {
    if (usersQuery.data) {
      console.log('Dashboard users loaded:', usersQuery.data)
    }
  }, [usersQuery.data])

  return <h2>Dashboard</h2>
}
