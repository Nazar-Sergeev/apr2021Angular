import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
    this.router.navigate(['users', this.user.id], {state: this.user})
  }
}
