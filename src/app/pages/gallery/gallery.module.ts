import { NgModule } from '@angular/core';
import { GalleryItemComponent } from 'src/app/components/gallery-item/gallery-item.component';
import { DdbbService } from 'src/app/services/ddbb.service';
import { BrowserModule } from '@angular/platform-browser';
import { GalleryItemFormComponent } from 'src/app/components/gallery-item/gallery-item-form/gallery-item-form.component';

@NgModule({
  declarations: [
    GalleryItemComponent,
    GalleryItemFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    GalleryItemComponent,
    GalleryItemFormComponent,
  ],
  providers: [DdbbService],
  bootstrap: []
})
export class GalleryModule { }
