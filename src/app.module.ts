import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

import { HttpServer } from './components/app.component';

import { ListService} from './services/list.service';




@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, JsonpModule,
  /*    RouterModule.forRoot([
      { path: 'links', component: LinksPageComponent },
*/
/*      
      { path: 'hero/:id', component: HeroDetailComponent },
{
        path: 'heroes',
        component: HeroListComponent,
        data: {
          title: 'Heroes List'
        }
      },*/
 /*     { path: '', component: HomeComponent },
      { path: '**', component: HomeComponent }
    ])*/
    ],
  declarations: [HttpServer
  ],
  providers: [ 
    {
      provide : LocationStrategy,
      useClass: HashLocationStrategy
    }, 
    ListService
],
  bootstrap: [HttpServer],
})

export class AppModule {}
