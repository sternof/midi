import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'midi-app',
 styles: ['.key {height: 80px;}'],
  template: `
      <h1>{{ title }}</h1>  
  <div> 
  <span *ngFor="let key of keys"> <button class='key' [style.background-color]='getColor(key.id)' (click)="play(key.frequency)"> </button>  </span> 
  </div>
  `
})

export class Midi implements OnInit {
title: string = 'piano';
keys = [];

public ngOnInit() {
  for (let i=0 ; i<20;i++) {
    this.keys.push({id: i,frequency: 440 * (1+ i* Math.sqrt(2)/12)})
  }

}
public getColor(id : number) : string {
  if (id%12==1 || id%12==3 || id%12==6 ||id%12==8 ||id%12==10){
  return 'black';
  }
  return 'white';
}

public play(frequency : number) {
var context = new AudioContext;
var oscillator = context.createOscillator();
oscillator.frequency.value = frequency;

oscillator.connect(context.destination);

oscillator.start(0); 
setTimeout(function() {
  oscillator.stop();
}, 100);
}


}
