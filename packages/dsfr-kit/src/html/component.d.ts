export class Component {
    constructor(model?: ComponentModel);
    _model: ComponentModel;
    get model(): ComponentModel;
    get props(): import("../model/model").Props;
    get attributes(): string;
    get html(): string;
}
import { ComponentModel } from '../model/';
