var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// doesn't work
//var $ = require('jQuery');
var $ = require('jquery/dist/jquery.min.js');
var TestUtils = require('react-addons-test-utils');

// require component to test
var Controls = require('Controls');

// group tests and describe them:
describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started" />);
            // assert the output that is rendered to the screen
            var $el = $(ReactDOM.findDOMNode(controls));
            // jquery selector :contains
            var $pauseButton = $el.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });

        it('should render start when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused" />);
            // assert the output that is rendered to the screen
            var $el = $(ReactDOM.findDOMNode(controls));
            // jquery selector :contains
            var $startButton = $el.find('button:contains(Start)');

            expect($startButton.length).toBe(1);
        });
    });
});
