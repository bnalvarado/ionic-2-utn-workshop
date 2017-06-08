import { Component, Inject, forwardRef } from '@angular/core';

import { DrawingPage } from '../drawing/drawing';

@Component({
  selector: 'drawing-tools',
  templateUrl: 'drawing.tools.html',
  //providers: [DrawingService]
})
export class DrawingTools {

  // Declare private variable to store parent component
  private parent: DrawingPage;

  // Set parent component to local parent variable
  constructor(@Inject(forwardRef(() => DrawingPage)) private _parent: DrawingPage) {
    this.parent = _parent;
  }

  // Set free drawing mode on canvas
  setFreeDrawing() {
    let canvas = this.parent.canvas;
    canvas.isDrawingMode = true;
  }

  // Cancel free drawing mode
  disabledDrawing(){
    let canvas = this.parent.canvas;
    canvas.isDrawingMode = false;
  }

  // Add fabric text object to canvas
  addText() {
    let text = this.parent.drawingService.newText();
    // let canvas = this.parent.canvas;
    this.addToCanvas(text);
  }

  // Add fabric rectangle object to canvas
  addRectangle() {
    let rectangle = this.parent.drawingService.newRectangle();
    this.addToCanvas(rectangle);
  }

  // Add fabric circle object to canvas
  addCircle() {
    let circle = this.parent.drawingService.newCircle();
    this.addToCanvas(circle);
  }

  // Add/center object to canvas
  addToCanvas(object){
    let canvas = this.parent.canvas;
    this.disabledDrawing();
    canvas.add(object);
    canvas.centerObject(object);
    object.setCoords();
    canvas.renderAll();
  }
}