import { Component } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  thedo = [{
    todo: "example",
    index: 0,
    type: true
  }]
  listtype: number;
  ctoggle=[true,true,true,true,true,true,true,true,true,true];
  completed: any = [{}]; comp=false; all=true; act= false; compswitch= true;
  i: any = 0; j: any = 0; k: any = 0; acc: any = []; switch = true;
  constructor() { }
  id: string;
  ngOnInit() {
    // this.active=this.thedo
    var i=[0,1,2,3,4,5,6,7,8,9];
        i.forEach(i => {
          $(document).on('click', '#'+i, ()=>{
            if(this.ctoggle[i]){
            $('#'+i+' > img').css({
              "display":"block"
            });
            this.ctoggle[i]=!this.ctoggle[i];
            this.thedo[i].type= this.ctoggle[i];
            // this.all[i].taskdone=true;
            // if(i>1){
            //   this.thedo.splice(i,1)
            //   i--;
            // }
            // else{
            //   this.thedo.splice(0); 
            // }
            // console.log(this.ctoggle[i]);
            }else{
              $('#'+i+' > img').css({
                "display":"none"
              });
              this.ctoggle[i]=!this.ctoggle[i];
              this.thedo[i].type= this.ctoggle[i];
              // this.all[i].taskdone=false;
              // this.active.push(this.all[i])
              // if(i>1){
              //   this.completed.splice(i,1); this.j--;
              // }
              //   else{
              //   this.completed.splice(0); this.j--;
              //   }
              // console.log(this.ctoggle[i])
            }
            $('#'+i+' + h2').toggleClass('newh2');
          })
        });
  }

  addComp(data: any){
    // if(this.compswitch){
      // let one=0;
      // this.completed.forEach(ele => {
      //   if(ele.index==data){
      //     console.log(ele.index)
      //       if(data>0 && one>0){
      //         this.completed.splice(ele.index,1); one++;
      //         if(!this.ctoggle) 
      //         this.ctoggle[ele.index]=!this.ctoggle[ele.index];
      //       }
      //         else{
      //         this.completed.splice(0); one++;
      //         if(!this.ctoggle) 
      //         this.ctoggle[0]=!this.ctoggle[0];
      //         this.completed.push({})
      //         }
      //     console.log("splice " ,this.completed)
      //   }else{
      //     if(one==0){
      //     this.completed.push({todo:this.thedo[data].todo, index: this.thedo[data].index});
      //     console.log('add: ' ,this.completed)
      //     one++;
      //   }
      // }
      //   this.compswitch= !this.compswitch;
      // });
    // }else{
    //   let one=0;
    //   this.completed.forEach(ele => {
    //     if(ele.index!=this.thedo[data].index && one==0){
    //       this.completed.slice(this.thedo[data].index, 1);
    //       console.log(this.completed)
    //       one++;
    //     }
    //     console.log(one); 
    //     this.compswitch= !this.compswitch;
    //   });
    // }
  }

  addToDo(data: any) {
    if(this.i<10){
    this.thedo[this.i] = { todo: data.todo, index: this.i, type: true };
   // this.active.push({ todo: data.todo, index: this.i });
    this.i++; this.k++;
    }
  }
  deleteToDo(ind: number) {
    if (this.thedo.length > 1) {
      this.thedo.splice(ind, 1)
      this.i--; this.k--;
      if(!this.ctoggle[ind]) 
      this.ctoggle[ind]=!this.ctoggle[ind];
      console.log(this.ctoggle)
    }
    else {
      this.thedo.splice(0)
      console.log(this.thedo)
      this.k--; this.i--;
      if(!this.ctoggle[ind]) 
      this.ctoggle[ind]=!this.ctoggle[ind];
      console.log(this.ctoggle)
    }
  }
  toggleList(list: number) {
    if(list==1){
      this.all=true;
      this.comp=false;
      this.act=false
    }else{
      if(list==2){
        this.all=false;
      this.comp=false;
      this.act=true
      }else{
        this.all=false;
        this.comp=true;
        this.act= false;
      }
    }
  }
}
