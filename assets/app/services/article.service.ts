import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleService {
    constructor(private readonly http: HttpClient) {}

    getArticles(pageSize, pageNumber): Observable<any> {
        return this.http.post('http://localhost:3000/api/article', {pageSize, pageNumber});
    }
}