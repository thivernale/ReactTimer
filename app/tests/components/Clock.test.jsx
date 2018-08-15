// install testing tools
// npm install react-addons-test-utils@0.14.6

// require libraries
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// doesn't work
//var $ = require('jQuery');
var $ = require('jquery/dist/jquery.min.js');
var TestUtils = require('react-addons-test-utils');

// require component to test
var Clock = require('Clock');

// group tests and describe them:
describe('Clock', () => {
    // test starts with it() function
    // arg #1: test description
    // arg #2: function that performs assertions
    it('sould exist', () => {
        expect(Clock).toExist();
    });

    describe('render', () => {
        it('should render clock to output', () => {
            var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
            var $el = $(ReactDOM.findDOMNode(clock));
            var actualText = $el.find('.clock-text').text();

            expect(actualText).toBe('01:02');
        });
    });

    describe('formatSeconds', () => {
        it('should format seconds', () => {
            // we need to render the component so we can access its methods and run them on it
            // pass the jsx code to render the component
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });

        it('should format seconds when min/sec < 10', () => {
            // we need to render the component so we can access its methods and run them on it
            // pass the jsx code to render the component
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
    });
});