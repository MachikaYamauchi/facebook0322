import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  linkArray = [
    "Share",
    "Status",
    "Photos",
    "Link",
    "Video",
    "Question"
  ];

  inputPlaceholder = "write something";
  type = "text";


  constructor() { }

  ngOnInit(): void {
  }

}
