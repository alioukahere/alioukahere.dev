// src/hooks/useDarkMode.ts
import { useState, useEffect } from 'react'

export function useDarkMode() {
  // Initialize state from localStorage if available, otherwise default to system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // First, check if there's a saved preference in localStorage
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        return JSON.parse(savedMode)
      }

      // If no saved preference, check system preference
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return false // Default to light mode on server-side
  })

  // Effect to handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if there's no saved preference
      if (!localStorage.getItem('darkMode')) {
        setDarkMode(e.matches)
      }
    }

    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Effect to handle dark mode changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Save preference to localStorage
      localStorage.setItem('darkMode', JSON.stringify(darkMode))

      // Update document class for Tailwind
      if (darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkMode])

  // Function to toggle dark mode
  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return { darkMode, toggleDarkMode }
}
