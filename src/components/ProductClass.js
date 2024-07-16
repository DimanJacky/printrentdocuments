import { Component } from 'react';

export class ProductClass extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Монтирование (Компонент Product создается)');
  }

  componentDidUpdate() {
    console.log('Компонент Product обновляется');
  }

  componentWillUnmount() {
    console.log('Размонтирование (Компонент Product удаляется)');
  }

  onChangeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log('render');
    return (
      <div>
        <p>{this.state.count}</p>
        <p>This is {this.props.name}</p>
        <button onClick={this.onChangeCount}>+</button>
      </div>
    );
  }
}
