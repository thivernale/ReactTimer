// require libraries
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// doesn't work
//var $ = require('jQuery');
var $ = require('jquery/dist/jquery.min.js');
var TestUtils = require('react-addons-test-utils');

// require component to test
var Timer = require('Timer');

// group tests and describe them:
describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.handleStatusChange('started');
        expect(timer.state.count).toBe(0);

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(1);

            done();
        }, 1001);
    });

    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.setState({ count: 10 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('paused');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('paused');
            expect(timer.state.count).toBe(10);

            done();
        }, 1001);
    });

    it('should clear count on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);

        timer.setState({ count: 10 });
        timer.handleStatusChange('started');
        timer.handleStatusChange('stopped');

        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('stopped');
            expect(timer.state.count).toBe(0);

            done();
        }, 1001);
    });
});
