let initState = {
    profile: null,
    postData: [
        {message: "Расход мужики", id: 1, likes: 4},
        {message: "Ты хорошо подумал, Калган? Или может ты отсюда на рывок надеешься?", id: 2, likes: 25},
        {message: "Ты еще сявка - с ворами водку пить!", id: 3, likes: 35},
        {message: "Ты че пялишься, Окунь, а?", id: 4, likes: 8},
    ],
    currentValue: "",
};

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addPost': {
            let obj = {
                message: state.currentValue,
                id: state.postData.length + 1,
                likes: 3
            };
            let stateCopy = {
                ...state,
                postData: [...state.postData, obj],
                currentValue: '',
            };
            return stateCopy;
        }

        case 'addCurrentPost': {
            let stateCopy = {
                ...state,
                currentValue: action.currentPost
            };
            return stateCopy;
        }
        case 'likeCounter': {
            let stateCopy = {
                ...state,
                postData: [...state.postData],
            };
            stateCopy.postData[action.id - 1].likes++;
            return stateCopy;
        }
        case 'setProfile': {
            return{
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const likePressActionCreator = (id) => {
    return {
        type: 'likeCounter',
        id: id,
    };
};

export const addPostActionCreator = () => {
    return {
        type: 'addPost',
    };
};

export const addCurrentPostActionCreator = (currentPost) => {
    return {
        type: 'addCurrentPost',
        currentPost: currentPost,
    };
};

export const setProfileActionCreator = (profile) => {
    return {
        type: 'setProfile',
        profile
    }
};

export default profileReducer;