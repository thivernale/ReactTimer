// require libraries
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
// doesn't work
//var $ = require('jQuery');
var $ = require('jquery/dist/jquery.min.js');
var TestUtils = require('react-addons-test-utils');

// require component to test
var Countdown = require('Countdown');

// group tests and describe them:
describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', () => {
        // done argument specifies that test will be asynchonous and mocha should wait until it is done
        it('should set state to started and countdown', (done) => {
            // render the component: pass jsx code as parameter
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            // call method on the component
            countdown.handleSetCountdown(10);

            // count and countdown status should be updated
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            // count should get updated after 1 second
            // setTimeout - functionality will be executed once after the timeout has passed
            // this is an asynchronous test and by default mocha tests do not support it
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                // specify that asynchronous test is done
                done();
            }, 1001);
        });

        it('should not set count to less than zero', (done) => {
            // render the component: pass jsx code as paramerer
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(1);

            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });

        it('should pause countdown on paused status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            // trigger paused status:
            countdown.handleStatusChange('paused');

            setTimeout(() => {
                // assert that count is still 3
                expect(countdown.state.count).toBe(3);
                // assert that countdownStatus is properly set
                expect(countdown.state.countdownStatus).toBe('paused');

                done();
            }, 1001);
        });

        it('should reset count on stopped status', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown.handleSetCountdown(3);
            // trigger stopped status:
            countdown.handleStatusChange('stopped');

            setTimeout(() => {
                // assert that count is 0
                expect(countdown.state.count).toBe(0);
                // assert that countdownStatus is properly set
                expect(countdown.state.countdownStatus).toBe('stopped');

                done();
            }, 1001);
        });
    });
});
