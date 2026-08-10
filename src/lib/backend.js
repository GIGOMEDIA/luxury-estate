const normalizeBaseUrl = (value) => value?.replace(/\/$/, '') || '/api'

export const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL)

const buildUrl = (path) => {
  if (/^https?:\/\//i.test(path)) {
    return path
  }

  return `${API_BASE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const getAuthToken = () => {
  if (typeof window === 'undefined') {
    return null
  }

  return window.localStorage.getItem('luxury-estate-token')
}

export const apiRequest = async (path, options = {}) => {
  const response = await fetch(buildUrl(path), {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(getAuthToken() ? { Authorization: `Bearer ${getAuthToken()}` } : {}),
      ...(options.headers || {}),
    },
  })

  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json') ? await response.json() : await response.text()

  if (!response.ok) {
    const message = typeof payload === 'string' ? payload : payload?.message || 'Request failed'
    throw new Error(message)
  }

  return payload
}

export const apiUrl = buildUrl