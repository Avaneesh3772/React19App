import { Outlet } from 'react-router-dom'
import { Footer } from '@/shared/components/layout/Footer'
import { Header } from '@/shared/components/layout/Header'
import { Sidebar } from '@/shared/components/layout/Sidebar'

export function AppLayout() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
