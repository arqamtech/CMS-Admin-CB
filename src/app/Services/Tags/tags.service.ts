import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private firestore: AngularFirestore,
  ) {
  }

  newTag = new FormGroup({
    Name: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),


  })


  addTag(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Tags")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  getTags() {
    return this.firestore.collection("Tags").snapshotChanges();
  }

  deleteTags(data) {
    return this.firestore
      .collection("Tags")
      .doc(data.payload.doc.id)
      .delete();
  }


}
