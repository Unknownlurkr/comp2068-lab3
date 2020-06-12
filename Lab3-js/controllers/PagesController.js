const viewPath = ('pages');

exports.home = (req, res) => {
    res.render(`${viewPath}/home`, {
        pageTitle: 'Nuclear Family'
    });
};
exports.joe = (req, res) => {
    res.render(`${viewPath}/joe`, {
        pageTitle: 'Nono Joe'
    });
};

exports.dina = (req, res) => {
    res.render(`${viewPath}/dina`, {
        pageTitle: 'Nona'
    });
};