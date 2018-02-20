import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,Table } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import Pagination from "react-js-pagination";
import OpenBoard from '../OpenBoard';
import '../../style/home.css';


class Home extends Component {
	constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

  componentDidMount(){
    this.props.onComponentMount();
  }
 
  render() {
     var t = this.props.diaryList;
      if(t !== undefined){
            // console.log('UI::',Object.values(t)) ;
            var ov =Object.values(t);
            var mapToComponent = (data) => {
              return data.map((item, i) => {
                 return (<OpenBoard item={item} key={i} boardNum={i} />);
              });
            };
      }
    return (
      <div className="Home">
      <div className="wrap">
  		<header> 
  	       	<span className="welcome">
  	       	<span>{this.props.currentUserName} 님 </span>
  	       	<Button ><Link to="/sign-in">로그아웃</Link></Button>
  	       	</span>
  	  </header>
      <br/>
	    <section>
	       	<span className="float-clear"></span>
          <h1>These Days</h1>
			<Tabs onSelect={(index, label) => console.log(label + ' selected')}>
   				<Tab label=" 공개 일기  ">
   				 	 <Button className="open-diary-write-btn"><Link to="/write-open-diary">공개 일기 작성</Link></Button>
   				 		<Table responsive striped bordered condensed hover>
		                    <thead>
		                      <tr>
		                        <th className="index-num"></th>
		                        <th>제목</th>
		                        <th>작성자</th>
		                        <th className="hit">조회수</th>
		                        <th className="date">날짜</th>
		                      </tr>
		                    </thead>
		                    <tbody>
                        {(t !== undefined) && mapToComponent(ov)}
		                    </tbody>
       			   </Table>
			             <Pagination
				          activePage={this.state.activePage}
				          itemsCountPerPage={10}
				          totalItemsCount={350}
				          pageRangeDisplayed={5}
				          onChange={this.handlePageChange.bind(this)}
			     		 />
   				</Tab>
   				<Tab label=" 개인 일기 ">
   				 	 <Button className="my-diary-write-btn"><Link to="/write-my-diary">개인 일기 작성</Link></Button>	
   					 <Table responsive striped bordered condensed hover>
                     <thead>
                      <tr>
                        <th className="index-num"></th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th className="hit">조회수</th>
                        <th className="date">날짜</th>
                      </tr>
                    </thead>
                    <tbody>
                     <OpenBoard />
                     </tbody>
       			     </Table>

   				</Tab>
			</Tabs>

		</section>

      </div>
      </div>
    );
  }
}




export default Home;
