import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ApiEmpComponent } from './Component/api-emp/api-emp.component';
import { AppSortingDirective } from './Directive & pipe/sorting.directive';
import { HighlightDirective } from './Directive & pipe/highlight.directive';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './Directive & pipe/filter.pipe';
import { PageErrorComponent } from './Component/page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiEmpComponent,
    AppSortingDirective,
    HighlightDirective,
    FilterPipe,
    PageErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
