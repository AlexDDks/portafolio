const controller = {
    iluminacion: (req, res) => {
        res.render('iluminacion')
    },

    audioYVideo: (req, res) => {
        res.render('audioYVideo')
    },

    construccion: (req, res) => {
        res.render('construccion')
    },

    internet: (req, res) => {
        res.render('internet')
    },

    seguridadElectronica: (req, res) => {
        res.render('seguridadElectronica')
    }
}

module.exports = controller;