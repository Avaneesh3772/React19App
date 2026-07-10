import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import appConfiguration from '@/assets/mockData/appConfiguration.json'
import type { AppConfiguration } from '@/shared/types/appConfiguration'

const config = appConfiguration as AppConfiguration

export function Header() {
  const displayName = `${config.firstname} ${config.lastname}`

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            <AccountBalanceIcon className="material-icons" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            CQRS
          </h1>
          <h2>Global Knowledge. Local Support.</h2>
        </div>
        <div className="user">
          <h2>
            <AccountCircleIcon className="material-icons" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            Username - {displayName}
          </h2>
        </div>
      </div>
    </div>
  )
}
