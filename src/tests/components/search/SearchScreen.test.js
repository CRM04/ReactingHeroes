import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

describe('<SearchScreen/> testsuit ', () => {

    test('should show the default ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen}></Route>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.bg-yellow-700').text().trim()).toBe('No heroes found');
    });


    test('should show the hero if query params is right', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=bat']}>
                <Route path="/search" component={SearchScreen}></Route>
            </MemoryRouter>
        );

        expect(wrapper.find('input').prop('value')).toBe('bat');
        expect(wrapper).toMatchSnapshot();
    });


    test('should not show the hero if query params is right', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=bat23']}>
                <Route path="/search" component={SearchScreen}></Route>
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.bg-yellow-700').text().trim()).toBe('No heroes found');
    });

    test('should submit the hero ID', () => {
        const history = {
            push: jest.fn()
        }
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={() => <SearchScreen history={history} />}></Route>
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'filter',
                value: 'batman'
            }
        });

        wrapper.find('form').simulate('submit', {
            preventDefault: () => { }
        });

        expect(history.push).toHaveBeenCalledWith('?q=batman');
    })

});