import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {GistsListComponent} from './gists-list/gists-list.component';
import {GistFilesComponent} from './gist-files/gist-files.component';
import {AuthGuard} from './auth/auth.guard';
import {GistsListResolverService} from './gists-list-resolver.service';
import {GistResolverService} from './gist-resolver.service';
import {FileComponent} from './file/file.component';
import {FileResolverService} from './file-resolver.service';
import {CreateEditGistComponent} from './create-edit-gist/create-edit-gist.component';
import {CreateEditResolverService} from './create-edit-resolver.service';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'gists',
    component: GistsListComponent,
    canActivate: [AuthGuard],
    resolve: {
      gistsList: GistsListResolverService
    },
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'create',
        component: CreateEditGistComponent,
        resolve: {
          data: CreateEditResolverService
        }
      },
      {
        path: ':id',
        component: GistFilesComponent,
        resolve: { gist: GistResolverService},
        runGuardsAndResolvers: 'always',
        children: [
          {
            path: 'edit',
            component: CreateEditGistComponent,
            resolve: {
              data: CreateEditResolverService
            }
          },
          {
            path: ':filename',
            component: FileComponent,
            resolve: { file: FileResolverService },
          }
        ]
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
