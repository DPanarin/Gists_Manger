import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { GistsListComponent } from './gists-list/gists-list.component';
import { GistFilesComponent } from './gist-files/gist-files.component';
import { FileComponent } from './file/file.component';
import {TokenInterceptorService} from './token-interceptor.service';
import { CreateEditGistComponent } from './create-edit-gist/create-edit-gist.component';
import {AceEditorModule} from 'ng2-ace-editor';


const monacoConfig = {
  baseUrl: 'app-name/assets',
};




@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MainComponent,
    HeaderComponent,
    GistsListComponent,
    GistFilesComponent,
    FileComponent,
    CreateEditGistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AceEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
