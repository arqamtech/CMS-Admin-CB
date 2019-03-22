import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private firestore: AngularFirestore,
  ) {
  }

  newCategory = new FormGroup({
    Name: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
    ]),


  })


  addCategory(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Categories")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getCategories() {
    return this.firestore.collection("Categories").snapshotChanges();
  }

  deleteCategories(data) {
    return this.firestore
      .collection("Categories")
      .doc(data.payload.doc.id)
      .delete();
  }

}
