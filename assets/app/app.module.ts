import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ArticleComponent } from "./article/article.component";

import { ArticleService } from "./services/article.service";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ArticleComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        ArticleService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}