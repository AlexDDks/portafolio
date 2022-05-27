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
    },

    footerNav: (req, res) => {
        res.render('footerNav')
    },

    redesSociales: (req, res) => {
        res.render('redesSociales')
    }
}

module.exports = controller;