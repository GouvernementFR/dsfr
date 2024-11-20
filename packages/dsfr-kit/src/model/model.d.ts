declare interface ModelAttributes {
    readonly id?: string | undefined;
    readonly 'class'?: string | undefined
    readonly 'aria-hidden'?: string | undefined;
    readonly 'aria-label'?: string | undefined;
}

declare interface ModelElement {
    readonly innerHTML?: string | undefined;
    readonly attributes: ModelAttributes;
}

declare interface ModelElements {
    readonly [key: string]: ModelElement;
}

export declare interface Props extends ModelElement {
    readonly elements?: ModelElements;
}

export class Model {
    static get schema(): any;
    static registerSchema(schema: any): void;
    constructor(props: any, context?: any);
    get schema(): any;
    init(props: any): void;
    normalize(props: any): {};
    assign(props: any, getters?: {}): void;
    parse(classes?: any[], attributes?: {}, properties?: {}, ...elementsArgs: any[]): void;
    get classes(): any;
    get className(): any;
    get attributes(): any;
    get elements(): ModelElements;
    get props(): Props;
}
export namespace Model {
    export { ModelContext as Context };
}
import { ModelContext } from './model-context.js';
