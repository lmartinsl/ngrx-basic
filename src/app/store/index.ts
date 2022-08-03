import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export interface AppState {
  people: fromPersonReducer.PeopleState
}

export const appReducers: ActionReducerMap<AppState> = {
  people: fromPersonReducer.reducer
}

// export const selectPeople = (state: AppState) => {
//   return state.people
// }

// export const selectPeopleCount = createSelector(
//   selectPeople,
//   (people) => people.length
// )

// export const selectPeopleCount2 = createSelector(
//   selectPeopleCount,
//   selectPeople,
//   (n, people) => `Number count: ${n} - ${people}`
// )
