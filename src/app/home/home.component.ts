import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpButtonModule } from '@solace/spectra';

import { mynaAeroplane } from '@ng-icons/mynaui/outline'

@Component({
  selector: 'app-home',
  imports: [SpButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  planeIcon = mynaAeroplane;

}
