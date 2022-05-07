import {UserType} from "../HW8";

export type ActionType = SortType | CheckType

export type SortType = {
    type: 'sort',
    payload: 'up' | 'down'
}

export type CheckType = {
    type: 'check',
    payload: number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }

        case 'check': {
            // need to fix
            return state.filter(s => action.payload <= s.age)
        }

        default: return state
    }
}