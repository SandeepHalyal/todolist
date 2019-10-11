import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDo';
  thedo = [{
    todo: ["example"],
    index: [0]
  }]
  left = []; completed = [];
  i: any = 0; k: any = 0; acc: any = []; switch = true;
  constructor() { }
  id: string;
  ngOnInit() {
    
  }

  addToDo(data: any) {
    this.thedo[this.i] = { todo: data.todo, index: this.i };
    this.left[this.i] = { todo: data.todo, index: this.i };
    this.i++; this.k++;
  }
  deleteToDo(ind: number) {
    if (this.thedo.length > 1) {
      this.thedo.splice(ind, 1)
      this.i--; this.k--;
    }
    else {
      this.thedo.splice(0)
      console.log(this.thedo)
      this.k--; this.i--;
    }
  }
  leftItems(ind: any) {

  }
}
