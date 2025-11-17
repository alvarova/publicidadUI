import { Injectable } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Injectable({
  providedIn: 'root'
})
export class BlockUIService {
  @BlockUI() blockUI!: NgBlockUI;

  start(message?: string) {
    this.blockUI.start(message || 'Loading...');
  }

  stop() {
    this.blockUI.stop();
  }
}
