ember-cssgrid-editor
==============================================================================

Edit the layout of a CSS Grid visually.

> This is at the start of developemnt, not for use yet.

Installation
------------

```sh
ember install ember-cssgrid-editor
```

Usage
-----

```hbs
<GridEditor @columns={{3}}>
  {{#each this.items as |item index|}}
    <GridEditorItem
      @itemIndex={{index}}
      @onChange={{action (mut item.gridOptions)}}
    >
      {{item.name}}
    </GridEditorItem>
  {{/each}}
</GridEditor>
```

Contributing
------------

### Installation

* `git clone <repository-url>`
* `cd ember-cssgrid-editor`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
