const controller = {
    index: (req, res) => {
        res.render('index')
    },

    busqueda: (req, res) => {
        res.render('busqueda')
    },

    contacto: (req, res) => {
        res.render('contacto')
    },

    quienesSomos: (req, res) => {
        res.render('quienesSomos')
    }
}

module.exports = controller;