import { Routes, Route } from 'react-router-dom'
import { Phase1Home } from '@/app/pages/Phase1Home'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Phase1Home />} />
      <Route path="*" element={<Phase1Home />} />
    </Routes>
  )
}
