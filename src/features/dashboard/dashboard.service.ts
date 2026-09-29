import { baseHttpGetRequest } from '../../shared/api/webApiClient'
import { DashboardConstants } from './dashboard.constants'
import type { UserList } from './dashboard.models'

export function getUsersList() {
  return baseHttpGetRequest<UserList[]>(DashboardConstants.userApiURL)
}
