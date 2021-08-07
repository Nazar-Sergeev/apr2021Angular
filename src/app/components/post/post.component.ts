import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../models/post.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {


  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToDetails(): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }

}
