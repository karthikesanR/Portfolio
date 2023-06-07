import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ServicsComponent } from './servics/servics.component';
import { LearnservicsComponent } from './learnservics/learnservics.component';
// import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ServicsComponent,
    LearnservicsComponent,
   

      ],
  
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
