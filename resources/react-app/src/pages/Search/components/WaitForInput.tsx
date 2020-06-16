import React, { Component } from 'react';

export class WaitForInput extends Component {
  static flag = Symbol('WaitForInput');

  state = { foundError: false };

  static getDerivedStateFromError(error: any) {
    console.log(error);
    if (error === WaitForInput.flag.description) {
      return { foundError: true };
    }

    return { foundError: false };
  }

  render() {
    return this.state.foundError ? (
      <div className="p-4 text-center">
        <p className="text-gray-400">
          Enter a search term to see some results...
        </p>
      </div>
    ) : (
      this.props.children
    );
  }
}
