import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setIsDark(!isDark)
  }

  const showDark = isHovered ? !isDark : isDark
  const isSun = !showDark

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        p-2 rounded-full transition-transform duration-300 ease-in-out shadow-md border-[1px]
        ${isSun ? 'bg-primary border-secondary text-secondary' : 'bg-transparent border-primary text-primary'}
        hover:scale-110
      `}
      aria-label="Toggle Theme"
    >
      <div className="transition-all duration-300 ease-in-out">
        {isSun
          ? <Sun className="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />
          : <Moon className="w-3 h-3 sm:w-4 sm:h-4 transition-colors duration-300" />}
      </div>
    </button>
  )
}
