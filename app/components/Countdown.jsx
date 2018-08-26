var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            countdownStatus: 'stopped'
        };
    },
    // component lifecycle methods
    // that gets called automatically by React
    // when component props or state are updated
    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({ count: 0 });
                // continue case
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
                default:
                    break;
            }
        }
    },
    // get automatically fired before props and state are updated
    /*componentWillUpdate: function(nextProps, nextState) {

    },*/
    // gets automatically fired by react as component gets first loaded (before it gets rendered to the screen)
    // no access to refs yet
    /*componentWillMount: function() {
        console.log('component will mount');
    },*/
    // gets automatically fired by react as component gets first loaded (after it gets rendered to the screen)
    // access to refs
    /*componentDidMount: function() {
        console.log('component did mount');
    },*/
    // gets automatically fired by react before component is removed from the DOM
    componentWillUnmount: function() {
        //console.log('component will unmount');
        // clear the timer
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer() {
        this.timer = setInterval(
            () => {
                var newCount = this.state.count - 1;
                this.setState({
                    count: newCount >= 0 ? newCount : 0
                });

                if (newCount === 0) {
                    this.setState({
                        countdownStatus: 'stopped'
                    });
                }
            },
            1000
        );
    },
    handleSetCountdown: function(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },
    handleStatusChange: function(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render: function() {
        var { count, countdownStatus } = this.state;
        var renderControlArea = () => {
            if (countdownStatus == 'stopped') {
                return <CountdownForm onSetCountdown={this.handleSetCountdown} />;
            } else {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
            }
        };
        return (
            <div>
                <h1 className="page-title">Countdown App</h1>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;
