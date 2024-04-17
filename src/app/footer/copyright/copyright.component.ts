import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CopyrightComponent {

}
