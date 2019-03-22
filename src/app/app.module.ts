import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from "src/environments/environment";
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoriesService } from './Services/Categories/categories.service';
import { AddTagsComponent } from './Tags/add-tags/add-tags.component';
import { ListTagsComponent } from './Tags/list-tags/list-tags.component';
import { AddCategoriesComponent } from './Categories/add-categories/add-categories.component';
import { ListCategoriesComponent } from './Categories/list-categories/list-categories.component';
import { DashboardComponent } from './Main/dashboard/dashboard.component';
import { TagsService } from './Services/Tags/tags.service';
import { ReqService } from './Services/Req/req.service';
import { AddPostComponent } from './Posts/add-post/add-post.component';
import { ListPostsComponent } from './Posts/list-posts/list-posts.component';
import { PreviewPostComponent } from './Posts/preview-post/preview-post.component';
import { PostsService } from './Services/Posts/posts.service';
import { EditPostComponent } from './Posts/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddCategoriesComponent,
    ListCategoriesComponent,
    AddTagsComponent,
    ListTagsComponent,
    AddPostComponent,
    ListPostsComponent,
    PreviewPostComponent,
    EditPostComponent,
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    StatusBar,
    ReqService,
    CategoriesService,
    TagsService,
    PostsService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
