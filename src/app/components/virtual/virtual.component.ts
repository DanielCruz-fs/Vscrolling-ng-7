import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  people = Array(500).fill(0);
  constructor() { 
    console.log(this.people);
  }

  ngOnInit() {
  }

}
