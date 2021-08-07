import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent}
    ]
  },

  {
    path: 'posts',
    component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsComponent,
    UserComponent,
    UsersComponent,
    PostDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
