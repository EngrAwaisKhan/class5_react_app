import React from 'react';

const counterReducer = (state, action) => {
    switch(action){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'DEFAULT':
            return state;
    }
}

export default counterReducer;