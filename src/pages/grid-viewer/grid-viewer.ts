import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-viewer',
  imports: [],
  templateUrl: './grid-viewer.html',
  styleUrl: './grid-viewer.scss'
})
export class GridViewer {
  router:Router;
  constructor(){
    this.router=inject(Router)
  }
  
  navigateTo(path:string){
    this.router.navigate([path]);
  }
}
