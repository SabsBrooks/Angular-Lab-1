import { Component, OnInit } from "@angular/core";
import { Todo } from "../interface/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { task: "Wash the dishes", completed: true },
    { task: "Vacuum the floors", completed: false },
    { task: "Fold laundry", completed: true },
    { task: "Dust", completed: true },
    { task: "Study code", completed: false }
  ];

  constructor() {}

  ngOnInit() {}
}
