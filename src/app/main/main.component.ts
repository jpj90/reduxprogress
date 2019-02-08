import { Component } from '@angular/core';
import { TrackingService } from '../tracking-service/tracking.service';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent  {
  
  constructor(private trackingService: TrackingService) {}
  
  name = 'Main';

  currentBlock: number;
  message: string;

  colors: any[] = [
    {color: "blue", visited: false, selected: false},
    {color: "pink", visited: false, selected: false},
    {color: "green", visited: false, selected: false},
    {color: "yellow", visited: false, selected: false}];

  public stepForward(): void {
    if (this.currentBlock == undefined) {
      this.currentBlock = 0;
      this.colors[this.currentBlock].selected = true;
      return;
    }
    if (this.currentBlock === this.colors.length - 1) {
      this.message = "Can't move forward, at last block!";
      return;
    }
    this.message = undefined; 
    this.colors[this.currentBlock].selected = false;
    this.colors[this.currentBlock].visited = true;
    this.currentBlock++;
    this.colors[this.currentBlock].selected = true;

    this.trackingService.fireEvent("forward!");
    return;
  }

  public stepBackward(): void {
    if (this.currentBlock == undefined) {
      this.currentBlock = 0;
      this.colors[this.currentBlock].selected = true;
      return;
    }
    if (this.currentBlock === 0) {
      this.message = "Can't move backward, at first block!";
      return;
    }
    this.message = undefined;
    this.colors[this.currentBlock].selected = false;
    this.colors[this.currentBlock].visited = true;
    this.currentBlock--;
    this.colors[this.currentBlock].selected = true;

    this.trackingService.fireEvent("backward!");
    return;
  }
}
