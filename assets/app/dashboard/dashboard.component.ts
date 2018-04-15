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
    n = 1;

    constructor(private readonly articleService: ArticleService) {}

    ngOnInit() {

        this.articleService.getArticles(this.pageSize, this.n).subscribe((result) => {
            console.log(result);
            this.articles = result;
        });
    }

    previous() {
        if (this.n <= 1) {
            return;
        }

        this.n--;
        this.articleService.getArticles(this.pageSize, this.n).subscribe((result) => {
            console.log(result);
            this.articles = result;
        });
    }

    next() {
        this.n++;
        this.articleService.getArticles(this.pageSize, this.n).subscribe((result) => {
            console.log(result);
            if(!result.length) {
                this.n--;
                return;
            } else {
                this.articles = result;
            }
        });
    }
}