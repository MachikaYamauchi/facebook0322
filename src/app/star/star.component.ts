import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  star = "https://upload.wikimedia.org/wikipedia/commons/5/51/Star_full.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
