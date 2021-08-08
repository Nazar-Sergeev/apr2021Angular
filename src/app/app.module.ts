import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import {UserGuardService} from "./services/user-guard.service";
import {PostGuardService} from "./services/post-guard.service";


const routes: Routes = [
  // {path: '', component:UsersComponent},
  {path: 'users', component: UsersComponent, canDeactivate: [UserGuardService]},
  {path: 'users/:id', component: UserDetailsComponent },
  {path: 'posts', component: PostsComponent, canDeactivate: [PostGuardService]},
  {path: 'posts/:id', component: PostDetailsComponent}
  // {path: 'users', redirectTo: '', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
