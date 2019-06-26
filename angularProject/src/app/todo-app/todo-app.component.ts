import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css']
})
export class TodoAppComponent implements OnInit {

  currentItem = {
    description : '',
    done : '',
    date : ''
  };
  items = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    if(this.currentItem.description !== '') {
      this.currentItem.date = new Date().toString();
      this.items.push(this.currentItem);
      this.currentItem = {
        description: '',
        done: '',
        date: ''
      };
    }
  }

  deleteItem(index) {
    this.items.splice(index, 1);
  }

  completeTask(index) {
    this.items[index].done = true;
  }

  enterKey(event) {
    if(event.key === 'Enter') {
      this.addItem();
    }
  }
}
