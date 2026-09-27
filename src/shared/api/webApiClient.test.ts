import { baseHttpGetRequest, webApiClient } from './webApiClient'

describe('webApiClient', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('returns response.data from GET', async () => {
    jest.spyOn(webApiClient, 'get').mockResolvedValue({ data: { firstname: 'Avaneesh' } } as never)

    const data = await baseHttpGetRequest('/assets/mockData/appConfiguration.json')

    expect(data).toEqual({ firstname: 'Avaneesh' })
    expect(webApiClient.get).toHaveBeenCalledWith('/assets/mockData/appConfiguration.json', {
      params: undefined,
    })
  })
})
