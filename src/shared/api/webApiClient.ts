import axios from 'axios'

export const webApiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
})

export function baseHttpGetRequest<T>(apiURL: string, params?: Record<string, string | number | boolean>) {
  return webApiClient.get<T>(apiURL, { params }).then((response) => response.data)
}

export function baseHttpPostRequest<T>(apiURL: string, body: unknown, params?: Record<string, string | number | boolean>) {
  return webApiClient.post<T>(apiURL, body, { params }).then((response) => response.data)
}

export function baseHttpPutRequest<T>(apiURL: string, body: unknown, params?: Record<string, string | number | boolean>) {
  return webApiClient.put<T>(apiURL, body, { params }).then((response) => response.data)
}

export function baseHttpDeleteRequest<T>(apiURL: string, params?: Record<string, string | number | boolean>) {
  return webApiClient.delete<T>(apiURL, { params }).then((response) => response.data)
}
