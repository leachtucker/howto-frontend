import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  border-top-left-radius: 0.25em;
  border-top-right-radius: 0.25em;
  color: #636363;
  background-color: #F7F7F7;
  padding: 16px 0;
  border-bottom: 1px solid gray;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 470px;
    color: #636363;
    margin: 0 auto;
    li {
      width: 23%;
      a {
        color: #636363;
        padding: 0.8rem;
        display: block;
        border-radius: 8px;
        text-align: center;
        font-family: 'Open Sans';
        &:hover {
           /* background-color: rgba(222, 222, 222, 0.25); */
           background-color: white;
           color: black;
        }
      }
    }
  }
`

function Nav() {
    return (
        <Wrapper>
          <ul>
            <li>
              <a href="/">Feed</a>
            </li>
            <li>
              <a href="">Post</a>
            </li>
            <li>
              <a href="">Edit</a>
            </li>
            <li>
              <a href="">Logout</a>
            </li>
          </ul>
        </Wrapper>
    )
}

export default Nav;
