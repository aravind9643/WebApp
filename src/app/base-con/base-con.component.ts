import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-con',
  templateUrl: './base-con.component.html',
  styleUrls: ['./base-con.component.css']
})
export class BaseConComponent implements OnInit {
  b = 0;
  o = 0;
  h = 0;
  value = '';
  form;  constructor() {
   }
  ngOnInit() {
    this.form = new FormGroup({
      decimal: new FormControl(''),
      binary: new FormControl(''),
      octal: new FormControl(''),
      hexa: new FormControl('')
    });
    }
 decimalChanged(value) {
   if (value !== '') {
    this.form.patchValue({binary: parseInt(value, 10).toString(2)});
    this.form.patchValue({octal: parseInt(value, 10).toString(8)});
    this.form.patchValue({hexa: parseInt(value, 10).toString(16)});
   } else {
    this.form.patchValue({binary: ''});
    this.form.patchValue({octal: ''});
    this.form.patchValue({hexa: ''});
   }
 }
 binaryChanged(value) {
    this.b = this.b + 1;
    if (this.b === 1) {
     if (value !== '') {
       this.form.patchValue({decimal: parseInt(value, 2).toString(10)});
      } else {
       this.form.patchValue({decimal: ''});
      }
      this.b = 0;
    }
 }
 hexaChanged(value) {
  this.h = this.h + 1;
  if (this.h === 1) {
   if (value !== '') {
     this.form.patchValue({decimal: parseInt(value, 16).toString(10)});
    } else {
     this.form.patchValue({decimal: ''});
    }
    this.h = 0;
  }
}
octalChanged(value) {
  this.o = this.o + 1;
  if (this.o === 1) {
   if (value !== '') {
     this.form.patchValue({decimal: parseInt(value, 8).toString(10)});
    } else {
     this.form.patchValue({decimal: ''});
    }
    this.o = 0;
  }
}
   }

