// Selectors

export const someSelector = (state) => state.value;

// Action Types

export const Types = {
    TYPE: 'reducer/TYPE',
};

// Reducer

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.TYPE:
            return { ...state };
        default:
            return state;
    }
};

// Action Creators

export const action = (value) => ({
    type: Types.LOGIN,
    payload: { value },
});

export default reducer;
