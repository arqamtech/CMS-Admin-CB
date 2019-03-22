import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/Categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {

  constructor(
    private catSer: CategoriesService,
  ) {

  }

  ngOnInit() {
    this.getCats();
  }


  cats;

  getCats = () =>
    this.catSer
      .getCategories()
      .subscribe(res => (this.cats = res));


  deleteCat(data) {
    this.catSer.deleteCategories(data);
  }
}
