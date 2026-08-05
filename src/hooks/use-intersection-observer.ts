import { useEffect, useRef, useState } from "react"

interface UseIntersectionObserverOptions {
  threshold?: number
  rootMargin?: string
  enabled?: boolean
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {},
) {
  const { threshold = 0, rootMargin = "0px", enabled = true } = options
  const ref = useRef<T>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    if (!enabled || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold, rootMargin },
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [enabled, threshold, rootMargin])

  return { ref, isIntersecting }
}
