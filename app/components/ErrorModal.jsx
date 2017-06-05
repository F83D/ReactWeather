var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Oups',
            errorMessage: '...'
        };
    },
    propTypes: {
        // title: React.PropTypes.string,
        // errorMessage: React.propTypes.string
    },
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        return (
            <div className='tiny reveal text-center' id='error-modal' data-reveal=''>
                <h4>
                    {this.props.title}
                </h4>
                <p>
                    {this.props.errorMessage}
                </p>
                <p>
                    <button className='button' data-close=''>
                        Fermer la fenêtre
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;