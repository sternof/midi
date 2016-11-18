import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {HttpService} from '../services/http.service';
import {StringService} from '../services/strings.service';


@Component({
  selector: 'httpserver',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{ title }}</h1>  
  
  <button (click)="onTestGet()"> Get  </button>
  <p> output get : {{jsonData}} </p>
  <div *ngFor= "let item of itemArray"> id: {{item.id}} <br> title: {{item.title}} </div>
  <button (click)="onTestPost()"> Post  </button>
  <p> output post: {{jsonPostData}} </p>
    <!--div *ngFor= "let item of jsonPostDataArray">  {{item}} </div-->

  <br>
  <h2> TEXT </h2>
  <button (click)="getText()"> Post Request </button>
  <pre> output text: {{textData}} </pre>
  <h2> STRINGS </h2>
  <button (click)="getStrings()"> Strings </button>

  `
})
/*
class Item {
  title : string;
  userId: number;
  body: string;
  id: number;
}*/

export class HttpServer {

constructor(private httpService : HttpService, private strings : StringService) {

}


  title: string = 'Http Server';
  itemArray = [];
  jsonData: string ;
  jsonPostData ;
  jsonPostDataArray =[];
  textData: string ;



 private onTestGet() {
  //var url = '../model/data.json';
 // var url = 'http://echo.jsontest.com/key/value/one/two';
  var url = 'http://date.jsontest.com/';
  var urlLocal = '../model/data.json';
  url = 'http://httpbin.org/get';

   this.httpService.getJson(url).subscribe(
     data => 
       this.jsonData = JSON.stringify(data),
     error => alert (error),
     () => console.log("finished")
   );
   ///// getting array from local file. 
  /* this.httpService.getJsonLocal(urlLocal).subscribe(
     data => 
       this.itemArray = data,
     error => alert (error),
     () => console.log("finished")
   );*/
   url = 'http://jsonplaceholder.typicode.com/posts';
   this.httpService.getHttpRequest(url).subscribe(
     data => {
  //   console.log(data);
       this.itemArray = data;
      },
     error => alert (error),
     () => console.log("finished")
   );
 }


 private getText() {
   this.httpService.getText().subscribe(
     data => {
       this.textData = this.modifyString(data);
     },
     error => alert (error),
     () => console.log("finished text")
   );
 }

 private onTestPost() {
   let url  = 'http://validate.jsontest.com'
     url = 'http://httpbin.org/post';
   url = 'http://jsonplaceholder.typicode.com/posts';

   this.httpService.postJson(url).subscribe(
     data =>  {
       this.jsonPostData = JSON.stringify(data);
       console.log('on test post:' ,data);
       this.jsonPostDataArray.push(JSON.stringify(data));

     },
     error => alert (error),
     () => console.log("finished posting")
   );/*
      this.httpService.postJson(url).subscribe(
     data => 
       this.jsonPostDataArray.push(JSON.stringify(data)),
     error => alert (error),
     () => console.log("finished posting 2")
   );*/
 }

 private getStrings(string: string) : string {
  // let string = "what is this thing. anyway is this ok";
   this.httpService.getText().subscribe(
     data => {
       return this.modifyString(data);
     },
     error => alert (error),
     () => console.log("finished text")
   );
   return 'loading';
 }

 private modifyString(string : string) : string {
        let obj = this.strings.ArrayStringToObject(this.strings.stringToArray(string));
        obj = this.strings.changeObjectProperties(obj);
        let modifiedString = this.strings.reconstructStringFromObj(obj);
        console.log(modifiedString);
        return modifiedString;
 }
}
