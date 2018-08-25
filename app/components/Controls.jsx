var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    // lifecycle method:
    // gets automatically fired when props get updated by react
    /*componentWillReceiveProps: function(newProps) {
        console.log('component will receive props', newProps.countdownStatus);
    },*/
    // using currying pattern:
    // function will generate and return a new function that will be called by onClick
    onStatusChange: function(newStatus) {
        // the return value is an arrow function:
        return () => {
            // what id does is call a function that gets passed down from the parent via props:
            this.props.onStatusChange(newStatus);
        };
    },
    render: function() {
        var { countdownStatus } = this.props;
        // in order to conditionally render jsx code
        // a function should be defined which returns code according to condition checks;
        // function returns either start, or stop button according to countdown status
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;
