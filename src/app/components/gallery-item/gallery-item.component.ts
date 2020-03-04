import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class GalleryItemComponent implements OnInit {
  @Input() data: any
  ngOnInit(){    
  }
}
