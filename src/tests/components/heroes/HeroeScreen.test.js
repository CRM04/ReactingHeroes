import { mount } from "enzyme";
import { MemoryRouter, Route } from "react-router-dom";
import HeroesScreen from '../../../components/heroes/HeroesScreen';

describe('<HeroScreen/> test suit', () => {
    const historyMock = {
        push: jest.fn(),
        goBack: jest.fn(),
        length: 10
    }
    test('should redirect if args were not provided', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe']}>
                <HeroesScreen history={historyMock} />
            </MemoryRouter>
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('should show heroes data if heros id is provided', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route path="/heroe/:heroeId" component={HeroesScreen} />
            </MemoryRouter>
        );
        expect(wrapper.find('div.flex').exists()).toBe(true);
    });

    test('should go back using push', () => {
        historyMock.length = 1;
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route path="/heroe/:heroeId">
                    <HeroesScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).toHaveBeenCalled();
    });

    test('should go back using goBack', () => {
        historyMock.length = 3;
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman']}>
                <Route path="/heroe/:heroeId">
                    <HeroesScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect(historyMock.push).not.toHaveBeenCalled();
        expect(historyMock.goBack).toHaveBeenCalledTimes(1);
    });

    test('should redirect if heroe id is not found', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/heroe/dc-batman2123']}>
                <Route path="/heroe/:heroeId">
                    <HeroesScreen history={historyMock} />
                </Route>
            </MemoryRouter>
        );

        expect(wrapper.html()).toBe('');
    });

});