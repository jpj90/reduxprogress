import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';

@Injectable()
export class TrackingService {
  public subject: Subject<string> = new Subject<string>();

  public fireEvent(message: string): void {
      this.subject.next(message);
  } 
}