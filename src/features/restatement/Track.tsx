import { useParams } from 'react-router-dom'
import { PageShell } from '@/shared/components/PageShell'

export function Track() {
  const { id } = useParams<{ id: string }>()

  return <PageShell title="Track" subtitle={`Track ID: ${id ?? ''}`} />
}
