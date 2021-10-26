import {
    ADD_MUSIC,
    MUSICS_LOADED_FAIL,
    MUSICS_LOADED_SUCCESS,
} from "../contexts/constants";

export const musicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_MUSIC:
            return {
                ...state,
                musics: [...state.musics, payload],
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