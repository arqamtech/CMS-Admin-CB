import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';
import { ReqService } from 'src/app/Services/Req/req.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.scss'],
})
export class AddCategoriesComponent implements OnInit {

  constructor(
    private catSer: CategoriesService,
    private reqSer : ReqService,
  ) {

  }

  ngOnInit() {
  }
  onSubmit() {
    let data = this.catSer.newCategory.value;

    if (this.catSer.newCategory.valid) {
      this.catSer.addCategory(data).then(res => {
      });
    } else {
      this.reqSer.presentToast("Enter a Category Name");
    }
  }
}

