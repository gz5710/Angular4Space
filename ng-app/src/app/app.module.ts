import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewcmproutingComponent } from './newcmprouting/newcmprouting.component';
import { MyserviceService } from './myservice.service'

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewcmproutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'newcmproutingg',
        component: NewcmproutingComponent
      }
    ]),
    HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
