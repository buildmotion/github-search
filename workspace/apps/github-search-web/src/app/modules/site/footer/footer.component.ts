import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angularlicious-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyrightDate: Date;
  constructor() { }

  ngOnInit() {
    this.copyrightDate = new Date(Date.now());
  }

}
