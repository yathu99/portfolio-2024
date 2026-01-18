import { trigger, state, transition, style, animate } from '@angular/animations';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { ImplicitReceiver } from '@angular/compiler';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, input, Input, OnInit, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextlimiterPipe } from '../../app/pipes/textlimiter-pipe';
import { post } from '../../app/models/social-media.model';
@Component({
  selector: 'app-post',
  imports: [
    FormsModule,
    NgClass,
    TextlimiterPipe
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  animations: [
    trigger('slideInOut', [
      state('open', style({ transform: 'translateY(0%)' })),
      state('closed', style({ transform: 'translateY(-100%)' })),
      transition('open <=> closed', [
        animate('300ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ],
  standalone:true
})
export class Post implements OnInit{

  showComments = signal(false);
  audienceComments:any[]=[{
    comment:"This is not right, butaos adwadij aopwi da adww dwa wawwad adwdad",
    user:"valvo89",
    time:"02:12:23.00023Z"
  },
{
    comment:"This is not right, butaos adwadij aopwi da adww dwa wawwad adwdad",
    user:"valvo89",
    time:"02:12:23.00023Z"
  },
{
    comment:"This is not right, butaos adwadij aopwi da adww dwa wawwad adwdad",
    user:"valvo89",
    time:"02:12:23.00023Z"
  },
{
    comment:"This is not right, butaos adwadij aopwi da adww dwa wawwad adwdad",
    user:"valvo89",
    time:"02:12:23.00023Z"
  }];
  startAnimating=false;
  
  userComment=signal("");
  constructor(private change:ChangeDetectorRef){
    
    //change.detach()
  }
  postData=input.required<post>();
  postLiked = signal(false)

  ngOnInit(){
    let somec =  this.randomLikeCount();
    this.postLiked.set(this.postData().postLiked)
    //this.postData.update((newpost) => ({...newpost,likeCount:somec}));
    
     
  }

  postComment(){
    this.audienceComments.push({
      user:"Brainrot",
      comment: this.userComment(),
    time:Date.now()})
    console.log("User posted ",this.userComment())
  }

  cancelComment(){
    let thisScope = this;
    this.startAnimating = !this.startAnimating;
    if(this.showComments()){
      setTimeout(()=> {thisScope.showComments.set(false)},1000);
    }else{
      this.userComment.set('')
      this.showComments.set(true);
    }
    //
  
  }

  randomLikeCount(){
    return Math.floor(Math.random()*Math.pow(10,((Math.random()*10)%3)+1))
  }

  likePost(postId:string|number){
    this.postLiked.set(!this.postLiked())
  }

  

}
