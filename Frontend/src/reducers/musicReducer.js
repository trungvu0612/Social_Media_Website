import { ADD_MUSIC } from "../contexts/constants";

export const musicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_MUSIC:
            return {
                ...state,
                musics: [...state.musics, payload],
            };
        default:
            return state;
    }
};