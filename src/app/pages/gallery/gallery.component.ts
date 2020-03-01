import { Component, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DdbbService } from 'src/app/services/ddbb.service';

@Component({
  selector: 'app-gallery',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements AfterViewInit {
  constructor(public dataService: DdbbService) { }
  title = 'galería'
  items: Object

  ngAfterViewInit(){
    this.dataService.GetItems().subscribe(data => this.items = data.reverse() )
  }
}
