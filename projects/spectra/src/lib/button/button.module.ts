import { NgModule } from '@angular/core';
import { SpButtonComponent } from './button.component';
import { NgIcon } from '@ng-icons/core';

const EXPORTS = [
  SpButtonComponent
];

@NgModule({
  declarations: [
    ...EXPORTS
  ],
  imports: [
    NgIcon
  ],
  exports: [
    ...EXPORTS
  ]
})
export class SpButtonModule { }
