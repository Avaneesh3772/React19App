import AccountBalanceIcon from '@mui/icons-material/AccountBalance'

export function Phase1Home() {
  return (
    <div className="page-container">
      <p className="page-title">
        <AccountBalanceIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
        React19App
      </p>
      <p className="page-subtitle">CQRS — Global Knowledge. Local Support.</p>
      <p>Phase 1 complete — foundation is ready.</p>
      <p>Next: Phase 2 — Header, Footer, Sidebar, and business routes.</p>
    </div>
  )
}
