import { PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { pastry } from './mock-list';
// import { Pastry } from '../pastry';
export interface Pastry{
name:string;
imgpath:string;
discription:string;
}

@Component({
  selector: 'app-pastrylist',
  templateUrl: './pastrylist.component.html',
  styleUrls: ['./pastrylist.component.css']
})
export class PastrylistComponent implements OnInit {

pas= pastry;

  constructor() { }

  ngOnInit(): void {
  }

}
