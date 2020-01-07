import { NgModule } from '@angular/core';
import { HelloWorld } from './hello-world';
import * as i0 from "@angular/core";
export class HelloWorldModule {
}
HelloWorldModule.ɵmod = i0.ɵɵdefineNgModule({ type: HelloWorldModule });
HelloWorldModule.ɵinj = i0.ɵɵdefineInjector({ factory: function HelloWorldModule_Factory(t) { return new (t || HelloWorldModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(HelloWorldModule, { declarations: [HelloWorld] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(HelloWorldModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    HelloWorld
                ]
            }]
    }], null, null); })();
