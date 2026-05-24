import { useCallback, useEffect, useRef, useState } from "react"

export function useMousePosition(): {
  ref: React.RefObject<HTMLDivElement | null>
  x: number
  y: number
} {
  const ref = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 })
  const rafRef = useRef<number>(0)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const element = ref.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setPosition({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      })
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0.5, y: 0.5 })
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  return { ref, x: position.x, y: position.y }
}
