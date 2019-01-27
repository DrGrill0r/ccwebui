import { Injectable } from '@angular/core';
import { Category } from '../category';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

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

  appserverUrl = 'https://t5n6j2b4ve.execute-api.us-east-2.amazonaws.com/prod/categories'

  constructor(private http: HttpClient) { }

  /**
   * Queries Categories in the target container.
   * @returns Array of categories as observable.
   */
  getAllCategoriesInTarget(): Observable<Array<Category>> {
    console.log("CategoryService getting all categories in target.")
    return this.http.get<Array<Category>>(this.appserverUrl);
  }

  /**
   * Posts all given categories. This bulk-updates all categories at once.
   */
  setAllCategoriesInTarget(categories: Category[]): Observable<Array<Category>> {
    console.log("CategoryService updating categories in target.")
    console.log("Which are ", JSON.stringify(categories))
    return this.http.post<Array<Category>>(this.appserverUrl, categories);
  }

  addCategoryToTarget(category: Category) {
    console.log("CategoryService add category ", category.category_id, " to target.")
    return this.http.post<Category>(this.appserverUrl, category, httpOptions)
  }

  removeCategoryFromTarget(category: Category) {
    console.log("CategoryService remove category ", category.category_id, " from target.")
  }
}
