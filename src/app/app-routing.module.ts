import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  { path: '',
     component: GalleryComponent,
    data: {animation: 'routeAnimations'},
  },
  { path: ':id',
     component: GalleryComponent,
    data: {animation: 'routeAnimations'},
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
