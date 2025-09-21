import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-init-page',
  imports: [CommonModule
  ],
  templateUrl: './init-page.html',
  styleUrl: './init-page.scss'
})
export class InitPage implements OnInit {
  data = "";
  words = ["Incomplete", "Lazy", "Alone", "Like i can do something better"];
  positions:any[]=[];
  all_colors=['red','green','blue','white','orange','aliceblue','cyan','purple','yellow']
  outer_line="LEARN ANYTHING            ";
  ngOnInit() {

    this.circleWords()


  }

circleWords(){
  let line_length=this.outer_line.length;
  let anglePerLetter = ((360/line_length)) * (Math.PI/180);
  let radiusOfRing=200;
  this.outer_line.split("").forEach((letter,index) => {
    let y_pos = radiusOfRing*Math.sin(anglePerLetter * index);
    let x_pos = radiusOfRing*Math.cos(anglePerLetter * index);
    
    this.positions.push({x:x_pos+350,y:y_pos+350,color:this.all_colors[index%this.all_colors.length]})
  })
  console.log("POS",this.positions)
  
}

  timedTyping(){
let last=0
    this.words.forEach((word, index_i) => {
        word.split('').forEach((element, index_j) => {
          last+=1;
          
          setTimeout(() => {
            if (index_j == 0) {
            this.data = "";
          } this.data += element }, 100 * last)
        });
    })
  }
}
