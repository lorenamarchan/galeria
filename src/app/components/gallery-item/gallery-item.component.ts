import { Component, ViewEncapsulation, Input, OnInit, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { DdbbService } from 'src/app/services/ddbb.service';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  encapsulation: ViewEncapsulation.None,

})

export class GalleryItemComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef, public dataService: DdbbService) { }

  @Input() data: any
  @Input() addNew: boolean
  imagePreview: any = "assets/img/default.jpg"
  realItem = true
  ngOnInit() {
    if(this.addNew === true){
      this.data = {
        "title": "",
        "description": "",
        "categories": [],
        "image": this.imagePreview
      }
      this.realItem = false;
    }
    if(this.data && this.data.categories) {
      for (var i = 0; i < this.data.categories.length; i++) {
        let value = this.data.categories[i];
        this.data.categories[i] = {
          "value": value,
          "url": value.replace(/\s/gi, "-")
            .replace(/á/gi, "a")
            .replace(/é/gi, "e")
            .replace(/í/gi, "i")
            .replace(/ó/gi, "o")
            .replace(/ú/gi, "u")
            .replace(/ñ/gi, "n")
        }
      }
    }
    if(this.data && this.data.image && this.addNew !== true) {
      this.imagePreview = "assets/img/" + this.data.image
    }
  }

  ngAfterViewInit() {
    let inputFile = this.el.nativeElement.querySelectorAll('#fileToUpload')[0]
    let categoryInputs = this.el.nativeElement.querySelectorAll('.category')
    let self = this
    if(inputFile) {
      inputFile.addEventListener('change', function (e) {
        self.onImagePicked(e, this.files[0])
      })
    }
  }

  delete(event: Event) {
    let id = this.el.nativeElement.getAttribute("id")
    this.dataService.deleteItem(id).subscribe((data) => {
      console.log("data", data)
      window.location.reload()
    })
  }
  edit() {
    this.realItem = false;
  }
  cancel(){
    let elementsToSave = this.el.nativeElement.querySelectorAll('[to-save]')
    for (let i = 0; i < elementsToSave.length; i++) {
      let type = elementsToSave[i].getAttribute('to-save')
      if(this.data[type]) {
        if (elementsToSave[i].getAttribute('type') === "file") {
        }
        else {
          elementsToSave[i].value = this.data[type]
        }
      }
      else {
        elementsToSave[i].value = ""
      }
    }
    if(this.addNew !== true){
      this.realItem = true;
    }
  }

  save(event: Event) {
    let data = this.prepareData()
    this.dataService.saveItem(data).subscribe((data) => {
      console.log("data", data)
      window.location.reload()
    })
  }

  addCategory(event) {
    let categoryInfo = this.el.nativeElement.querySelectorAll('.category-info')[0]
    let categoryInputs = this.el.nativeElement.querySelectorAll('.category-info input')
    if (!categoryInputs.length || categoryInputs[categoryInputs.length - 1].value !== "") {
      var div = document.createElement("div")
      var input = document.createElement("input")
      input.setAttribute("to-save", "categories")
      input.setAttribute("AutoSizeInput", "true")
      input.classList.add("category")
      input.addEventListener('keydown', function (e) {
        let self = this
        setTimeout(function () {

          if (self.value !== "") {
            if (self.classList.length > 1) {
              self.classList.remove(self.classList[self.classList.length - 1])
            }
            self.classList.add(self.value.replace(/\s/gi, "-")
              .replace(/á/gi, "a")
              .replace(/é/gi, "e")
              .replace(/í/gi, "i")
              .replace(/ó/gi, "o")
              .replace(/ú/gi, "u")
              .replace(/ñ/gi, "n"))
          }
          self.style.width = self.value.length * 8.5 + "px"
        })
      })
      div.appendChild(input)
      categoryInfo.appendChild(div)
    }
  }

  onImagePicked(event: Event, file: any) {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  prepareData() {
    let data = {}
    data["categories"] = []
    let elementsToSave = this.el.nativeElement.querySelectorAll('[to-save]')
    for (let i = 0; i < elementsToSave.length; i++) {
      let type = elementsToSave[i].getAttribute('to-save')
      if (type === "categories") {
        data["categories"].push(elementsToSave[i].value)
      }
      else if (elementsToSave[i].getAttribute('type') === "file") {
        data[type] = elementsToSave[i].files[0].name
      }
      else {
        data[type] = elementsToSave[i].value
      }
    }
    return data
  }
}
