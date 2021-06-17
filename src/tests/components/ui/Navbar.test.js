import { mount } from "enzyme";
import { MemoryRouter, Router } from "react-router-dom";
import { Navbar } from '../../../components/ui/Navar';
import { AuthContext } from "../../../auth/AuthContext";
import '@testing-library/jest-dom';
import { types } from "../../../types/types";

describe('<Navbar/> test suit', () => {

    const historyMock = {
        listen: jest.fn(),
        location: {},
        push: jest.fn(),
        replace: jest.fn(),
        createHref: jest.fn()
    }

    const context = {
        user: {
            logged: true,
            name: 'Cris'
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={context}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('should the component correctly', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#userNameNav').text()).toBe('Cris');
    });


    test('should log out, clear the localstorage and go to the login', () => {
        wrapper.find('#logout').prop('onClick')();
        
        expect(context.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect( historyMock.replace ).toHaveBeenCalledWith('/login');
        
    });

});