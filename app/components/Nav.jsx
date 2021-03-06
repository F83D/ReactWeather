var React = require('react');
var {Link, IndexLink} = require('react-router'); //= var Link = require('react-router').Link;

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        var location = this.refs.searchLocation.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0)
        {
            this.refs.searchLocation.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
            this.props.onSearch(location);
        }
    },
    render: function () {
        return(
            <div className='top-bar'>
                <div className='top-bar-left'>
                    <ul className='menu'>
                        <li className='menu-text'>
                            App Météo by Acoustat
                        </li>
                        <li>
                            <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Ma Météo</IndexLink>
                        </li>
                        <li>
                            <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>A propos</Link>
                        </li>
                        <li>
                            <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Exemples</Link>
                        </li>
                    </ul>
                </div>
                <div className='top-bar-right'>
                    <form onSubmit={this.onSearch}>
                        <ul className='menu'>
                            <li>
                                <input type='search' ref='searchLocation' placeholder="Votre ville ?"/>
                            </li>
                            <li>
                                <input type='submit' className='button' value='Rechercher' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;

// var old = {
//     <div>
//         <h3>Et voilà la barre de navigation !</h3>
//         <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Ma Météo</IndexLink>
//         <Link to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>A propos</Link>
//         <Link to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Exemples</Link>
//     </div>
// };