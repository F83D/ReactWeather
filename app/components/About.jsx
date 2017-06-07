var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h3 className='text-center page-title'>A PROPOS</h3>
                <p>
                    Météo by Acoustat a été créée pour apprendre le React !
                </p>
                <p>
                    Voici la liste de quelques outils utilisés :
                </p>
                <ul>
                    <li>
                        <a href='https://facebook.github.io/react' target='_blank'>Langage React</a> : Il s'agit du framework utilisé.
                    </li>
                    <li>
                        <a href='http://openweathermap.com' target='_blank'>OpenWeatherMap</a> : Il s'agit de la base de données météo.
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = About;