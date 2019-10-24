import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Define your variables done,todos,newToDo,newToDoObj,error
  done: boolean;
  todos: any;
  newToDo: string;
  newToDoObj: any;
  error: boolean;
  
  //Define your constructor here with todos as [] ,newToDo as '' and error as false
  constructor(){
      this.todos = [];
      this.newToDo = "";
      this.error = false;
  }
  
  //Define your addMore function here
  addMore(){
      if(this.newToDo === ""){
          this.error = true;
      }else{
          this.newToDoObj = {
              desc: this.newToDo,
              done: false
          };
          this.todos.push(this.newToDoObj);
          this.newToDo = "";
          this.error = false;
      }
  }
  //Define your clearAll function here
  clearAll(){
      this.todos = [];
  }
}

