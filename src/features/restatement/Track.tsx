import { useParams } from 'react-router-dom'

export function Track() {
  const { id } = useParams()

  return <h2>Track {id}</h2>
}
