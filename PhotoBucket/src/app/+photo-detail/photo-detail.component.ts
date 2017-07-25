import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Photo } from "app/models/photo";
import { FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { PhotoService } from "app/services/photo.service";
import { AuthService } from "app/services/auth.service";
import * as firebase from 'firebase/app';
import { MdDialogConfig, MdDialog } from "@angular/material";
import { PhotoDialogComponent } from "app/photo-dialog/photo-dialog.component";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  photo: Photo =  new Photo();
  photoStream: Observable<Photo>;
  photoKey: string;

  constructor(private route: ActivatedRoute, private db: AngularFireDatabase,
    public photoService: PhotoService, public authService: AuthService,
    private router: Router, private dialog: MdDialog) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((routeParams: Params) => { 
      const photoKey = routeParams["photoKey"];
      this.photoKey = photoKey;
      this.photoStream = this.db.object('photos/'+photoKey);
      this.photoStream.subscribe( (value: Photo) => { 
        this.photo.uid = value.uid;
        this.photo.$key = value.$key;
        this.photo.caption = value.caption;
        this.photo.imageUrl = value.imageUrl;
      });
    });
  }

  back(): void{
    this.router.navigate([""]);
  }

  edit(): void {
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {
      photo: this.photo};
    this.dialog.open(PhotoDialogComponent, dialogConfig);
  }

  remove(): void {
    this.photoService.remove(this.photo);
    this.back();
  }

}
