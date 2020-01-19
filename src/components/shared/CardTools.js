import React from 'react'

import styled from 'styled-components'

import {
    Col,
    Badge
} from 'react-bootstrap'

const CardDiv = styled.div`
    padding: 20px 30px;
    font-family: 'Helvetica';
    width: 100%;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.13);
`

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const Title = styled.a`
    font-size: 20px;
    margin-bottom: 15px;
`

const ButtonRemove = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-radius: 7px;
    cursor: pointer;

    &:hover {
        background-color: #DCDCDC;
        transition: 0.3s;
    }
`

const BodyDiv = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
`

const TagSection = styled.div`
    display: flex;
    flex-flow: row wrap;
`

function CardTools(props) {

    const { tool, onClickRemoveToolBtn } = props

    return(
        <>
            <Col sm={12}>
                <CardDiv className='mt-4'>
                    <HeaderDiv>
                        <Title href={tool.tool_link} target='_blank'>{tool.tool}</Title>
                        <ButtonRemove onClick={() => onClickRemoveToolBtn(tool.tool, tool.id)}>
                            <img src={require('../../assets/img/close_icon.png')} className='mr-2' width='20px' alt='icon close'/>
                            <span>Remove</span>
                        </ButtonRemove>
                    </HeaderDiv>
                    <BodyDiv>
                        <p>
                            {tool.description}                    
                        </p>
                        <TagSection>
                            {tool.tags.map((tag, i) => {
                                return (
                                    <Badge pill variant="dark" className='mr-2 mb-2' key={i}>
                                        # {tag}
                                    </Badge>
                                )
                            })}
                        </TagSection>
                    </BodyDiv>
                </CardDiv>
            </Col>
        </>
    )
}

export default CardTools;