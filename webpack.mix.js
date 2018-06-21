let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/welcome/app.js', 'assets/welcome');

mix.js('resources/assets/index.js', 'js/index.js')

        .extract([
            "jquery",
            "bootstrap",
            "angular",
            "angular-ui-router",
            "bootstrap/scss/bootstrap.scss"
        ])
