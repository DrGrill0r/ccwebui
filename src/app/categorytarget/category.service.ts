import { Injectable } from '@angular/core';
import { Category } from '../category';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  appserverUrl = 'http://localhost/v1/categories'

  constructor(private http: HttpClient) { }

  /**
   * Queries Categories in the target container.
   * @returns Array of categories as observable.
   */
  getAllCategoriesInTarget() {
    console.log("CategoryService getting all categories in target.")
    return this.http.get<Array<Category>>(this.appserverUrl);
  }

  /**
   * Posts all given categories. This bulk-updates all categories at once.
   */
  setAllCategoriesInTarget(categories: Category[]) {
    console.log("CategoryService updating categories in target.")
    return this.http.post<Array<Category>>(this.appserverUrl, categories);
  }

  addCategoryToTarget(category: Category) {
    console.log("CategoryService add category ", category.id, " to target.")
    return this.http.post<Category>(this.appserverUrl, category, httpOptions)
  }

  removeCategoryFromTarget(category: Category) {
    console.log("CategoryService remove category ", category.id, " from target.")
  }
}
