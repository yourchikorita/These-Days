import React, { Component } from 'react';
import {BrowserRouter as Router,  Route,  Link,Switch} from 'react-router-dom';
import { Button,form,FormControl,Table,responsive,FormGroup,ControlLabel,Jumbotron } from 'react-bootstrap';
import {Tabs, Tab} from 'react-bootstrap-tabs';
import '../style/read-open-diary.css';

class ReadOpenDiary extends Component {
  render() {
    return (
      <div className="Read-open-diary">
      <div className="wrap">
		<header>
	       	<span>악하게 살지 말자</span>
	       	<span className="welcome">
	       	<Button ><Link to="/home">홈</Link></Button>
	       	<Button ><Link to="/sign-in">로그아웃</Link></Button>
	       	</span>
	    </header>
       	<br/>

	    <section>
	       	<span className="float-clear"></span>
	    	<h1>These Days</h1>
	    	<p>	오픈 일기 </p>

	    	<h3>오늘 하루는 카페 탐방을 하였다.......</h3>
	    	<hr />
	    	<p className="written-date">2018.01.01 수 22:10:33</p>
	    	<Jumbotron className="jumbo">
	    	<p>
	    	In 1855, Whitman took out a copyright on the first edition of Leaves of Grass, which consisted of twelve untitled poems and a preface. He published the volume himself, and sent a copy to Emerson in July of 1855. Whitman released a second edition of the book in 1856, containing thirty-three poems, a letter from Emerson praising the first edition, and a long open letter by Whitman in response. During his lifetime, Whitman continued to refine the volume, publishing several more editions of the book. Noted Whitman scholar, M. Jimmie Killingsworth writes that “the ‘merge,' as Whitman conceived it, is the tendency of the individual self to overcome moral, psychological, and political boundaries. Thematically and poetically, the notion dominates the three major poems of 1855: ‘I Sing the Body Electric,' ‘The Sleepers,' and ‘Song of Myself,' all of which were ‘merged’ in the first edition under the single title Leaves of Grass but were demarcated by clear breaks in the text and the repetition of the title.”

	    	</p>
	    	</Jumbotron>
		    
		</section>
		<div className="button-box">
			<Button ><Link to="/home">수정</Link></Button>
	       	<Button ><Link to="/home">삭제</Link></Button>
	       	<Button ><Link to="/home">목록가기</Link></Button>
		</div>
 </div>
      </div>
    );
  }
}

export default ReadOpenDiary;
