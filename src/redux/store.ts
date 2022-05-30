import { Action, AsyncThunkAction, configureStore, Middleware, Reducer } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import ui from './reducers/uiReducer';
import auth from './reducers/authReducer';

export function createStore(initialState) {
  const store = configureStore({
    reducer: {
      ui: ui.reducer,
      auth: auth.reducer,
      preloadedState: initialState
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(
        thunk as Middleware<
          (action: Action<'specialAction'>) => any,
          {}
        >,
      )
  })

  return store;
}

