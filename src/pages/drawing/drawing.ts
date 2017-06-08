import { Component, ViewChild } from '@angular/core';

import { DrawingTools } from '../drawing/drawing.tools';
import { DrawingService } from '../drawing/drawing.service';

@Component({
  selector: 'page-drawing',
  templateUrl: 'drawing.html',
  providers: [DrawingService]
})
export class DrawingPage {
  
  @ViewChild(DrawingTools) child:DrawingTools;
  public canvas: any;
  public drawingService: DrawingService;

  constructor(drawingService: DrawingService) {
    this.drawingService = drawingService;
    this.canvas = null;
  }

  ionViewDidLoad() {
    this.canvas = this.drawingService.initCanvas('drawing-canvas');
  }

}
