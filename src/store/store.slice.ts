import {
  AnyAction,
  Middleware,
  PayloadAction,
  configureStore,
  createSlice,
  Dispatch,
} from '@reduxjs/toolkit'

/** ---------- 1) Types d’état ---------- */
type User = { name: string; loggedIn: boolean }

export interface AppState {
  count: number
  user: User
}

/** ---------- 2) État initial ---------- */
const initialState: AppState = {
  count: 0,
  user: { name: 'Alice', loggedIn: false },
}

/** ---------- 3) Slice : actions + reducer ---------- */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = { name: '', loggedIn: false }
    },
  },
})

export const { increment, decrement, setUser, logout } = appSlice.actions

/** ---------- 4) Middleware générique (usine) ----------
 *  - Paramétrable avec un tag et un filtre
 *  - Typé sur l’état (TState) et le type d’action (A)
 *  - Exemple d’usage plus bas dans configureStore()
 */
export function createLoggerMiddleware<
  TState,
  A extends AnyAction = AnyAction
>(options?: {
  tag?: string
  filter?: (action: A, state: TState) => boolean
}): Middleware<{}, TState, Dispatch<A>> {
  const tag = options?.tag ?? 'LOGGER'
  const shouldLog = options?.filter ?? (() => true)

  const middleware = (storeApi) => (next) => (action) => {
      const prev = storeApi.getState()
      const result = next(action as A)
      const nextState = storeApi.getState()

      if (shouldLog(action as A, nextState)) {
        // Logging minimal et non intrusif
        // (remplace console.* si besoin par un collecteur)
        console.group?.(`[${tag}] ${action.type}`)
        console.log('prev:', prev)
        console.log('action:', action)
        console.log('next:', nextState)
        console.groupEnd?.()
      }

      return result
    }

  return middleware
}

const simpleMiddleware = (storeApi) => (next) => (action) => {
  console.log('Simple Middleware:', action)
  return next(action)
}

/** ---------- 5) Store ---------- */
const store = configureStore({
  reducer: appSlice.reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // Ici on paramètre le middleware générique pour AppState
      /* createLoggerMiddleware<AppState>({
        tag: 'APP',
        // Exemple : log uniquement les actions sur le compteur
        filter: (action) => /^(app\/increment|app\/decrement)$/.test(action.type),
      }), */
        simpleMiddleware
    ),
})

/** ---------- 6) Types utilitaires ---------- */
export type RootState = ReturnType<typeof store.getState> // = AppState ici (réducteur unique)
export type AppDispatch = typeof store.dispatch

/** ---------- 7) Exemple d’utilisation (Node/JS) ----------
import { store, increment, setUser } from './store'
store.dispatch(increment())
store.dispatch(setUser({ name: 'Bob', loggedIn: true }))
console.log(store.getState())
*/

/** ---------- 8) Hooks React (optionnel) ----------
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
*/

export const store = {}