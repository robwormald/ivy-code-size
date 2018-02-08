import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloWorld {
    constructor() {
        this.name = 'World!';
    }
}
HelloWorld.decorators = [
    { type: Component, args: [{
                selector: 'hello-world',
                template: `
    <h3>Hello {{name}}</h3>
  `
            },] },
];
/** @nocollapse */
HelloWorld.ctorParameters = () => [];
HelloWorld.ngComponentDef = i0.ɵdefineComponent({ type: HelloWorld, tag: "hello-world", factory: function HelloWorld_Factory() { return new HelloWorld(); }, template: function HelloWorld_Template(ctx, cm) { if (cm) {
        i0.ɵT(0, "\n    ");
        i0.ɵE(1, "h3");
        i0.ɵT(2);
        i0.ɵe();
        i0.ɵT(3, "\n  ");
    } i0.ɵt(2, i0.ɵb1("Hello ", ctx.name, "")); } });
renderComponent(HelloWorld);
