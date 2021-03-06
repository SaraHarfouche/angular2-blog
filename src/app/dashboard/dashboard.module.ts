import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SelectModule } from 'ng2-select-compat';

/**/
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { CustomRequestOptions } from '../my-header';
import { MarkdownPipe } from '../pipe/markdown';
import {DashboardComponent} from './dashboard.component';
import { TagEditorComponent } from './tag-editor/tag-editor.component';
import { TagComponent } from './tag/tag.component';
import { ContentComponent } from './content/content.component';
import { AuthGuard } from '../auth.guard';
import { UserComponent } from './user/user.component';
import { ClickOutsideDirective } from './clickOutside.directive';

import { AuthService } from '../services/auth.service';
import { SharedPipeModule } from '../pipe/sharedpipe.module';
@NgModule({
  imports: [CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SelectModule,
    SharedPipeModule
  ],
  declarations: [
    PostEditorComponent,
    DashboardComponent,
    TagEditorComponent,
    TagComponent,
    ContentComponent,
    UserComponent,
    ClickOutsideDirective
    ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: RequestOptions, useClass: CustomRequestOptions }]
})
export class DashboardModule { }