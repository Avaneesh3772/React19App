import { useState } from 'react'
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { DashboardConstants } from './dashboard.constants'
import type { UserList } from './dashboard.models'
import { DialogUserInfo } from './DialogUserInfo'
import { useUsersList } from './useUsersList'

export function Dashboard() {
  const { usersListData, isPending, isError, error } = useUsersList()
  const [selectedUser, setSelectedUser] = useState<UserList | null>(null)

  const isEmptyResponse = usersListData && usersListData.length === 0
  const isResponseValid = usersListData && usersListData.length > 0

  return (
    <div className="page-container">
      <h2 className="page-title">Dashboard</h2>

      {isPending && (
        <div className="loading-icon-position">
          <CircularProgress size={30} />
          <p>Loading...</p>
        </div>
      )}

      {isError && (
        <p className="error-message">
          <ErrorOutlinedIcon fontSize="small" />
          {error instanceof Error ? error.message : 'Failed to load users'}
        </p>
      )}

      {isEmptyResponse && <p>There are no users to display.</p>}

      {isResponseValid && (
        <Table className="app-table">
          <TableHead>
            <TableRow className="app-table-row">
              {DashboardConstants.userTableColumns.map((column) => (
                <TableCell key={column.key} component="th">
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {usersListData.map((user) => (
              <TableRow
                key={user.id}
                className="app-table-row"
                hover
                onClick={() => setSelectedUser(user)}
              >
                {DashboardConstants.userTableColumns.map((column) => (
                  <TableCell key={column.key}>{user[column.key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <DialogUserInfo
        userInfo={selectedUser}
        open={selectedUser !== null}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  )
}
