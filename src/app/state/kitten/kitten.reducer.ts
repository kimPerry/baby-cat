import * as fromKitten from './kitten.actions';
import { Kitten } from './kitten.model';

export interface State {
    kittens: Kitten[],
    loading: boolean;
    error: string;
}

export const initialState: State = {
    kittens: [],
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromKitten.KittenActions): State {
    switch (action.type) {

        case fromKitten.GET_ALL_KITTENS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromKitten.GET_ALL_KITTENS_SUCCESS: {
            return {
                ...state,
                loading: false,
                kittens:action.payload
            };
        }

        case fromKitten.GET_ALL_KITTENS_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading kittens'
            };
        }

        case fromKitten.GET_KITTEN: {
            return {
                ...state,
                loading: true
            };
        }

        case fromKitten.GET_KITTEN_SUCCESS: {
            return {
                ...state,
                loading: false
            };
        }

        case fromKitten.GET_KITTEN_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading kitten'
            };
        }

        default: {
            return state;
        }
    }
}

export const getAllKittens = (state: State) => state.kittens;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;