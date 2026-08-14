import { useEffect, useState, useRef } from 'react'

export const useBackendData = (loader, deps = []) => {
  const [state, setState] = useState({ data: null, loading: true, error: null })
  const loaderRef = useRef(loader)

  // Keep the latest loader reference updated without triggering re-renders
  useEffect(() => {
    loaderRef.current = loader
  })

  useEffect(() => {
    let alive = true

    const load = async () => {
      setState((current) => ({ ...current, loading: true, error: null }))

      try {
        const data = await loaderRef.current()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}