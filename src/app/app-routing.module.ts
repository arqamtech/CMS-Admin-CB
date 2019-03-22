import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListTagsComponent } from './Tags/list-tags/list-tags.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { PreviewPostComponent } from './Posts/preview-post/preview-post.component';
import { ListPostsComponent } from './Posts/list-posts/list-posts.component';
import { AddPostComponent } from './Posts/add-post/add-post.component';
import { EditPostComponent } from './Posts/edit-post/edit-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'all-posts',
    component: ListPostsComponent,
  },
  {
    path: 'preview-post/:id',
    component: PreviewPostComponent,
  },
  {
    path: 'edit-post/:id',
    component: EditPostComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
