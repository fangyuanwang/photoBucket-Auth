import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogConfig } from "@angular/material";
import { PhotoDialogComponent } from "app/photo-dialog/photo-dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private dialog: MdDialog) { }

  ngOnInit() {
  }

  showDialog(): void {
    const dialogConfig = new MdDialogConfig();
    dialogConfig.data = {};
    this.dialog.open(PhotoDialogComponent, dialogConfig);
  }
}
