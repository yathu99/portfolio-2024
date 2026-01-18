import { ChangeDetectionStrategy, Component, effect, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    FormsModule,
    NgClass
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Navbar {
  openScreen:Signal<string> = signal("default");
  title=signal('BRAINROT')
  options:string[]=[
    "Portfolio Home",
    "Calenderly",
    "Meal Swiper",
    "Auto Dresser",
    "clock"
  ]
  darkTheme=signal(false);
  homeNav:Signal<boolean>=signal(true)
  urlMapping={
    "Portfolio Home":"/portfolio-home",
    "Calenderly":"/calenderly",
    "Meal Swiper":"/meal-swiper",
    "Auto Dresser":"/auto-dresser",
    "clock":"/clock"
  }
  constructor(private router:Router) {
    effect(()=>{
      //router.navigate([String(this.urlMapping[this.openScreen()])])
    })
  }

  switchTheme(status:boolean){
    console.log("DAD",status)
this.darkTheme.set(status);
  }

}
