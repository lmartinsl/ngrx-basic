/* import { Person } from './../interfaces/person.interface';
import { PersonActions, PersonActionTypes } from './person.actions';

export const initialState: Person[] = [];

export function reducer(state = initialState, action: PersonActions) {
  switch (action.type) {
    case PersonActionTypes.PERSON_ALL:
      return state;

    case PersonActionTypes.PERSON_DELETE:
      return state.filter((p: Person) => p._id !== action.payload.id);

    case PersonActionTypes.PERSON_NEW:
      return state.concat([action.payload.person])

    case PersonActionTypes.PERSON_UPDATE:
      let people = state.slice();
      let i = people.findIndex((p: Person) => p._id === action.payload.person._id)
      if (i >= 0) {
        people[i] = action.payload.person
      }
      return people;

    default:
      return state;
  }
} */

///////////////////////////////////// UTILIZANDO O ENTITY ///////////////////////////////////////////

import { Person } from './../interfaces/person.interface';
import { PersonActions, PersonActionTypes } from './person.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'

export interface PeopleState extends EntityState<Person> {

}

export const peopleAdapter: EntityAdapter<Person> = createEntityAdapter<Person>({
  selectId: (p: Person) => p._id
});

export const initialState: PeopleState = peopleAdapter.getInitialState({});

export function reducer(state = initialState, action: PersonActions) {
  switch (action.type) {

    case PersonActionTypes.PERSON_NEW:
      return peopleAdapter.addOne(action.payload.person, state)

    case PersonActionTypes.PERSON_DELETE:
      return peopleAdapter.removeOne(action.payload.id, state)

    case PersonActionTypes.PERSON_UPDATE:
      return peopleAdapter.updateOne(
        {
          id: action.payload.id,
          changes: action.payload.changes
        }, state
      )

    default:
      return state;
  }
}
