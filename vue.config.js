const path = require('path');
module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        config.resolve.alias.set('icons', path.resolve('node_modules/vue-material-design-icons'));
        svgRule.uses.clear();

        svgRule
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
};