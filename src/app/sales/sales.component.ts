import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  WritableSignal,
} from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [LucideAngularModule, NgStyle],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SalesComponent {
  isVisible: WritableSignal<boolean> = signal(true);

  toggle() {
    this.isVisible.update((v) => !v);
    console.log(this.isVisible());
  }
}
