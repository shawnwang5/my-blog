import { Action } from '@ngrx/store'
import { AppState, initialState } from './model'

export function appReducer (state: AppState = initialState, action: Action) {
    switch (action.type) {
        default :
            return state
    }
}
