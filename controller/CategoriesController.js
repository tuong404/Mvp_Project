const Categories = require('../models/Categories');

class CategoriesController {

    show(req, res, next) {

        Categories.find({})
            // .then(projects => res.render('home', {
            //     projects: projects
            // }))
            // .catch(next)
            .then(categories => res.json(categories))
            .catch(next)
    }

}

module.exports = new CategoriesController;