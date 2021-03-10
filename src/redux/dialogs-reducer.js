const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Smems'},
        {id: 2, name: 'Bled'},
        {id: 3, name: 'NoName'},
        {id: 4, name: 'Anonimus'},
        {id: 5, name: 'Snowman'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Im OK'},
        {id: 4, message: 'And you'},
        {id: 5, message: 'Im fine'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE :
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body} ]
            };

        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogsReducer;