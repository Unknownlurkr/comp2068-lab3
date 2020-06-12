const { home, joe, dina } = require('../controllers/PagesController');

module.exports = router => {
    router.get('/', home);

    router.get('/joe', joe);

    router.get('/dina', dina)
}
