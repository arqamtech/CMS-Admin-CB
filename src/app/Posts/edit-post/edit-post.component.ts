import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/Posts/posts.service';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {

  postId;
  cPost;
  cats;

  viewAddCat: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private postServ: PostsService,
    private catSer: CategoriesService,
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.getPost();
    this.getCats();
  }


  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));
  getCats = () =>
    this.catSer
      .getCategories()
      .subscribe(res => (this.cats = res));
  toggleAddCat() {
    this.viewAddCat = !this.viewAddCat;
  }
}
