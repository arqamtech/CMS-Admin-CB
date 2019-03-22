import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Posts/posts.service';
import { AddPostComponent } from '../add-post/add-post.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {

  viewAdd: boolean = false;
  posts;

  constructor(
    private postsSer: PostsService,
    private modalCtrl: ModalController,
  ) {

  }

  ngOnInit() {
    this.getPosts();
  }

  toggleAddPost() {
    this.viewAdd = !this.viewAdd;
  }

  getPosts = () =>
    this.postsSer
      .getPosts()
      .subscribe(res => (this.posts = res));

  preview(p) {
    window.open(`preview-post/${p.payload.doc.id}`);
  }

  // deleteCat(data) {
  //   this.postsSer.(data);
  // }
  // }

}
