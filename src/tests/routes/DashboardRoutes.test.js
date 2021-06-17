import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContext";

describe('<DashboardRoutes/> test suit', () => {

    test('should show the right components route', () => {
        const context = {
            user: {
                logged: true,
                name: 'Juan'
            },
            dispatch: jest.fn
        }
        const wrapper = mount(
            <AuthContext.Provider value={context}>
                <MemoryRouter>
                    <DashboardRoutes></DashboardRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("#userNameNav").text()).toBe('Juan')
    });


});