import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importing HttpClient
import { HttpClientModule } from '@angular/common/http'; 

// importing search and filter
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

// importing pagination 
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ApiComponent } from './api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
