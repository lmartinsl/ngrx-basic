import { Person } from './../../interfaces/person.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  @Output() public update: EventEmitter<Person> = new EventEmitter<Person>();
  @Output() public delete: EventEmitter<Person> = new EventEmitter<Person>();
  @Input() public person: Person;

  constructor() { }

  ngOnInit(): void {
  }

}
