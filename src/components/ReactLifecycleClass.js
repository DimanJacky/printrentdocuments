import { Component } from 'react';
import { ProductClass } from './ProductClass';

export class ReactLifecycleClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, product: 'Product 1' },
        // { id: 2, product: 'Product 2' },
        // { id: 3, product: 'Product 3' },
        // { id: 4, product: 'Product 4' },
      ],
      showProducts: false,
    };
  }

  toggleProducts = () => {
    this.setState({ showProducts: !this.state.showProducts });
  };

  render() {
    let products = null;

    products = this.state.items.map((item, i) => {
      return <ProductClass key={i} name={item.product} change={() => {}} />;
    });

    return (
      <>
        <button onClick={this.toggleProducts}>toggle products</button>
        {this.state.showProducts && products}
      </>
    );
  }
}
