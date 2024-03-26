import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mf1',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>Angular 16 content works!</p>`,
  styleUrls: ['./mf1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mf1Component { }
