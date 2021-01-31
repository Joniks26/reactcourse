let rerenderEntireTree = () => {
    console.log('state changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'HI, how are you?', likes: 12},
            {id: 2, message: "It's my first post!", likes: 111}
        ],
        newPostText: 'Введите текст'
    },
    messagesPage: {
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
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likes: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;  //observer - патерн. export in index.js, callback in state.js
}

export default state;