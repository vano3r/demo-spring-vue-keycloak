const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8082'
            },
            '/oauth2': {
                target: 'http://localhost:8082'
            },
            '/login': {
                target: 'http://localhost:8082'
            },
        }
    }
})
