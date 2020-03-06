import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-gallery-item-form',
  templateUrl: './gallery-item-form.component.html',
  styleUrls: ['./gallery-item-form.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class GalleryItemFormComponent implements OnInit, AfterViewInit {
    constructor(private el: ElementRef){}
  @Input() data: any
  ngOnInit(){   
      this.data = {"title":       "escribe el titulo", 
                   "description": "escribe la descripcion",
                   "image":       "default.jpg"
                }    
            }

    ngAfterViewInit(){
        let input_file = this.el.nativeElement.querySelectorAll('#fileToUpload')[0]
        input_file.addEventListener('change', function(e){
            console.log(e, this.files)
        })
    }    

  
}
