const controller = {
    login: (req, res) => {
        res.render('login')
    },

    pruebas: (req, res) => {
        res.render('pruebas')
    },

    signup: (req, res) => {
        res.render('signup')
    }

}


module.exports = controller;