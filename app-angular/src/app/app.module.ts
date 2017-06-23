import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CustomRequestOptions } from './my-header';
import { SelectModule } from 'ng2-select-compat';

// import { PostEditorComponent } from './post-editor/post-editor.component';
// import { MarkdownPipe } from './pipe/markdown';
// import { TagEditorComponent } from './tag-editor/tag-editor.component';
// import { TagComponent } from './tag/tag.component';
// import { ContentComponent } from './content/content.component';

// import { UserComponent } from './user/user.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
  { path: '',loadChildren: 'app/blog/blog.module#BlogModule' },
  { path: 'login', component: LoginComponent },//must be a child of blog
  // { path: '**',component:BlogComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    SelectModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AuthGuard,
    AuthService,
    { provide: RequestOptions, useClass: CustomRequestOptions }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }