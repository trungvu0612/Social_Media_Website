import {
    ADD_MUSIC,
    DELETE_MUSIC,
    MUSICS_LOADED_FAIL,
    MUSICS_LOADED_SUCCESS,
    MUSIC_CLICK,
    MUSIC_CLICK_HOME,
} from "../contexts/constants";

export const musicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_MUSIC:
            return {
                ...state,
                musics: [...state.musics, payload],
            };

        case MUSIC_CLICK:
            return {...state, music: payload };

        case MUSIC_CLICK_HOME:
            return {
                ...state,
                musicHome: payload,
            };

        case DELETE_MUSIC:
            return {
                ...state,
                musics: state.musics.filter((music) => music._id !== payload),
            };
        case MUSICS_LOADED_SUCCESS:
            return {
                ...state,
                musics: payload,
                musicsLoading: false,
            };

        case MUSICS_LOADED_FAIL:
            return {
                ...state,
                musics: [],
                musicsLoading: false,
            };

        default:
            return state;
    }
};