import React from 'react'

import { useSelector } from 'react-redux'

import CardTool from './shared/CardTools'

function ToolsList() {

    const tools = useSelector(state => state.toolsState.tools)
    console.log(tools)

    return(
        <>
            <CardTool />
            <CardTool />
            <CardTool />
        </>
    )
}

export default ToolsList