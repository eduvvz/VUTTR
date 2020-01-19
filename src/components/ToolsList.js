import React, { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { NEED_UPDATE_LIST_TOOLS } from '../redux/actions/actionTypes'

import CardTools from './shared/CardTools'

import { getTools } from '../service/tools'

import { 
    Col,
} from 'react-bootstrap'

function ToolsList(props) {

    const { onRemoveTool } = props
    const dispatch = useDispatch()
    const [tools, setTools] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const needUpdateList = useSelector(state => state.toolsState.needUpdateList)

    useEffect(() => {
        const makeRequestTools = async () => {
          const tools = await getTools()
          setTools((t) => {
            return [...tools]
          })
          setIsLoading(false)
          dispatch({
            type: NEED_UPDATE_LIST_TOOLS,
            needUpdateList: false
          })
        }
        if (needUpdateList)
            makeRequestTools()
    }, [needUpdateList, dispatch])

    useEffect(() => {
        if(!isLoading) return
        dispatch({
            type: NEED_UPDATE_LIST_TOOLS,
            needUpdateList: true
        })
        
    }, [isLoading, dispatch])

    return(
        <>
            {tools.map((tool, i) => <CardTools onClickRemoveToolBtn={onRemoveTool}  tool={tool} key={i} />)}
            {isLoading &&
                <Col className='mt-5'>
                    <p className='text-center mt-5'>Loading...</p>
                </Col>
            }
            {!isLoading && tools.length === 0 &&
                <Col className='mt-5'>
                    <p className='text-center mt-5'>We didn't find any tools</p>
                </Col>
            }
        </>
    )
}

export default ToolsList