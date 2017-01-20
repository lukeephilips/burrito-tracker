import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BurritosComponent } from './burritos.component';
import { NewBurritoComponent } from './new-burrito.component';
import { EditBurritoComponent } from './edit-burrito.component';
import { TypePipe } from './type.pipe';





@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BurritosComponent, NewBurritoComponent, EditBurritoComponent, TypePipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
