import React from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";

function RightMenu(props) {
    const user = useSelector(state => state.user)
    const logoutHandler = () => {
        axios.get('/auth/logout').then(response => {
          if (response.status === 200) {
           props.history.push("/login");
        } else {
            alert('Log Out Failed')
          }
        });
      };
    

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">로그인</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/join">가입</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode} >
        <Menu.Item key="create">
          <a href="/video/upload">메뉴3(로그인후)</a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}>로그아웃</a>
        </Menu.Item>
        <Menu.Item key="intro">
        <a href="/profile" style={{width:'20%'}}>{localStorage.getItem("name")}님 환영합니다</a>
        </Menu.Item>
      </Menu>
    )
  }
}


export default RightMenu;
