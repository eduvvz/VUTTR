import { 
    GET_TOOLS
} from '../actions/actionTypes';

const INITIAL_STATE = {
    tools: [
        {
            "id": "1",
            "createdAt": "2020-01-17T20:25:24.693Z",
            "tool": "tool 1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sem luctus est tincidunt tempus eu ut lacus. Nullam eros tellus, congue id sagittis eu, condimentum sit amet nulla. Maecenas tincidunt ipsum in libero tincidunt, pharetra aliquet felis elementum. Vivamus rhoncus nisl nec porttitor mollis.",
            "tags": [
                "tag 01",
                "tag 02",
                "tag 03",
                "tag 04"
            ],
            "tool_link": "https://www.sitefake1.com.br"
        },
        {
            "id": "2",
            "createdAt": "2020-01-17T10:24:17.276Z",
            "tool": "tool 2",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae sem luctus est tincidunt tempus eu ut lacus. Nullam eros tellus, congue id sagittis eu, condimentum sit amet nulla. Maecenas tincidunt ipsum in libero tincidunt, pharetra aliquet felis elementum. Vivamus rhoncus nisl nec porttitor mollis.",
            "tags": [
                "tag 01",
                "tag 02",
                "tag 03",
                "tag 04"
            ],
            "tool_link": "https://www.sitefake2.com.br"
        },
    ]
};

export const toolsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_TOOLS:
            return {
                ...state,
                tools: [...state.tools, action.tools]
            };
        default:
            return state;
    }
};