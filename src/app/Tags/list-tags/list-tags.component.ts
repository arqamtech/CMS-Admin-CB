import { Component, OnInit } from '@angular/core';
import { TagsService } from 'src/app/Services/Tags/tags.service';

@Component({
  selector: 'app-list-tags',
  templateUrl: './list-tags.component.html',
  styleUrls: ['./list-tags.component.scss'],
})
export class ListTagsComponent implements OnInit {

  constructor(
    private tagSer: TagsService,
  ) {

  }

  ngOnInit() {
    this.getTags();
  }


  tags;

  getTags = () =>
    this.tagSer
      .getTags()
      .subscribe(res => (this.tags = res));


  deleteTag(data) {
    this.tagSer.deleteTags(data);
  }
}
