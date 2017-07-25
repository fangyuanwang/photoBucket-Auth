import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule
} from '@angular/material';
import { SignInComponent } from './+sign-in/sign-in.component';
import { MainComponent } from './+main/main.component';
import { PhotoDetailComponent } from './+photo-detail/photo-detail.component';
import { AuthService } from "app/services/auth.service";
import { AuthGuard } from "app/services/auth.guard";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { PhotoService } from "app/services/photo.service";
import { ReversePipe } from './pipes/reverse.pipe';
import { PhotoDialogComponent } from './photo-dialog/photo-dialog.component';

export const MaterialModules = [
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdDialogModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MainComponent,
    PhotoDetailComponent,
    PhotoListComponent,
    PhotoCardComponent,
    ReversePipe,
    PhotoDialogComponent
  ],
  entryComponents: [
    PhotoDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    MaterialModules,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    PhotoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
