import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post } from "../../components/post/post";

@Component({
  selector: 'app-social-media-page',
  imports: [Post],
  templateUrl: './social-media-page.html',
  styleUrl: './social-media-page.scss'
})
export class SocialMediaPage implements AfterViewInit {
postDatas:any[] = [[{"id":1001,"user":"Cicily376","title":"Where the Rivers Flow North","post":null,"time":"1/28/2025","content":"assets/images/81E00A6i5CL._UF1000,1000_QL80_.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1002,"user":"Jaye943","title":"Another Chance","post":null,"time":"5/4/2025","content":"assets/images/pexels-alexgtacar-745150-1592384.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1003,"user":"Ezmeralda113","title":"Black Friday","post":null,"time":"2/15/2025","content":"assets/images/pexels-alisha-mishra-579430-1346381.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1004,"user":"Patricio914","title":"Awesome; I Fuckin Shot That!","post":null,"time":"7/15/2025","content":"assets/images/pexels-cannontaler-14179123.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))}
],
[{"id":1005,"user":"Trumann685","title":"Soundtracker","post":null,"time":"7/13/2025","content":"assets/images/pexels-hasan-zahra-1120724-2118483.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1006,"user":"Guntar637","title":"Fairly Odd Christmas, A","post":null,"time":"7/18/2025","content":"assets/images/pexels-janetrangdoan-892649.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1007,"user":"Nadeen979","title":"Odd Man Out","post":null,"time":"7/3/2025","content":"assets/images/pexels-jos-van-ouwerkerk-377363-1617365.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1008,"user":"Kellina245","title":"Boys Are Back, The","post":null,"time":"12/28/2024","content":"assets/images/pexels-keegan-evans-10986-90893.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))}
],
[{"id":1009,"user":"Ailina987","title":"ATM","post":null,"time":"4/27/2025","content":"assets/images/pexels-ksalsaberry-2448248.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1010,"user":"Gerhardt57","title":"Jack the Bear","post":null,"time":"6/3/2025","content":"assets/images/pexels-luddmyla-2387327.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1011,"user":"Vina678","title":"Hallam Foe (Mister Foe)","post":null,"time":"4/4/2025","content":"assets/images/pexels-lusaya-123007.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1012,"user":"Roddy99","title":"Generation P","post":null,"time":"12/17/2024","content":"assets/images/pexels-nishantaneja-2955819.jpg","postLiked":false,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))}
],
[{"id":1013,"user":"Willem461","title":"Hunter Prey","post":null,"time":"5/1/2025","content":"assets/images/pexels-suzyhazelwood-3792107.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1014,"user":"Emmaline387","title":"Bad Boys","post":null,"time":"1/15/2025","content":"assets/images/pexels-vlada-karpovich-6947303.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1015,"user":"Aloin530","title":"The Rise","post":null,"time":"10/23/2024","content":"assets/images/pexels-janetrangdoan-892649.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))},
{"id":1016,"user":"Brynn993","title":"Project Nim","post":null,"time":"12/1/2024","content":"assets/images/81E00A6i5CL._UF1000,1000_QL80_.jpg","postLiked":true,"likeCount":Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))}]]

//   postDatas:any[]=[{
//     id:"1001",
//     user:"benhjam34",
//     title:"Mr. morales is a better album than GNX",
//     post:"This is ragebait",
//     time:"8m",
//     content:"assets/images/81C81CB44922409EA3C99FA3E42369CD.jpg",
//     postLiked:true
//   },{   
//     id:"1005",
//     user:"yathu99",
//     title:"Mr. morales is a better album than GNX",
//     post:"This is ragebait",
//     time:"4d",
//     content:"assets/images/pexels-ksalsaberry-2448248.jpg",
//     postLiked:false
// },
// {   
//     id:"1002",
//     user:"jonesropa2",
//     title:"Mr. morales is a better album than GNX",
//     post:"This is ragebait",
//     time:"2w",
//     content:"assets/images/pexels-cannontaler-14179123.jpg",
//     postLiked:false
// },
// {   
//     id:"1003",
//     user:"karl$$o",
//     title:"Mr. morales is a better album than GNX",
//     post:"This is ragebait",
//     time:"7w",
//     content:"assets/images/pexels-jos-van-ouwerkerk-377363-1617365.jpg",
//     postLiked:false
// },
// ]

leftList=["Settings","Categories","Profile","History","Likes","Watchers","Watching"]

 @ViewChild('observedDiv') observedDiv!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          console.log('Div is here');
          if (entry.isIntersecting) {
            console.log('Div is visible in viewport');
          } else if (entry.intersectionRatio === 0) {
            let newData = this.postDatas.shift();
            this.postDatas.push(newData);
          }
        });
      },
      {
        threshold: [0], // triggers when fully out or entering
      }
    );
    observer.observe(this.observedDiv.nativeElement);
  }
}
