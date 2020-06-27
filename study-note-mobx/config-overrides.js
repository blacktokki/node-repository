const path = require('path');
module.exports = {
    paths: function(paths, env) {
        paths.appIndexJs = path.resolve('src/index.js')
        return paths
    }
}