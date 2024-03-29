import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-production-survailance-entry',
  template: `HELLO from app-production-survailance-entry`,
})
export class RemoteEntryComponent {
  constructor() {
    console.log('Hello')
  }
}
