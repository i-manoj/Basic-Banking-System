import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './Mycomponents/view/view.component';
import { NavComponent } from './Mycomponents/nav/nav.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import{HttpClientModule} from '@angular/common/http';
import { EmailsPipe } from './emails.pipe';
import { MyComponent } from './Mycomponents/my/my.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NavComponent,
    HomeComponent,
    EmailsPipe,
    MyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
