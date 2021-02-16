import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  checkParent: boolean;
  checkParent1: boolean;
  indeterminateState: boolean;
  indeterminateState1: boolean;
  Checkboxes: any;
  Checkboxes1: any;
  public show:boolean = false;
  public show1:boolean = false;
  icon1:boolean = true;
  zipped: boolean = true;
  zipped1: boolean = true;

  constructor() {

    this.Checkboxes = [
      {
        value: "C Programming",
        isItemChecked: false
      }, {
        value: "Java",
        isItemChecked: false
      }, {
        value: "C++",
        isItemChecked: false
      }
    ];
    this.Checkboxes1 = [
      {
        value: "DS",
        isItemChecked: false
      }, {
        value: "Algo",
        isItemChecked: false
      }, {
        value: "DBMS",
        isItemChecked: false
      }
    ];
    
  }

  checkCheckbox() {
    setTimeout(() => {
      this.Checkboxes.forEach(item => {
        item.isItemChecked = this.checkParent;
      });
    });
  }

  
  checkCheckbox1() {
    setTimeout(() => {
      this.Checkboxes1.forEach(item => {
        item.isItemChecked = this.checkParent1;
      });
    });
  }

  verifyEvent() {
    const allItems = this.Checkboxes.length;
    let selected = 0;

    this.Checkboxes.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState = true;
      this.checkParent = false;
    } else if (selected == allItems) {
      // All item selected
      this.checkParent = true;
      this.indeterminateState = false;
    } else {
      // No item is selected
      this.indeterminateState = false;
      this.checkParent = false;
    }
  }

  
  verifyEvent1() {
    const allItems = this.Checkboxes1.length;
    let selected = 0;

    this.Checkboxes1.map(item => {
      if (item.isItemChecked) selected++;
    });

    if (selected > 0 && selected < allItems) {
      // One item is selected among all checkbox elements
      this.indeterminateState1 = true;
      this.checkParent1 = false;
    } else if (selected == allItems) {
      // All item selected
      this.checkParent1 = true;
      this.indeterminateState1 = false;
    } else {
      // No item is selected
      this.indeterminateState1 = false;
      this.checkParent1 = false;
    }
  } 

  toggle() {
    this.show = !this.show;
  }

  toggle1() {
    this.show1 = !this.show1;
  }

  toggleZipped(): void {
    this.zipped = !this.zipped;
  }
  toggleZipped1(): void {
    this.zipped1 = !this.zipped1;
  }

  
}