var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
//var $ = require('jquery/dist/jquery.min.js');
//or... add path to karma.conf.js and no need to require in each test file

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
    it('should exist', () => {
        expect(CountdownForm).toExist();
    });

    it('should call onSetCountdown if valid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // set value into component
        countdownForm.refs.seconds.value = '109';
        // simulate submit of form
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not call onSetCountdown if invalid seconds entered', () => {
        var spy = expect.createSpy();
        var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
        var $el = $(ReactDOM.findDOMNode(countdownForm));

        // set value into component
        countdownForm.refs.seconds.value = 'aaa109';
        // simulate submit of form
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});
