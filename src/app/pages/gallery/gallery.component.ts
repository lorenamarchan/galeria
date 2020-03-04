import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gallery',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements AfterViewInit {
  constructor(public router:Router, public route:ActivatedRoute, public elRef:ElementRef) {

  }
  title = 'galería';

  ngAfterViewInit() {
    this.route.params.subscribe((value)=>{
      let category = value.id
      this.elRef.nativeElement.classList.add(category)
    })
  }
}
