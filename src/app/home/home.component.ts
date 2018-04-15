import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = null;
  list: string[];
  adding = false;
  size: number;
  removing = false;
  constructor(private ajax: NamesService) {
    this.list = this.ajax.list;
  }
  ngOnInit() {
    this.size = this.list.length;
  }
  add() {
    this.list.push(this.name);
    this.name = null;
    this.adding = false;
    this.size = this.list.length;
    this.removing = !this.removing;
  }
  addMore() {
    this.adding = !this.adding;
    this.removing = !this.removing;
  }
}
