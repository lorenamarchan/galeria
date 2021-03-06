import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DdbbService } from 'src/app/services/ddbb.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../environments/environment';


@Component({
  selector: 'app-gallery',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements AfterViewInit {
  constructor(public dataService: DdbbService, public router:Router, public route:ActivatedRoute, public elRef:ElementRef) { }
  title = 'galería'
  items: Object  
  editorEnabled = !environment.production  
  ngAfterViewInit() {    
    this.route.params.subscribe((value)=>{
      let category = value.id
      this.elRef.nativeElement.classList.add(category)
      if(category){
        this.dataService.getItemsByCategory(category).subscribe((data) => {return this.items = data.reverse()})
      }
      else{
        this.dataService.getItems().subscribe((data) => {return this.items = data.reverse()})
      }
    })
  }
}
