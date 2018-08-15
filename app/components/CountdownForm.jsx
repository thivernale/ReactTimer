var React = require('react');

var CountdownForm = React.createClass({
    onSubmit: function(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;

        if (strSeconds.match(/^\d*$/)) {
            this.refs.seconds.value = '';
            // call parent function set as prop of element
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    },
    render: function() {
        return (
            <div>
                <form ref="form" onSubmit={this.onSubmit} className="coundown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;
