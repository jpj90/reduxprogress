import { Component } from '@angular/core';
import { TrackingService } from '../tracking-service/tracking.service';

@Component({
  selector: 'track-component',
  templateUrl: './track.component.html',
  styleUrls: [ './track.component.css' ]
})
export class TrackComponent  {

  constructor(private trackingService: TrackingService) {}

  name = 'Track';

  currentBlock: number;

  colors: any[] = [
    {color: "blue", visited: false, selected: false},
    {color: "pink", visited: false, selected: false},
    {color: "green", visited: false, selected: false},
    {color: "yellow", visited: false, selected: false}];

  public onMainStepForward(): void {
    if (this.currentBlock == undefined) {
      this.currentBlock = 0;
      this.colors[this.currentBlock].selected = true;
      return;
    }

    this.colors[this.currentBlock].selected = false;
    this.colors[this.currentBlock].visited = true;
    this.currentBlock++;
    this.colors[this.currentBlock].selected = true;
    return;
  }

  public onMainStepBackward(): void {
    if (this.currentBlock == undefined) {
      this.currentBlock = 0;
      this.colors[this.currentBlock].selected = true;
      return;
    }

    this.colors[this.currentBlock].selected = false;
    this.colors[this.currentBlock].visited = true;
    this.currentBlock--;
    this.colors[this.currentBlock].selected = true;
    return;
  }
}