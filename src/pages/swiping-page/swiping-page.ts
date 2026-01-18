import { Component, computed, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { NgStyle } from "@angular/common";

@Component({
  selector: 'app-swiping-page',
  imports: [],
  templateUrl: './swiping-page.html',
  styleUrl: './swiping-page.scss'
})
export class SwipingPage {
  visibleCards = [{"id":1,"job_title":"Senior Financial Analyst","looking_for":"Female","first_name":"Leela","last_name":"Leatt","age":37,"gender":"Female","location":"Povorino","interests":"Traveling","height":87.5,"ethnicity":"Eskimo","education_level":"Graduate School","relationship_status":"Divorced"},
{"id":2,"job_title":"Structural Engineer","looking_for":"Male","first_name":"Linnell","last_name":"Gronno","age":25,"gender":"Female","location":"Pandian","interests":"Yoga","height":87.72,"ethnicity":"Vietnamese","education_level":"Graduate School","relationship_status":"Widowed"},
{"id":3,"job_title":"Cost Accountant","looking_for":"Male","first_name":"Kev","last_name":"Preece","age":20,"gender":"Male","location":"Itaperuçu","interests":"Yoga","height":51.4,"ethnicity":"Ute","education_level":"Graduate School","relationship_status":"In a relationship"},
{"id":4,"job_title":"Senior Quality Engineer","looking_for":"Female","first_name":"Pepillo","last_name":"Davidou","age":30,"gender":"Male","location":"Kedung","interests":"Traveling","height":86.74,"ethnicity":"Spaniard","education_level":"High School","relationship_status":"Widowed"},
{"id":5,"job_title":"Compensation Analyst","looking_for":"Male","first_name":"Mohandas","last_name":"Siddall","age":42,"gender":"Male","location":"Bindura","interests":"Cooking","height":82.16,"ethnicity":"Alaska Native","education_level":"High School","relationship_status":"In a relationship"},
{"id":6,"job_title":"Project Manager","looking_for":"Male","first_name":"Huey","last_name":"Parke","age":34,"gender":"Male","location":"Bābolsar","interests":"Cooking","height":68.11,"ethnicity":"Melanesian","education_level":"High School","relationship_status":"Widowed"},
{"id":7,"job_title":"Quality Control Specialist","looking_for":"Female","first_name":"Eal","last_name":"Sauniere","age":41,"gender":"Male","location":"Zangbi","interests":"Hiking","height":77.49,"ethnicity":"Nicaraguan","education_level":"Graduate School","relationship_status":"Widowed"},
{"id":8,"job_title":"Business Systems Development Analyst","looking_for":"Male","first_name":"Melodie","last_name":"Alker","age":18,"gender":"Female","location":"Swords","interests":"Traveling","height":65.55,"ethnicity":"Navajo","education_level":"High School","relationship_status":"Widowed"},
{"id":9,"job_title":"Health Coach IV","looking_for":"Male","first_name":"Prue","last_name":"Pickover","age":47,"gender":"Female","location":"Paruro","interests":"Cooking","height":61.97,"ethnicity":"Argentinian","education_level":"College","relationship_status":"Divorced"},
{"id":10,"job_title":"Desktop Support Technician","looking_for":"Male","first_name":"Adlai","last_name":"Samart","age":48,"gender":"Male","location":"San Antonio","interests":"Cooking","height":53.14,"ethnicity":"Creek","education_level":"High School","relationship_status":"Widowed"}]


    @ViewChild('oneCard')
    card!:ElementRef | null;

    @ViewChild('twoCard')
    towCard!:ElementRef | null;


    @HostListener('window:keydown.arrowright', ['$event'])
    acceptEntity(event:any){
      console.log(`Accepted`,this.card);
      this.card?.nativeElement.classList.add('accept');
      this.currentIndex.update((value) => value >= this.visibleCards.length?0:value+1 )
    }

    @HostListener('window:keydown.arrowleft', ['$event'])
    rejectEntity(event:any){
      console.log(`Rejected`,this.towCard);
      this.card?.nativeElement.classList.add('reject');
      this.towCard?.nativeElement.classList.add('one-card');
      this.towCard?.nativeElement.classList.remove('two-card');
      //this.towCard?.nativeElement.
      this.currentIndex.update((value) => value >= this.visibleCards.length?0:value+1 )
    }
    BATCH_SIZE:number = 30;
    currentIndex = signal(0)
    personInView : any=computed(()=>{ return this.visibleCards[this.currentIndex()]});


    constructor(){
    }
}
