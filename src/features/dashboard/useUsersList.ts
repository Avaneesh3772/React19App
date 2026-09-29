import { useQuery } from '@tanstack/react-query'
import { getUsersList } from './dashboard.service'

export function useUsersList() {
  const { data, isPending, isSuccess, isError, error } = useQuery({
    queryKey: ['dashboard', 'users'],
    queryFn: getUsersList,
  })

  return {
    usersListData: data,
    isPending,
    isSuccess,
    isError,
    error,
  }
}
