interface PageShellProps {
  title: string
  subtitle?: string
}

export function PageShell({ title, subtitle }: PageShellProps) {
  return (
    <div className="page-container">
      <p className="page-title">{title}</p>
      {subtitle ? <p className="page-subtitle">{subtitle}</p> : null}
    </div>
  )
}
