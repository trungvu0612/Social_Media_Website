import { UPDATE_USER } from "../contexts/constants";

export const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            const newUsers = state.users.map((user) =>
                user._id === payload._id ? payload : user
            );

            return {
                ...state,
                users: newUsers,
            };

        default:
            return state;
    }
};