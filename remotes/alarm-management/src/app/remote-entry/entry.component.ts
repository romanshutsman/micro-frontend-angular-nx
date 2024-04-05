import {Component, inject} from '@angular/core';
import {AsyncPipe, CommonModule} from '@angular/common';
import {Store} from "@ngrx/store";

@Component({
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  selector: 'app-alarm-management-entry',
  templateUrl: "entry.component.html",
})
export class RemoteEntryComponent {
  private readonly store = inject(Store);
  selectedAsset$ = this.store.select(s => s.store?.selectedAsset);
}
