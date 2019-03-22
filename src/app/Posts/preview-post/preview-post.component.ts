import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/Posts/posts.service';

@Component({
  selector: 'app-preview-post',
  templateUrl: './preview-post.component.html',
  styleUrls: ['./preview-post.component.scss'],
})
export class PreviewPostComponent implements OnInit {

  postId;

  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private postServ : PostsService,
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.getPost();
  }

  cPost;

  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));


}
