import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-mf1',
  standalone: true,
  imports: [CommonModule, DatePipe],
  template: `<p>Angular 16 content works!</p>
    <div>{{ test | date: 'long' }}</div>`,
  styleUrls: ['./mf1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Mf1Component {
  test = new Date();
}
