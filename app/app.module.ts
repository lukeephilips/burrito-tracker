import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BurritosComponent } from './burritos.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, BurritosComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
