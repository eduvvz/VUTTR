import React, { useEffect, useState } from 'react'

import CardTools from './shared/CardTools'

import { getTools } from '../service/tools'

import { 
    Col,
} from 'react-bootstrap'

function ToolsList() {

    const [tools, setTools] = useState([])

    useEffect(() => {
        const makeRequestTools = async () => {
          const tools = await getTools()
          setTools((t) => {
            return [...t, ...tools]
          })
        }
    
        makeRequestTools();
    }, [])

    return(
        <>
            {tools.map((tool, i) => <CardTools tool={tool} key={i} />)}
            {tools.length === 0 &&
                <Col className='mt-5'>
                    <p className='text-center mt-5'>We didn't find any tools</p>
                </Col>
            }
        </>
    )
}

export default ToolsList