import { Link } from 'react-router-dom'

export function PageNotFound() {
  return (
    <div className="page-container not-found-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  )
}
