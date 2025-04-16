import { Component, computed, input } from '@angular/core';

import { SpColorType, SpSizeType } from '../common/types';
import { SpButtonType } from './types';

@Component({
  selector: '[sp-button]',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  host: {
    '[class]': 'hostClasses()'
  },
  standalone: false
})
export class SpButtonComponent {

  size = input<SpSizeType>('normal');

  color = input.required<SpColorType>();

  type = input<SpButtonType>('filled');

  icon = input<string | null>(null);

  iconSize = computed<string>(() => {
    // TODO: review sizes; perhaps use css variables instead if supported
    switch (this.size()) {
      case 'small':
        return '12px';
      case 'normal':
        return '14px';
      case 'large':
        return '16px';
    }
  });

  hostClasses = computed(() => `sp-button--${this.size()} sp-button--${this.color()} sp-button--${this.type()}`);

}
