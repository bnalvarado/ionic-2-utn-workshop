import { Injectable } from '@angular/core';

import 'fabric'
declare let fabric: any;

@Injectable()
export class DrawingService{

  // Start fabric canvas according canvas id
  initCanvas(id){
    return new fabric.Canvas(id);
  }

  // Create new fabric text element
  newText(){
    let text = new fabric.IText('Click to change Text', {
      fontSize: 30,
      width: 100,
      height: 50
    });

    //this.setElementOptions(text);
    return text;
  }

  // Create new fabric circle element
  newCircle(){
    let circle = new fabric.Circle({
      radius: 50,
      stroke: 'rgb(0,0,0)',
      strokeWidth: 1,
      fill: 'transparent'
    });

    //this.setElementOptions(circle);
    return circle;
  }

  // Create new fabric rectangle element
  newRectangle(){
    let rectangle = new fabric.Rect({
      width: 150,
      height: 80,
      stroke: 'rgb(0,0,0)',
      strokeWidth: 1,
      fill: 'transparent'
    });
    
    //this.setElementOptions(rectangle);
    return rectangle;
  }

  // Modify default element options
  // setElementOptions(elem){
  //   elem.setControlsVisibility({
  //     mt: false,
  //     mb: false,
  //     ml: false,
  //     mr: false
  //   });
  //   elem.set({
  //     hasRotatingPoint: false
  //   })
  // }
}

