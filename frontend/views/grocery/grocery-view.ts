import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/grid/vaadin-grid';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { View } from 'Frontend/views/view';
import { Binder, field } from '@hilla/form';
import { getGroceries, save } from 'Frontend/generated/GroceryEndpoint';
import GroceryItem from 'Frontend/generated/com/example/application/GroceryItem';
import GroceryItemModel from 'Frontend/generated/com/example/application/GroceryItemModel';

@customElement('grocery-view')
export class GroceryView extends View {

  @state()
  private groceries: GroceryItem[] = [];
  private binder = new Binder(this, GroceryItemModel);

  render() {
    return html`
      <div class="p-m">
        <div>
          <vaadin-text-field
            ${field(this.binder.model.name)}
            label="Item"> </vaadin-text-field> 
          <vaadin-number-field
            ${field(this.binder.model.quantity)}
            has-controls
            label="Quantity"></vaadin-number-field> 
          <vaadin-button
            theme="primary"
            @click=${this.addItem}
            ?disabled=${this.binder.invalid}>Add</vaadin-button> 
        </div>

        <h3>Grocery List</h3>
        <vaadin-grid .items="${this.groceries}" theme="row-stripes" style="max-width: 400px">
          
          <vaadin-grid-column path="name"></vaadin-grid-column>
          <vaadin-grid-column path="quantity"></vaadin-grid-column>
        </vaadin-grid>
      </div>
    `;
  }

  async addItem() {
    const groceryItem = await this.binder.submitTo(save);
    if (groceryItem) {
      this.groceries = [...this.groceries, groceryItem];
      this.binder.clear();
    }
  }

  async firstUpdated() {
    const groceries = await getGroceries();
    this.groceries = groceries;
  }
}