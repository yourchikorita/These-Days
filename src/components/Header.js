import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link} from 'react-router-dom';


class Header extends Component {

  render() {
    return (
     <header>
          <span className="welcome">
          <Button ><Link to="/home">홈</Link></Button>
          <Button ><Link to="/sign-in">로그아웃</Link></Button>
          </span>
      </header>
    );
  }
}

export default Header;

