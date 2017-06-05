var axios = require('axios');

const APPID = '441728161cbc8d95e239f4c62512d1f0';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?cnt=1&units=metric&lang=fr&appid=' + APPID;

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location); //Permet de convertir dans le bon format notre ville.
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        
        return axios.get(requestUrl).then(
            function(res) {
                //Succès (promise).
                if (res.data.cod && res.data.message)
                {
                    //res correspond au retour de la requête, data aux données, et cod est un attribut de l'objet si on a une erreur, tout comme message. Si ces attributs n'existent pas, alors on a une ville qui est trouvée.
                    throw new Error(res.data.message);
                }
                else
                {
                    return res.data;
                }
            },
            //CORRECTION demandée à la vidéo 58, section 7
            function(res) {
                //Echec (promise).
                //CORRECTION demandée à la vidéo 58, section 7
                throw new Error(res.data.message);
            }
            // function(err) {
            //     throw new Error('Impossible de récupérer la météo à cet endroit...');
            // }
        );

    }
}