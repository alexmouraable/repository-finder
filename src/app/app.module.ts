import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SlimLoadingBarModule } from '@cime/ngx-slim-loading-bar';

import { AppComponent } from './app.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { StartComponent } from './components/start/start.component';
import { LogoComponent } from './components/logo/logo.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutes } from './app.routes';
import { SearchHeaderComponent } from './components/search-header/search-header.component';
import { SearchFooterComponent } from './components/search-footer/search-footer.component';
import { DecreasePipe } from './pipes/decrease.pipe';
import { RepositoryCountComponent } from './components/repository-count/repository-count.component';
import { RepositoryListComponent } from './components/repository-list/repository-list.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    StartComponent,
    LogoComponent,
    RepositoryComponent,
    SearchComponent,
    SearchHeaderComponent,
    SearchFooterComponent,
    DecreasePipe,
    RepositoryCountComponent,
    RepositoryListComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutes,
    SlimLoadingBarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }