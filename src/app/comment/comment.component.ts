import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  placeholderText = "Enter your comment";

  constructor() { }

  ngOnInit(): void {
  }

}
