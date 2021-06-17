import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from '../../routers/AppRouter';

describe('<AppRouter/> test suit', () => {
    const context = {
        user: {
            logged: false,
        },
        dispatch: jest.fn
    }
    test('should show loginScreen if is not auth', () => {

        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should show marvel component if is auth', () => {
        const context = {
            user: {
                logged: true,
                name: 'Juan'
            },
            dispatch: jest.fn
        }
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <AppRouter />
            </AuthContext.Provider>
        );
        
        expect( wrapper.find('nav').exists()).toBe(true);
    });

})