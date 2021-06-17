import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe('<PrivateRoutes/> test suit', () => {
    const props = {
        location: {
            pathname: '/marvel'
        }
    }
    Storage.prototype.setItem = jest.fn();

    test('should show the commponent if user is authenticated', () => {
        // we always need to use mount when we our  test start with a higorder component 
        // we also need MemoryRouter to test routes
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={() => <span>Logged</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
    });


    test('should not show the componen if is not auth', () => {
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={false}
                    component={() => <span>Logged</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel')
    });

});