var React = require('react');
var {Link, IndexLink} = require('react-router'); //= var Link = require('react-router').Link;

var Nav = React.createClass({
    render: function () {
        return(
            <div>
                <h3>Et voilà la barre de navigation !</h3>
                <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Ma Météo</IndexLink>
                <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>A propos</Link>
                <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Exemples</Link>
            </div>
        );
    }
});

module.exports = Nav;