import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from "app/services/photo.service";
import { FirebaseListObservable } from "angularfire2/database";
import { Photo } from "app/models/photo";

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  @Input() isMyPage: boolean;
  photos: FirebaseListObservable<Photo[]>;

  constructor(public photoService: PhotoService) { 
  }

  get numColumns(): number {
    if (window.innerWidth < 500) {
      return 1;
    } else if (window.innerWidth < 900) {
      return 2;
    } else if (window.innerWidth < 1300) {
      return 3;
    } else {
      return 4;
    }
  }

  ngOnInit() {
    if (this.isMyPage) {
      this.photos = this.photoService.myPhotosStream;
    } else {
      this.photos = this.photoService.photosStream;
    }
  }

}
