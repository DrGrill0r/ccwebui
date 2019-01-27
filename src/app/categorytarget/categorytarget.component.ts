import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from '../category';

@Component({
  selector: 'app-categorytarget',
  templateUrl: './categorytarget.component.html',
  styleUrls: ['./categorytarget.component.css']
})
export class CategorytargetComponent implements OnInit {

  constructor(categoryService: CategoryService) {
    this.categories = new Array;
    this.categoryService = categoryService;
  }

  categoryService: CategoryService;

  categories: Category[];

  ngOnInit() {
    this.categoryService.getAllCategoriesInTarget()
      .subscribe((data: Category[]) => this.categories = data );
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("TARGET - drop operation started for object ", <string>data)
    var deserializedTransferObject = JSON.parse(data);

    if( !this.categories.some( item => item.category_id == deserializedTransferObject.category_id )  )
    {
      console.log("TARGET - adding ", data, " to the categories array.")
      this.categories.push(deserializedTransferObject);

      this.categoryService.setAllCategoriesInTarget(this.categories)
        .subscribe(data => data);
    } else {
      console.log("TARGET - a category with the id ", deserializedTransferObject.category_id, " is already present in the this.categories array. Skipping...");
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev,modelId) {
    console.log("TARGET - drag operation started for modelId ", modelId);
    var arrayIndex:number = this.categories.findIndex(item => item.category_id == modelId);

    var serializedTransferObject = JSON.stringify(this.categories[arrayIndex]);
    console.log("TARGET - sending serialized category object ", serializedTransferObject);
    ev.dataTransfer.setData("text", ev.target.id);
  }

  dragEnd(ev, modelId) {
    var arrayIndex:number = this.categories.findIndex(item => item.category_id == modelId);

    this.categories.splice(arrayIndex, 1);
    this.categoryService.setAllCategoriesInTarget(this.categories)
      .subscribe(data => data);
  }

}
