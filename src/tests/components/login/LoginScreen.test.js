const { shallow, mount } = require("enzyme");
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('<LoginScreen/> testsuit', () => {

    const historyMock = {
        replace: jest.fn()
    }

    const context = {
        logged: false,
        dispatch: jest.fn()
    }

    const fakeEvent = { preventDefault: jest.fn() };

    Storage.prototype.getItem = jest.fn();
    Storage.prototype.setItem = jest.fn();

    test('should match snapshot', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <LoginScreen history={historyMock} />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });


    test('should do the navigation', () => {
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <LoginScreen history={historyMock} />
            </AuthContext.Provider>
        );
        wrapper.find('input').simulate('change', { target: { name: 'usuario', value: 'Cristian' } });
        wrapper.find('form').simulate('submit', fakeEvent);
        expect(context.dispatch).toHaveBeenCalledWith(
            {
                type: types.login,
                payload: {
                    name: 'Cristian'
                }
            } 
        );
        expect(historyMock.replace).toHaveBeenCalled();
        expect(localStorage.getItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalled();
    });

});