import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
// import{AgmCoreModule} from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // AgmCoreModule.forRoot({
    //   apiKey:'AIzaSyCvRJAYOt9Iucky9EDIGWxXRnmR1c-75Lc'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
