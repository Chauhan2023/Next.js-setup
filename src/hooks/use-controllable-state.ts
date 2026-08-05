import { useCallback, useState } from 'react'

export function useControllableState<T>({
  prop,
  defaultProp,
  onChange,
}: {
  prop?: T
  defaultProp: T
  onChange?: (state: T) => void
}) {
  const [uncontrolledState, setUncontrolledState] = useState(defaultProp)
  const isControlled = prop !== undefined
  const state = isControlled ? prop : uncontrolledState

  const setState = useCallback(
    (nextState: T | ((prev: T) => T)) => {
      const value = nextState instanceof Function ? nextState(state) : nextState
      if (!isControlled) {
        setUncontrolledState(value)
      }
      onChange?.(value)
    },
    [isControlled, state, onChange],
  )

  return [state, setState] as const
}
