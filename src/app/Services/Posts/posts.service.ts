import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
  ) {
  }

  newPost = new FormGroup({
    Title: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
    ]),
    Status: new FormControl("Draft")


  })


  addPost(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Posts")
        .add(data)
        .then(res => {
          this.router.navigateByUrl(`edit-post/${res.id}`)
        }, err => reject(err));
    });
  }

  getPosts() {
    return this.firestore.collection("Posts").snapshotChanges();
  }
  getPost(id) {
    return this.firestore.collection("Posts").doc(id).get();
  }
  publish(id) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .set({ Status: "Published" }, { merge: true });
  }
  unPublish(id) {
    return this.firestore
      .collection("Posts")
      .doc(id)
      .set({ Status: "Draft" }, { merge: true });
  }
}
