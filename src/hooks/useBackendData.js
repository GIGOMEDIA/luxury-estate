import { useEffect, useState } from 'react'

export const useBackendData = (loader, deps = []) => {
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    let alive = true

    const load = async () => {
      setState((current) => ({ ...current, loading: true, error: null }))

      try {
        const data = await loader()

        if (alive) {
          setState({ data, loading: false, error: null })
        }
      } catch (error) {
        if (alive) {
          setState({ data: null, loading: false, error })
        }
      }
    }

    load()

    return () => {
      alive = false
    }
  }, deps)

  return state
}