var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();
        //On teste si rien renseigné ou pas du texte :
        if (typeof this.refs.location.value === 'string' && this.refs.location.value.length > 0)
        {
            //On fait la mise à jour du parent :
            this.props.onSearch(this.refs.location.value);
            //On réinitialise le champ :
            this.refs.location.value = '';
        }
    },
    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Votre ville ?"/>
                <button className='button expanded' type="submit">Chercher ma météo !</button>
            </form>
        );
    }
});

module.exports = WeatherForm;