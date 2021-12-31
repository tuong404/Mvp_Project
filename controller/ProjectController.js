const Project = require('../models/Project');

class ProjectController {


    // Projects
    show(req, res, next) {

        Project.find({})
            .then(projects => res.render('home', {
                projects: projects
            }))
            .catch(next)
            // .then(projects => res.json(projects))
            // .catch(next)
    }

    // Hot Project
    hotProject(req, res, next) {
        Project.find({})
            .then(projects => res.json(projects))
            .catch(next)
    }

    // Search
    search(req, res, next) {
        const contentSearch = req.query.content;

        Project.find({ name: { $regex: contentSearch, $options: '$i' } })
            .then((projects) => {
                if (projects) {
                    res.json(projects);
                } else {
                    res.send('Không tìm thấy từ khóa!!');
                }
            })
            .catch(next)
    }

    // Project detail
    detail(req, res, next) {

        Project.findById({ _id: req.params.id })
            .then(projects => res.json(projects))
            .catch(next)
    }


}

module.exports = new ProjectController;