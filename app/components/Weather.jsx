var React = require('react');

//Composants internes :
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');

//API :
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return({
            etatChargement: false //false = pas encore appelé l'API OU chargement terminé ; true = appel à l'API effectué.
        });
    },
    handleSearch: function(location) {
        debugger;
        this.setState({
            etatChargement: true //false = pas encore appelé l'API OU chargement terminé ; true = appel à l'API effectué.
        });
        var that = this; //Permet de stocker l'objet this qui n'est plus accessible dans la fonction then (succès).
        openWeatherMap.getTemp(location).then(
            function(w) {
                //SUCCES.
                that.setState({
                    location: w.name,
                    temp: w.main.temp,
                    tMin: w.main.temp_min,
                    tMax: w.main.temp_max,
                    description: w.weather[0].description,
                    ico: w.weather[0].icon,
                    erreur: null,
                    etatChargement: false //false = pas encore appelé l'API OU chargement terminé ; true = appel à l'API effectué.
                });
            },
            function(errorMessage) {
                //ERREUR.
                that.setState({
                    erreur: 'La ville ' + location + 'n\'a pas été trouvée dans l\'API OpenWeatherMap !',
                    etatChargement: false //false = pas encore appelé l'API OU chargement terminé ; true = appel à l'API effectué.
                });
                //alert(errorMessage);
            }
        );
    },
    render: function() {
        //Variables d'instance :
        var {location, temp, tMin, tMax, description, ico, etatChargement, erreur} = this.state;

        function renderMessage() {
                if (etatChargement === true)
                {
                    return(
                        <h4 className='text-center'>En cours de chargement...</h4>
                    );
                }
                else if (temp && location)
                {
                    return (
                        <WeatherMessage location={location} temp={temp} tMin={tMin} tMax={tMax} description={description} ico={ico}/>
                    );
                }
                else if(typeof erreur === 'string')
                {
                    return (
                        <ErrorModal errorMessage={erreur} />
                        //<h4 className='text-center'>La ville renseignée n'a pas été trouvée dans l'API.</h4>
                    );
                }
            }

        return (
            <div>
                <h3 className='text-center page-title'>MA METEO</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {/*<WeatherMessage location={location} temp={temp} tMin={tMin} tMax={tMax} description={description} ico={ico}/>*/}
            </div>
        );
    }
});

module.exports = Weather;