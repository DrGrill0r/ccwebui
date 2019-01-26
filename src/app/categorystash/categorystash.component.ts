import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CATEGORIES } from '../mock-categories';

@Component({
  selector: 'app-categorystash',
  templateUrl: './categorystash.component.html',
  styleUrls: ['./categorystash.component.css']
})
export class CategorystashComponent implements OnInit {

  categories = CATEGORIES;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index;
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    console.log("STASH - drop operation started for object ", <string>data);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,modelId) {
    console.log("STASH - drag operation started for modelId ", modelId);

    var arrayIndex:number = this.categories.findIndex(item => item.id == modelId);

    var serializedTransferObject = JSON.stringify(this.categories[arrayIndex]);
    console.log("STASH - sending serialized category object ", serializedTransferObject);
    ev.dataTransfer.setData("text", serializedTransferObject);
  }

  dragEnd(ev,modelId) {
    var arrayIndex:number = this.categories.findIndex(item => item.id == modelId);

    //this.categories.splice(arrayIndex, 1);
  }


}
