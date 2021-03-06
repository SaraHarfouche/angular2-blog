import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng2-select-compat';

/**/
import { CustomRequestOptions } from '../my-header';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../services/auth.service';

import { MarkdownPipe } from '../pipe/markdown';
import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './post/post.component';
import { PostDetailComponent } from './post/post-detail.component';
import { BlogComponent } from './blog.component';

import { SharedPipeModule } from '../pipe/sharedpipe.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SelectModule,
    SharedPipeModule
  ],
  exports: [
    PostComponent
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    PostComponent,
    PostDetailComponent,
    BlogComponent,

    ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: RequestOptions, useClass: CustomRequestOptions }]

})
export class BlogModule { }