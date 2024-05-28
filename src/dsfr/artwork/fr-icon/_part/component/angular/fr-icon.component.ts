import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  runInInjectionContext,
  Injector,
  ViewContainerRef,
  Injectable, InputDecorator
} from '@angular/core';
import {FrIconModel, Props} from '../model/fr-icon-model';
// import { FrIconBase } from "./fr-icon-base";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import { spanElement } from "./spanElement";

const getInputs = (component: any) => {
  console.log(component.id);
  return {
    id: component.id,
    name: component.name,
    size: component.size,
  };
}

/*
const createInputs = (component: any) => {
  component.id = input<string>();
  component.name = input<string>();
  component.size = input<string>();
}
/*
const propsFrIcon = {
  id: 'string',
  name: 'string',
  size: 'string',
}

type FrIconType = typeof propsFrIcon;

class FrIconBase {

}

Reflect.defineProperty(FrIconBase, 'id', {value: ''});
Reflect.defineProperty(FrIconBase, 'name', {value: ''});
Reflect.defineProperty(FrIconBase, 'size', {value: ''});


 */

// createInputs(FrIconBase);

// console.log(FrIconBase);
/*
const FrIconPropsDecorator = {
  id: [{ type: Input}],
  name: [{ type: Input}],
  size: [{ type: Input}]
}

const buildFrIconProps = (Input: InputDecorator) => {
  const props:any = {};

  ['id', 'name', 'size'].forEach(key => props[key] = [{ type: Input }]);

  return props;
}

const propsFrIcon = {
  id: 'string',
  name: 'string',
  size: 'string',
}


type FrIconType = typeof propsFrIcon;

 */

@Component({
  selector: 'fr-icon',
  standalone: true,
  imports: [CommonModule],
  template: spanElement(),
})




class FrIconComponent {


  // static propDecorators = buildFrIconProps(Input);




  @Input() id: string | undefined;
  @Input() name: string | undefined;
  @Input() size: string | undefined;


  /*
  id = input<string>();
  name = input<string>();
  size = input<string>();

   */

  /*
  static propDecorators = {
    id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: false, transform: undefined },] }],
    name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false, transform: undefined },] }],
    size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false, transform: undefined },] }]
  }

   */

  /*
  constructor() {
    createInputs(this);
  }

   */

  public get props(): Props {
    const inputs = getInputs(this);
    const model = new FrIconModel( inputs, FrIconModel.Context.ANGULAR);
    console.log('inputs -> props', inputs, model.props);
    return model.props;
  }

  /*
  constructor(private sanitizer: DomSanitizer) {
    super();
    this.sanitizer = sanitizer;
  }



  public get frIcon(): SafeHtml {
    const model = new FrIconModel((({ id, name, size }) => ({ id, name, size }))(this), '');
    const attributes = Object.entries(model.props.attributes).map(([key, value]) => `${key}="${value}"`).join(' ');
    console.log(attributes);
    return this.sanitizer.bypassSecurityTrustHtml(`<span ${attributes}></span>`);
    // return {className: `fr-icon-${this.name} fr-icon--${this.size}`};
  }

   */
}



export { FrIconComponent  };
