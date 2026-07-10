import { webApiClient } from '@/shared/api/webApiClient'

describe('webApiClient', () => {
  it('uses JSON content type by default', () => {
    expect(webApiClient.defaults.headers['Content-Type']).toBe('application/json')
  })
})
