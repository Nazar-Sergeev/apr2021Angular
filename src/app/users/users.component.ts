import { Component, OnInit } from '@angular/core';
import {IUserModel} from "../models/UserModel";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

   users:IUserModel[] = [
    {name: 'Vasya', age: 30, status: true},
    {name: 'Petya', age: 20, status: false},
    {name: 'Katya', age: 25, status: true},
    {name: 'Kolya', age: 26, status: false},
    {name: 'Sveta', age: 28, status: true},
    {name: 'Tanya', age: 24, status: false},
    {name: 'Lena', age: 32, status: true},
    {name: 'Tolya', age: 41, status: false}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
