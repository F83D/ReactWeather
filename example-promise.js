// function getTemp(location) {
//     return new Promise(function(resolve, reject) {
//         resolve(89);
//         reject('Ville non trouvée !');
//     });
// }

// getTemp('Londres').then(
//     function(temp) {
//         console.log("SUCCES", temp);
//     },
//     function(err) {
//         console.log("ERREUR", err);
//     }
// )

//CHALLENGE :
function addPromise(a, b) {
    //Permet d'ajouter les nombres a et b.
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number')
        {
            resolve(a+b);
        }
        else if (typeof a === 'number' && typeof b !== 'number')
        {
            reject('Le second paramètre n\'est pas un nombre !');
        }
        else if (typeof a !== 'number' && typeof b === 'number')
        {
            reject('Le premier paramètre n\'est pas un nombre !');
        }
        else
        {
            reject('Aucun des deux paramètres n\'est un nombre !');
        }
    });
}

addPromise(1,8).then(
    function(resultat) {
        console.log('SUCCES : ', resultat);
    },
    function(err) {
        console.log('ERREUR : ', err);
    }
)

addPromise('1',8).then(
    function(resultat) {
        console.log('SUCCES : ', resultat);
    },
    function(err) {
        console.log('ERREUR : ', err);
    }
)

addPromise(1,'8').then(
    function(resultat) {
        console.log('SUCCES : ', resultat);
    },
    function(err) {
        console.log('ERREUR : ', err);
    }
)

addPromise('d','s').then(
    function(resultat) {
        console.log('SUCCES : ', resultat);
    },
    function(err) {
        console.log('ERREUR : ', err);
    }
)