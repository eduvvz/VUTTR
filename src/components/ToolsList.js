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
    const [renderList, setRenderList] = useState([])
    const needUpdateList = useSelector(state => state.toolsState.needUpdateList)
    const search = useSelector(state => state.toolsState.search)

    useEffect(() => {
        const makeRequestTools = () => {
          getTools('?sortBy=id&order=desc')
            .then(tools => {
                setTools(tools)
                setIsLoading(false)
                dispatch({
                    type: NEED_UPDATE_LIST_TOOLS,
                    needUpdateList: false
                })
            }).catch(error => {
                console.log(error)
                setTools([])
                setIsLoading(false)
                dispatch({
                    type: NEED_UPDATE_LIST_TOOLS,
                    needUpdateList: false
                })
            })
        }
        if (needUpdateList)
            makeRequestTools()
    }, [needUpdateList, dispatch])

    useEffect(() => {
        const filterList = () => {
            let newFilteredList = tools.filter(t => t.tags.includes(search.text.toLowerCase()))

            if (!search.onlyTags) {
                newFilteredList = [
                    ...newFilteredList,
                    ...tools.filter(t => t.tool.includes(search.text))
                ]

                newFilteredList = [
                    ...newFilteredList,
                    ...tools.filter(t => t.description.toLowerCase().includes(search.text.toLowerCase()))
                ]
            }
            
            // filtrando elementos repetidos
            newFilteredList = newFilteredList.filter((tool, index, self) => {
                return index === self.findIndex((el) => (
                    el['id'] === tool['id']
                ))
            })

            setRenderList(newFilteredList)
        }

        if(search.text.length > 0) {
            filterList()
        } else {
            setRenderList(tools)
        }
    }, [search, tools])

    useEffect(() => {
        if(!isLoading) return
        dispatch({
            type: NEED_UPDATE_LIST_TOOLS,
            needUpdateList: true
        })
        
    }, [isLoading, dispatch])

    return(
        <>
            {renderList.map((tool, i) => <CardTools onClickRemoveToolBtn={onRemoveTool}  tool={tool} key={i} />)}
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