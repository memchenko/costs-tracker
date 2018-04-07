import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";``
import {Subject} from "rxjs/Subject";

class Category {
  id: number;
  category: string;
  color: string;
}

export class CategoriesResponse {
  user_id?: number;
  income_tracks?: Category[];
  cost_tracks?: Category[];
}

@Injectable()
export class UserCategoriesService {
  static categories: any;
  static categoriesPublisher: Subject<CategoriesResponse> = new Subject();
  static userID: number = 1;

  constructor(
    private http: HttpClient
  ) {
    UserCategoriesService.categoriesPublisher.subscribe((categories: CategoriesResponse) => {
      UserCategoriesService.categories = categories;
    });
  }

  public getUserCategories(): void {
    this.http.get<CategoriesResponse>(`http://localhost:8080/api/categories?id=${UserCategoriesService.userID}`)
      .subscribe(
        (res: CategoriesResponse) => {
          UserCategoriesService.categoriesPublisher.next(res);
        },
        (err: HttpErrorResponse) => {
          console.error(err);
        }
      );
  }
}
