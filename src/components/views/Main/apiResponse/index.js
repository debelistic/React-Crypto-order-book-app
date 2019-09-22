import React, { Component } from 'react';
import {
  Paper, Typography, Select, MenuItem,
} from '@material-ui/core';
import { log } from 'debug';

class Orders extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: {},
      pair: '',
      urlSymbol: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/')
      .then((response) => response.json())
      .then((order) => {
        this.setState({
          isLoading: false,
          data: order,
          pair: order[0].name,
        });
      })
      .catch((error) => log(error));
  }

  handleChange(event) {
    const { value, name } = event.target;
    log(event.target);
    this.setState({
      urlSymbol: name,
      pair: value,
    });
    this.bidAsk(name);
  }

  bidAsk(urlSymbol) {
    const { isLoading } = this.state;
    if (isLoading) return;
    fetch(`https://www.bitstamp.net/api/v2/order_book/${urlSymbol}/`)
      .then((response) => response.json())
      .then((orderBook) => {
        const OrderBook = [orderBook];
        log(OrderBook);
      })
      .catch((error) => log(error));
  }

  render() {
    const {
      isLoading, data, pair,
    } = this.state;

    let { urlSymbol } = this.state;
    const content = isLoading ? null
      : data.map((order) => {
        urlSymbol = order.url_symbol;
        return (
          <MenuItem
            key={order.url_symbol}
            value={order.name}
          >
            {order.name}
           v
            {order.minimum_order}
          </MenuItem>
        );
      });

    return (
      <Paper>
        <Typography>
          Select Your Trading Pair
        </Typography>
        <Select
          value={pair}
          name={urlSymbol}
          onChange={this.handleChange}
        >
          {content}
        </Select>
      </Paper>
    );
  }
}

export default Orders;
