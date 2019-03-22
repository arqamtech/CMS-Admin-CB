import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/Posts/posts.service';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { TagsService } from 'src/app/Services/Tags/tags.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit {

  postId;
  cPost;
  cats: Array<any> = [];
  tags;

  viewAddCat: boolean = false;
  viewAddTag: boolean = false;

  constructor(
    private menuCtrl: MenuController,
    private route: ActivatedRoute,
    private postServ: PostsService,
    private catSer: CategoriesService,
    private tagSer: TagsService,
    private db: AngularFirestore,
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
    });
    this.getPost();
    this.getCats();
    this.getTags();
  }


  getPost = () =>
    this.postServ
      .getPost(this.postId)
      .subscribe(res => (this.cPost = res.data()));


  getCats() {
    this.db.collection("Categories").snapshotChanges().subscribe(snap => {
      snap.forEach(snip => {
        let temp: any = snip.payload.doc.data();
        temp.id = snip.payload.doc.id;
        temp.Check = false;
        this.cats.push(temp);
      })
    })
  }


  getTags = () =>
    this.tagSer
      .getTags()
      .subscribe(res => (this.tags = res));


  toggleAddCat() {
    this.viewAddCat = !this.viewAddCat;
  }
  toggleAddTag() {
    this.viewAddTag = !this.viewAddTag;
  }

  catsCheck(c) {
    c.Check = !c.Check;

    if (c.Check) {
      this.postServ.addCat(this.postId, c.id)
    } else {
      this.postServ.rmCat(this.postId, c.id)
    }

    console.log(c);

  }

}
