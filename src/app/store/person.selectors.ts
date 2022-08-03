import { createFeatureSelector } from '@ngrx/store';
import * as fromPersonReducer from './person.reducer';

export const peopleState = createFeatureSelector<fromPersonReducer.PeopleState>('people')

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = fromPersonReducer.peopleAdapter.getSelectors(peopleState);
