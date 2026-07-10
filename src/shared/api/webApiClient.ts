import axios from 'axios'

/**
 * Base HTTP client — maps to Angular WebApiService + HttpClient.
 * Auth interceptor will be added in Phase 8.
 */
export const webApiClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
})

webApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('Inside webApiClient Error =>', error)
    return Promise.reject(error)
  },
)

export const baseHttpGetRequest = <T>(apiURL: string, params?: Record<string, string>) =>
  webApiClient.get<T>(apiURL, { params }).then((response) => response.data)

export const baseHttpPostRequest = <T>(apiURL: string, body: unknown) =>
  webApiClient.post<T>(apiURL, body).then((response) => response.data)

export const baseHttpPutRequest = <T>(apiURL: string, body: unknown) =>
  webApiClient.put<T>(apiURL, body).then((response) => response.data)

export const baseHttpDeleteRequest = <T>(apiURL: string) =>
  webApiClient.delete<T>(apiURL).then((response) => response.data)
