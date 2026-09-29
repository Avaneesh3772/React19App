import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import type { UserList } from './dashboard.models'
import './DialogUserInfo.scss'

export function DialogUserInfo({
  userInfo,
  open,
  onClose,
}: {
  userInfo: UserList | null
  open: boolean
  onClose: () => void
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {userInfo && (
        <>
          <DialogTitle>User Address Details - {userInfo.name}</DialogTitle>
          <DialogContent>
            <p className="item">Below is the Address details of {userInfo.name}</p>
            <div className="mat-card-border">
              <p className="item">
                Street <span className="value">{userInfo.address.street}</span>
              </p>
              <p className="item">
                Suite <span className="value">{userInfo.address.suite}</span>
              </p>
              <p className="item">
                City <span className="value">{userInfo.address.city}</span>
              </p>
              <p className="item">
                Zipcode <span className="value">{userInfo.address.zipcode}</span>
              </p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button type="button" onClick={onClose}>
              Close
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
