import {
  Component,
  ɵrenderComponent as renderComponent,
  ɵComponentType as ComponentType
} from '@angular/core'


@Component({
  selector: 'hello-world',
  template: `
    <h3>Hello {{name}}</h3>
  `
})
export class HelloWorld {
  name = 'World!'
}


renderComponent(HelloWorld as ComponentType<HelloWorld>);
