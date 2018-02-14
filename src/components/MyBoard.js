import React, { Component } from 'react';
import { Button,Table,responsive,condensed } from 'react-bootstrap';
import '../style/SignIn.css';

export default class MyBoard extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.myBoard.index}</td>
        <td><p className="table-title">{this.props.myBoard.title}</p></td>
        <td><p className="thisp">{this.props.myBoard.writer}</p></td>
        <td>{this.props.myBoard.hit}</td>
        <td>{this.props.myBoard.date}</td>
      </tr>
    );
  }
}

