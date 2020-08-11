import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteredComponent } from './registered/registered.component';
import { RegisteredService } from './registered.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {  HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    RegisteredComponent
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,NgxStarRatingModule,
    AngularEditorModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [RegisteredService],
  bootstrap: [AppComponent]
})
export class AppModule { }
