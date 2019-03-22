import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/Services/Tags/tags.service';
import { ReqService } from 'src/app/Services/Req/req.service';

@Component({
  selector: 'app-add-tags',
  templateUrl: './add-tags.component.html',
  styleUrls: ['./add-tags.component.scss'],
})
export class AddTagsComponent implements OnInit {

  constructor(
    private tagSer: TagsService,
    private reqSer: ReqService,
  ) {

  }

  ngOnInit() {
  }
  onSubmit() {
    let data = this.tagSer.newTag.value;

    if (this.tagSer.newTag.valid) {
      this.tagSer.addTag(data).then(res => {
      });
    } else {
      this.reqSer.presentToast("Enter a Tag Name");
    }
  }
}
