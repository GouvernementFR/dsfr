import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FrIconModel } from '../model/fr-icon-model';
import { Props } from '@gouvfr/dsfr-kit';
import { ngGetProps, ngGetBoundAttributes } from '@gouvfr/dsfr-kit/ng';

@Component({
  selector: 'fr-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<span ${ngGetBoundAttributes(FrIconModel.schema)} ></span>`,
})

class FrIconComponent {
  @Input() id: string | undefined;
  @Input() name: string | undefined;
  @Input() size: string | undefined;

  public get props(): Props {
    return ngGetProps(this, FrIconModel);
  }
}

export { FrIconComponent  };
