import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { DashboardConstants } from './dashboard.constants'
import type { UserList } from './dashboard.models'
import { getUsersList } from './dashboard.service'

const columnLabels: Record<(typeof DashboardConstants.displayedColumns)[number], string> = {
  id: 'ID',
  name: 'Name',
  username: 'Username',
  email: 'Email',
  phone: 'Phone',
}

export function Dashboard() {
  const usersQuery = useQuery({
    queryKey: ['dashboard', 'users'],
    queryFn: getUsersList,
  })

  return (
    <div className="page-container">
      <h2 className="page-title">Dashboard</h2>

      {usersQuery.isPending && (
        <div className="loading-icon-position">
          <CircularProgress size={30} />
          <p>Loading...</p>
        </div>
      )}

      {usersQuery.isError && (
        <p className="error-message">
          <ErrorOutlinedIcon fontSize="small" />
          {usersQuery.error instanceof Error ? usersQuery.error.message : 'Failed to load users'}
        </p>
      )}

      {usersQuery.data && (
        <Table className="app-table">
          <TableHead>
            <TableRow className="app-table-row">
              {DashboardConstants.displayedColumns.map((column) => (
                <TableCell key={column} component="th">
                  {columnLabels[column]}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersQuery.data.map((user) => (
              <TableRow key={user.id} className="app-table-row">
                {DashboardConstants.displayedColumns.map((column) => (
                  <TableCell key={column}>{user[column as keyof UserList] as string | number}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
