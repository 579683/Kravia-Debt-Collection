const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/oauth/token", {
            target: "https://kravia.eu.auth0.com",
            secure: false,
            changeOrigin: true
        })
    );
};