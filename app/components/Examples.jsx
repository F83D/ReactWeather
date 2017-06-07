var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function() {
        return (
            <div>
                <h3 className='text-center page-title'>EXEMPLES</h3>
                <p>Voici quelques exemples de villes pour tester (et plein d'autres à votre guise) :</p>
                <ol>
                    <li>
                        <Link to='/?location=Saint Gely du Fesc'>Saint Gély du Fesc</Link>
                    </li>
                    <li>
                        <Link to='/?location=Dublin'>Dublin</Link>
                    </li>
                    <li>
                        <Link to='/?location=Monteux'>Monteux</Link>
                    </li>
                    <li>
                        <Link to='/?location=Maisons Alfort'>Maisons-Alfort</Link>
                    </li>
                    <li>
                        <Link to='/?location=Chasseneuil sur Bonnieure'>Chasseneuil sur Bonnieure</Link>
                    </li>
                    <li>
                        ...
                    </li>
                </ol>
            </div>
        );
    }
});

module.exports = Examples;