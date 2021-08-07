import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userService: UserService) {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  ngOnInit(): void {
  }

}
