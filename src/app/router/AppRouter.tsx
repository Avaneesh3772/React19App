import { Navigate, Route, Routes } from 'react-router-dom'
import { CloseQuarter } from '../../features/admin/CloseQuarter'
import { LeCalculation } from '../../features/admin/LeCalculation'
import { RoundingModelCalculation } from '../../features/admin/RoundingModelCalculation'
import { Dashboard } from '../../features/dashboard/Dashboard'
import { InitiateAndDefine } from '../../features/restatement/InitiateAndDefine'
import { Track } from '../../features/restatement/Track'
import { TrackAndAction } from '../../features/restatement/TrackAndAction'
import { RoleAssignment } from '../../features/role/RoleAssignment'
import { RoleDefinition } from '../../features/role/RoleDefinition'
import { Templates } from '../../features/templates/Templates'
import { PageNotFound } from '../../shared/components/PageNotFound'
import { AppLayout } from '../../shared/components/layout/AppLayout'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="templates" element={<Templates />} />
        <Route path="admin/close-quarter" element={<CloseQuarter />} />
        <Route path="admin/le-calculation" element={<LeCalculation />} />
        <Route path="admin/rounding-model-calculation" element={<RoundingModelCalculation />} />
        <Route path="role/role-definition" element={<RoleDefinition />} />
        <Route path="role/role-assignment" element={<RoleAssignment />} />
        <Route path="restatement/initiate-and-define" element={<InitiateAndDefine />} />
        <Route path="restatement/track-and-action" element={<TrackAndAction />} />
        <Route path="restatement/track/:id" element={<Track />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}
