import routeNews from "./news.route"

const route = (app) => {
    app.use('/news',routeNews)
}

export default route