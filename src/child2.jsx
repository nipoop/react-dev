import React, { useState } from 'react';
import { Button } from 'antd';

export default class Child2 extends React.Component {

  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  render() {
    return (
      <div>
        <div>
          {this.props.count + this.state.num}
        </div>
        <Button
          onClick={() => {
            this.setState({
              num: 3
            })
            this.setState({
              num: 4
            })
            this.setState({
              num: 5
            })
          }}
        >
          Child2
        </Button>
      </div>
    )
  }
}
