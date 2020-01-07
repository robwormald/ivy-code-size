import { Component, ɵrenderComponent as renderComponent } from '@angular/core';
import * as i0 from "@angular/core";
export class HelloWorld {
    constructor() {
        this.name = 'World!';
    }
}
HelloWorld.ɵfac = function HelloWorld_Factory(t) { return new (t || HelloWorld)(); };
HelloWorld.ɵcmp = i0.ɵɵdefineComponent({ type: HelloWorld, selectors: [["hello-world"]], decls: 2, vars: 1, template: function HelloWorld_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Hello ", ctx.name, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HelloWorld, [{
        type: Component,
        args: [{
                selector: 'hello-world',
                template: `
    <h3>Hello {{name}}</h3>
  `
            }]
    }], null, null); })();
renderComponent(HelloWorld);
