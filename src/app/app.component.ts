import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apr2021Angular';


  //////////////////////////////////////// Внедрение зависимости (Dependency Injection)

  ////// long version

  // private userService: UserService;
  //
  // constructor(userService:UserService) {
  //   this.userService = userService;
  //   this.userService.doSomeStuff();
  // }

  /////// short version

  // constructor(private userService:UserService) {
  //   this.userService.doSomeStuff();
  // }
}
