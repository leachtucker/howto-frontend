import React from 'react';
import styled from 'styled-components';

import breakpoint from './commons/breakpoints';

const Wrapper = styled.div`
  border-bottom: 1px solid gray;
`

const PostContent = styled.div`
  display: flex;
  padding: 2rem 0;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and ${breakpoint.device.md} {
    flex-direction: column;
    align-items: center;
  }
`

const PostLeft = styled.div`
  width: 50%;
  text-align: center;
  @media only screen and ${breakpoint.device.md} {
    width: 85%;
  }
`

const PostRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and ${breakpoint.device.md} {
    width: 85%;
  }
`

const PostTitle = styled.h3`
  font-size: 2rem;
`

const Break = styled.div`
  width: 125px;
  height: 2px;
  background-color: #dddddd;
  background-image: -moz-linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
  background-image: -webkit-linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
  background-image: -ms-linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
  background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
`

const PostDetails = styled.div`
  width: 75%;
  margin: 0 auto;
  margin-top: 40px;
  text-align: left;
  background-color: #F7F7F7;
  border-radius: 0.7rem 0;
  padding: 1rem;
  h4 {
    font-size: 1.6rem;
    color: #3c3c3c;
  }
`

const PostMatieralList = styled.div`
  text-align: center;
  margin-top: 10px;
  li {
    font-size: 1.4rem;
    padding: 0.3rem;
  }
`

const PostRightStepList = styled.div`
  text-align: center;
  li {
    margin: 1rem;
  }
`

const PostBottomBar = styled.div`
  position: relative;
  width: 100%;
  height: 68px;
  margin-top: 15px;
`

const PostControlGroup = styled.div`
  background-color: #F7F7F7;
  display: inline-flex;
  justify-content: space-between;
  max-width: 300px;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  @media only screen and ${breakpoint.device.md} {
    padding: 0.6rem;
  }
  @media only screen and ${breakpoint.device.sm} {
    padding: 0.6rem .3rem;
  }
`

const Button = styled.div`
  padding: 0.2rem 1rem;
  border: none;
  outline: none;
  background-color: #f7f7f7;
  border-radius: 0.3rem;
  color: #636363;
  font-size: 1.4rem;
  &:hover {
    background-color: white;
    cursor: pointer;
    color: black;
  }
`

const PostStatsGroup = styled.div`
  display: inline-flex;
  align-items: center;
  background-color: #F7F7F7;
  padding: 1rem;
  max-width: fit-content;
  border-top-left-radius: 0.5rem;
  font-size: 1.3rem;
  font-weight: 400;
  i {
    color: #95528F;
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }
`

function Post(props) {
  console.log(props);
    return (
        <Wrapper>
            <PostContent>
              <PostLeft>
                <PostTitle>{props.post.title}</PostTitle>
                <Break style={{ margin: '0 auto', marginTop: '10px', marginBottom: '25px' }} />
                <p style={{ width: '300px', margin: '0 auto' }}>{props.post.description}</p>
                <PostDetails>
                  <h4>
                    Materials needed:
                  </h4>
                  <Break style={{ marginTop:'5px' }}/>
                  <PostMatieralList>
                    <ul>
                      {props.post.materials &&
                        props.post.materials.map(material => {
                          return <li>{material}</li>
                        })
                      }
                    </ul>
                  </PostMatieralList>
                </PostDetails>
              </PostLeft>
              <PostRight>
                <PostDetails>
                  <h4>
                    Instructions:
                  </h4>
                  <Break />
                  <PostRightStepList>
                    <ol>
                      {props.post.steps &&
                        props.post.steps.map(step => {
                          return <li>{step.stepNumber}. {step.name}</li>
                        })
                      }
                    </ol>
                  </PostRightStepList>
                  <div style={{ textAlign: 'center' }}>
                      <Button style={{ display: 'inline-block' }}>
                        <i class="fas fa-video"></i>
                      </Button>
                  </div>
                </PostDetails>
              </PostRight>
            </PostContent>
            <PostBottomBar>
              <div style={{ width: '100%', position: 'absolute', right: 0, bottom: 0, display: 'flex', justifyContent: 'space-between', alignContent: 'center', maxHeight: '100%' }}>
                <div style={{ width: '33%' }}></div>
                <div style={{ width: '33%', textAlign: 'center' }}>
                  <PostControlGroup>
                    <Button>
                      <i class="fas fa-heart"></i>
                    </Button>
                    <Button>
                      <i class="fas fa-heart-broken"></i>
                    </Button>
                    <Button>
                      <i class="fas fa-share"></i>
                    </Button>
                  </PostControlGroup>
                </div>
                <div style={{ width: '33%', display: 'flex', justifyContent: 'flex-end' }}>
                  <PostStatsGroup>
                      <span><i class="fas fa-heart"></i>6000</span>
                  </PostStatsGroup>
                </div>
              </div>
            </PostBottomBar>
          </Wrapper>
    )
}

export default Post;
