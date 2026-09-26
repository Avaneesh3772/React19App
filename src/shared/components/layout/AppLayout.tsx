import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

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
