import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@vaadin/vaadin-grid/vaadin-grid.js";
import "../../node_modules/@polymer/iron-ajax/iron-ajax.js";
/**
 * @customElement
 * @polymer
 */

class DatagridApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <iron-ajax auto url="https://demo.vaadin.com/demo-data/1.0/people?count=200" handle-as="json" last-response="{{users}}"></iron-ajax>

      <vaadin-grid aria-label="Basic Binding Example" items="[[users.result]]">
  
        <vaadin-grid-column width="60px" flex-grow="0">
          <template class="header">#</template>
          <template>[[index]]</template>
          <template class="footer">#</template>
        </vaadin-grid-column>
  
        <vaadin-grid-column>
          <template class="header">First Name</template>
          <template>[[item.firstName]]</template>
          <template class="footer">First Name</template>
        </vaadin-grid-column>
  
        <vaadin-grid-column>
          <template class="header">Last Name</template>
          <template>[[item.lastName]]</template>
          <template class="footer">Last Name</template>
        </vaadin-grid-column>
  
        <vaadin-grid-column width="8em">
          <template class="header">Address</template>
          <template>
            <div style="white-space: normal">[[item.address.street]], [[item.address.city]]</div>
          </template>
          <template class="footer">Address</template>
        </vaadin-grid-column>
  
      </vaadin-grid>
    `;
  }

  static get properties() {
    return {
      users: {
        type: Object,
        value: {}
      }
    };
  }

}

window.customElements.define('datagrid-app', DatagridApp);