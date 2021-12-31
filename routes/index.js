const siteRouter = require('./site');
const categoriesRouter = require('./categories');
const projectRouter = require('./project');
const userRouter = require('./user');
const adminRouter = require('./admin');

function route(app) {
    app.use('/api/v1/projects', projectRouter)
    app.use('/api/v1/categories', categoriesRouter)
    app.use('/api/v1/login', userRouter)
    app.use('/api/v1/admin-page', adminRouter)
    app.use('/', siteRouter)
}

module.exports = route;