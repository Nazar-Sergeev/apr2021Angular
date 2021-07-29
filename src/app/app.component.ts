import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apr2021Angular';


  // private userService: UserService;
  // constructor(userService: UserService) {
  //   this.userService = userService;
  //   this.userService.doSomeFun();
  // }


  // constructor(private userService:UserService) {
  //   this.userService.doSomeFun();
  // }
}
