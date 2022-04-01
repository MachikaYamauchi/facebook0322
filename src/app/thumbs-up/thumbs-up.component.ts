import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbs-up',
  templateUrl: './thumbs-up.component.html',
  styleUrls: ['./thumbs-up.component.scss']
})
export class ThumbsUpComponent implements OnInit {
  thubmsUp = "https://cdn.worldvectorlogo.com/logos/thumbs-up-facebook.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
