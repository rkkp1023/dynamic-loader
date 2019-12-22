import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsingDirectiveComponent } from './using-directive/using-directive.component';
import { DynamicDirective } from './using-directive/dynamic.directive';
import { FirstComponent } from './using-directive/first/first.component';
import { SecondComponent } from './using-directive/second/second.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    UsingDirectiveComponent,
    DynamicDirective,
    FirstComponent,
    SecondComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [FirstComponent,SecondComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
