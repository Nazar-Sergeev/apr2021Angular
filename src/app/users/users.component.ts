import { Component, OnInit } from '@angular/core';
import {UserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users: UserModel[] = [
    {name: 'Vasya', age: 31, status: true},
    {name: 'Petya', age: 31, status: false},
    {name: 'Vasya', age: 31, status: true},
    {name: 'Petya', age: 31, status: false},
    {name: 'Vasya', age: 31, status: true},
    {name: 'Petya', age: 31, status: false},
    {name: 'Vasya', age: 31, status: true},
    {name: 'Vasya', age: 31, status: true}
  ];

  constructor() { }



}
