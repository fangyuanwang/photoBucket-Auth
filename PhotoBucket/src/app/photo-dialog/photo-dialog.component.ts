import { Component, OnInit, Inject } from '@angular/core';
import { Photo } from "app/models/photo";
import { MdDialogRef, MD_DIALOG_DATA } from "@angular/material";
import { PhotoService } from "app/services/photo.service";

import * as firebase from 'firebase';

interface PhotoDialogData {
  photo?: Photo;
  key?: string;
}

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrls: ['./photo-dialog.component.scss']
})
export class PhotoDialogComponent implements OnInit {
  title = "Add a new photo";
  formPhoto: Photo;

  constructor(private dialogRef: MdDialogRef<PhotoDialogComponent>,
    @Inject(MD_DIALOG_DATA) private dialogData: PhotoDialogData,
    public photoService: PhotoService) { 
    this.formPhoto = new Photo();
  }

  ngOnInit() {
    if (this.dialogData.photo) {
      this.title = "Edit this password";
      const dialogPhoto: Photo = this.dialogData.photo;
      this.formPhoto.imageUrl = dialogPhoto.imageUrl;
      this.formPhoto.caption = dialogPhoto.caption;
      this.formPhoto.uid = dialogPhoto.uid;
    }

  }

  photoSelected(event: any): void {
    const file: File = event.target.files[0];
    const metaData = {'contentType': file.type};

    const nextAvailableKey = this.photoService.photosStream.push({}).key;
    const storageRef: firebase.storage.Reference = firebase.storage().ref(`/photos/${nextAvailableKey}`);
    const uploadTask: firebase.storage.UploadTask = storageRef.put(file, metaData);
  
    uploadTask.then( (uploadSnapshot: firebase.storage.UploadTaskSnapshot) => { 
        console.log("upload complete");
        const downloadUrl = uploadSnapshot.downloadURL;
        this.formPhoto.imageUrl = downloadUrl;
    });
  }

  onSubmit() {
    try {
      if (this.dialogData.photo) {
        this.photoService.update(this.dialogData.photo.$key, this.formPhoto);
      } else {
        this.photoService.add(this.formPhoto);
      }

      this.dialogRef.close();
    } catch (e) {
      console.log("Submit error", e);
    }
  }

}
