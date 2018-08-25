var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired
    },
    render: function() {
        var { countdownStatus } = this.props;
        // in order to conditionally render jsx code
        // a function should be defined which returns code according to condition checks;
        // function returns either start, or stop button according to countdown status
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary">Start</button>;
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;