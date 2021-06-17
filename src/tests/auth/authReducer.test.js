import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Test suit for authReducer', () => {

    test('should return default state', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toStrictEqual({ logged: false });
    });

    test('show auth and set the username', () => {
        const state = authReducer({ logged: false }, {
            type: types.login,
            payload: {
                name: 'Cristian'
            }
        });
        expect(state).toStrictEqual({
            name: 'Cristian',
            logged: true
        });
    });

    test('should reset the localstorage data', () => {
        const state = authReducer({ logged: true, name: 'Pedro' }, { type: types.logout });
        expect(state).toStrictEqual({ logged: false });
    });
});