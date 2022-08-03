import { PersonNew, PersonAll, PersonUpdate, PersonDelete } from './store/person.actions';
import { AppState, selectPeople } from './store/index';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Person } from './interfaces/person.interface';
import * as fromFaker from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private faker = fromFaker.faker
  public people$: Observable<Person[]>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.dispatch(new PersonAll())
    // this.people$ = this.store
    //   .pipe(
    //     /**
    //      * @select faz a busca dentro do estado da aplicação
    //      */
    //     select('people')
    //   )
    this.people$ = this.store.select(selectPeople)
    // this.store.select(selectPeopleCount)
    //   .subscribe((res) => console.log(res))
  }

  public addNew(): void {

    const person: Person = {
      name: this.faker.name.findName(),
      address: this.faker.address.streetAddress(),
      city: this.faker.address.city(),
      country: this.faker.address.country(),
      age: Math.round(Math.random() * 100),
      _id: new Date().getMilliseconds().toString()
    }

    this.store.dispatch(new PersonNew({ person }))
  }

  public update(p: Person): void {
    const person = {
      name: this.faker.name.findName(),
      address: this.faker.address.streetAddress(),
      city: this.faker.address.city(),
      country: this.faker.address.country(),
      age: Math.round(Math.random() * 100),
    }

    this.store.dispatch(new PersonUpdate({ person: { ...p, ...person } }))
  }

  public delete(p: Person) {
    this.store.dispatch(new PersonDelete({ id: p._id }))
  }
}
