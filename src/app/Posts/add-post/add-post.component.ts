import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/Services/Posts/posts.service';
import { ReqService } from 'src/app/Services/Req/req.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {

  constructor(
    private postsSer: PostsService,
    private reqSer: ReqService,
  ) {

  }

  ngOnInit() { }
  onSubmit() {
    let data = this.postsSer.newPost.value;

    if (this.postsSer.newPost.valid) {
      this.postsSer.addPost(data).then(()=>{
        console.log("akdsljsdf")
      })
    } else {
      this.reqSer.presentToast("Enter a Post Title");
    }
  }


}
