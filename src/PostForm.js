import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 0 auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    background-color: #3B82F6;
    color: white;

    outline: none;
    border-radius: 0.4rem;
    padding: 0.6rem 1rem;
    border: 1px solid white;
`

const Input = styled.input`
    outline: 1px 0px 0px 0px solid black;
    padding: 0.5rem 0;
`

const DescriptionInput = styled(Input)`
    
`

function PostForm() {
    return (
        <form>
            <Wrapper>
                <div>
                    <Input type="text" placeholder="Title" required />
                    <DescriptionInput type="text" placeholder="Description" required />
                </div>
                <div>
                    <Input type="text" placeholder="Materials" required />
                    <Input type="text" placeholder="Video" />
                </div>
                <div>
                    <Button>Submit</Button>
                </div>
            </Wrapper>
        </form>
    )
}

export default PostForm;
