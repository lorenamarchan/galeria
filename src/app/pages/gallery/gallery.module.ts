import { NgModule } from '@angular/core';
import { GalleryItemComponent } from 'src/app/components/gallery-item/gallery-item.component';
import { DdbbService } from 'src/app/services/ddbb.service';
import { BrowserModule } from '@angular/platform-browser';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  declarations: [
    GalleryItemComponent,
  ],
  imports: [
    BrowserModule,
    AutosizeModule
  ],
  exports: [
    GalleryItemComponent,
  ],
  providers: [DdbbService],
  bootstrap: []
})
export class GalleryModule { }
