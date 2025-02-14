import { useState, useEffect } from 'react'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode))
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    } else {
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (darkMode !== undefined) {
      localStorage.setItem('darkMode', JSON.stringify(darkMode))

      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  return {
    darkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
  }
}
