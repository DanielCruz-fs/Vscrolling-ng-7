import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild( CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  people = Array(500).fill(0);
  constructor() { 
    console.log(this.people);
  }

  ngOnInit() {
  }
  goLast() {
    this.viewport.scrollToIndex(this.people.length);
  }
  goBeginning() {
    this.viewport.scrollToIndex(0);
  }
  goMiddle() {
    this.viewport.scrollToIndex(this.people.length / 2);
  }
}
