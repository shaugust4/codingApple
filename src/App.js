/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [글제목, 글제목변경] = useState([ "남자 코트 추천", "나고야 여행지", "리액트 독학" ]);
  let [like, likePlus] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0); //글번호
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목]; // ... 사용해서 대괄호 벗기기
            copy[0] = "여자 코트 추천";
            글제목변경(copy);
          }}
        >
          글수정
        </button>
      </div>

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span onClick={() => {좋아요추가(좋아요 + 1);}}> 👍 </span>
          {좋아요}
        </h4>
        <p>11월 7일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(true);
          }}
        >
          {글제목[1]}
        </h4>
        <p>11월 2일 발행</p>
      </div>

      <div className="list">
        <h4 onClick={() => {setModal(true)}}>{글제목[2]}</h4>
        <p>11월 8일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        // a : 글제목 배열 안의 갯수 만큼 반복, i : 반복할 때마다 0부터 1씩 증가하는 정수
        return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(true); setTitle(i)}}>
              {a}
              <span 
              onClick={(e) => {e.stopPropagation(); 
              let copyLike = [...like]; // []로 배열의 대괄호를 벗긴 상태로 'like'라는 배열을 복사하기
              copyLike[i]++; // 클릭 시 좋아요 수가 1씩 추가
              likePlus(copyLike) //'좋아요추가'라는 함수를 실행하여, 아래 {like[i]}로 화면에 출력하기
              }}>👍</span>{like[i]}</h4>
            <p>11월 2일 발행</p>
          </div>
        );
      })}

      <input onChange={(e) => {입력값변경(e.target.value); console.log(입력값)}}/>
      {/* <select/> */}
      {/* <textarea/> */}

      {
        modal == true ? <Modal title={title} color='aqua' 글제목={글제목}/> : null
      }

    </div>
  );
} // 주의사항1 : map 함수는 중괄호 안에 담을 것 / 주의사항2 : 반복문으로 html 생성하면 key={html마다 다른 숫자}를 추가해야 함

function Modal(props) {
  return (
    <div className="modal" style = {{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
