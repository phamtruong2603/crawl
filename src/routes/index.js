import routeNews from "./news.route.js"
import routeUser from "./user.route.js"

const route = (app) => {
    app.use('/', routeUser)
    app.use('/news', routeNews)
}

export default route