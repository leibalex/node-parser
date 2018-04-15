import {Component, Input, OnInit} from '@angular/core';
import { ArticleService } from "../services/article.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    articles;
    pageSize = 5;
    pageNumber = 1;

    constructor(private readonly articleService: ArticleService) {}

    ngOnInit() {

        this.articleService.getArticles(this.pageSize, this.pageNumber).subscribe((result) => {
            console.log(result);
            this.articles = result;
        });
    }

    previous() {
        if (this.pageNumber <= 1) {
            return;
        }

        this.pageNumber--;
        this.articleService.getArticles(this.pageSize, this.pageNumber).subscribe((result) => {
            this.articles = result;
        });
    }

    next() {
        this.pageNumber++;
        this.articleService.getArticles(this.pageSize, this.pageNumber).subscribe((result) => {
            if(!result.length) {
                this.pageNumber--;
                return;
            } else {
                this.articles = result;
            }
        });
    }
}