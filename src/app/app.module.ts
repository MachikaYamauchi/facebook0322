import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { StarComponent } from './star/star.component';
import { CommentComponent } from './comment/comment.component';
import { ThumbsUpComponent } from './thumbs-up/thumbs-up.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    StarComponent,
    CommentComponent,
    ThumbsUpComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
