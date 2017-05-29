var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        // if (this.props.etat === 1)
        // {
            return (
                <div className='text-center'>
                    <img src={'https://openweathermap.org/img/w/' + this.props.ico + '.png'}/>
                    <h4 className='text-center'>
                        Il fait {this.props.temp}°C, {this.props.description}, à {this.props.location} !
                        <br />
                        La température minimale est de {this.props.tMin}°C alors que la maximale annoncée est de {this.props.tMax}°C.
                    </h4>
                </div>
            );
        // }
        // else if (this.props.etat === -1)
        // {
        //     return (
        //         <h4>La ville renseignée n'a pas été trouvée dans l'API.</h4>
        //     );
        // }
        // else
        // {
        //     //On ne retourne rien car état initial.
        //     return (
        //         <h4></h4>
        //     );
        // }
        
    }
});

module.exports = WeatherMessage;