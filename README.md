# super-rentals

This README will serve as a personal notes for myself to keep my understanding of EmberJS fresh.

## Conventions

> Ember comes with strong _conventions_ and sensible defaults. Despite these defaults, EmberJS are still flexible enough to allow customization such as customzing paths for our routes.

## application.hbs

> Considered a special template that does not have its own URL and cannot be navigated to on its own. Rather, it is used to specify a common layout that is shared by every page in your app. Excellent for site-wide UI elements like nav-bar and footer.

## LinkTo

> When clicking on these special links, Ember will intercept the click, render the content for the new page, and update the URL. All performed locally without having to wait for server, thus avoiding a full page refresh.

## Understanding `{{outlet}}`

> Keyword denotes the place where our site's pages should be rendered into, similar to `{{yield}}` below.

## Understanding `{{yield}}`

> When invoking a component, Ember will replace the component tag with the content found in the component's template. It is also common to pass content to components, like `<Jumbo>some content</Jumbo>`. This is enabled using `{{yield}}` keyword, which will be replaced with the content that was passed to the component.

## Understanding `...attributes`

> An answer to hard-coding specific values for the `src` and `alt` attributes. this allows arbitrary HTML attributes to be passed in when invoking this component: `<Rental::Image src="..." alt="..."/>` => `<img ...attributes>`

## Component vs Component-class

> Allow you to optionally associate JavaScript code with a component -- in this case a glimmer component class. Essentially a source code (js) for the supporting component. i.e. `app/component/rental/image.hbs` & `app/component/rental/image.js`

## Glimmer component

> One of the serveral component classes available in Ember. Learn more about [Glimmer Component](https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/).

## Ember [decorator](https://guides.emberjs.com/release/in-depth-topics/native-classes-in-depth/#toc_decorators)

> User defined modifiers that can be applied to a class or class element such as field or method to change its behavior.

### `@tracked`

> Inform Ember to monitor the assigned variable for updates

### `@action`

> Inform ember that we intend to use this method from our template. Without the decorator, the function will not function properly as a callback function.

## Ember [modifier](https://guides.emberjs.com/release/components/template-lifecycle-dom-and-modifiers/#toc_event-handlers)

> Event handler added to an HTML element. Operate by passing the element to a function that can do anything with it.

## Automated Testing

> Uses [`QUnit`](https://qunitjs.com/) js testing framework
>
> Put automated testing into motion: `ember test --server` or `ember t -s`
>
> Automated testing URL: [`http://localhost:7357/`](http://localhost:7357/)
>
> Acceptance testing test the _work flow_ of an application. Since a page can take time to load, we use `async/await` to ensure that each step wait its turn before moving on.
>
> Component test, also known as rendering (integration) test used to render and test a single component at a time.

## Ember Generators

> Typically written as `ember generate <type> <name>` or `ember g <type> <name>`.

### Component generator

> `ember generate component <name>`
>
> Will generate a component template at `app/component/<name>` and a component test file at `tests/integration/components/<name>`
>
> `ember generate component <name>/<name>`
>
> This is a namespaced components, allowing you to organize components by folders according to their purpose. Invoked as `<name::name>`

### Component-class generator

> `ember generate component-class <name>`

### Component generator with component class

> `ember generate component <name> --with-component-class`
>
> alt: `ember g component <name> -gc`

## Model Hook

> An async method known as `model()`. Responsible for fetching and preparing any data for the route. Ember automatically call this hook when entering a route.

### Acceptance Test generator

> `ember generate acceptance-test <name>`

### Component Test generator

> `ember generate component-test <name>`
