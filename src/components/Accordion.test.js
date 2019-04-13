import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Accordion from './Accordion';
import data from '../data/accordionTest';
import Bellow from './Bellow';

describe('Accordion component', () => {
    var component, tree;

    beforeEach(() => {
        component = renderer.create(<Accordion data={data} />);
        tree = component.toJSON();
    });

    it('SHOULD match the snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});

describe('Testing Accordion with 4 Bellows', () => {
    var component, componentInstance, bellows;

    beforeEach(() => {
        component = renderer.create(<Accordion data={data} />);
        componentInstance = component.root;
        bellows = componentInstance.findAllByType(Bellow);
    });

    it('SHOULD render four bellows', () => {
        expect(bellows.length).toEqual(4);
    });

    it('Bellows should have the correct title title = \'First Bellow, Second Below ...\'', () => {
        expect(bellows[0].props.title).toEqual('First Bellow');
        expect(bellows[1].props.title).toEqual('Second Bellow');
        expect(bellows[2].props.title).toEqual('Third Bellow');
        expect(bellows[3].props.title).toEqual('Fourth Bellow');
    });

    it('Bellows should have the correct text', () => {
        expect(bellows[0].props.text).toEqual('Hey test 1');
        expect(bellows[1].props.text).toEqual('Hey test 2');
        expect(bellows[2].props.text).toEqual('Hey test 3');
        expect(bellows[3].props.text).toEqual('Hey test 4');
    });
})
