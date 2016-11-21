'use strict';

module.exports = {
    systemJsConfig: './system.config.js',
    source: {
        folder: './src/SimpleApp/',
        files: {
            injectables: [
                './dist/www/scripts/vendor.min.js',
                './dist/www/scripts/system.min.js',
                './dist/www/scripts/system.setup.js',
                './dist/www/css/vendor.min.css',
                './dist/www/css/app.css',
                './dist/www/scripts/shim.min.js',
                './dist/www/scripts/zone.js',
                './dist/www/scripts/reflect.js'
            ],
            main: [
                './src/SimpleApp/index.html'
            ],
            systemSetupScript: './src/SimpleApp/system.setup.js',
            app: {
                everything: ['./src/SimpleApp/app/**/*', './src/SimpleApp/system.setup.js'],
                ts: [
                    './src/SimpleApp/app/**/*.ts'
                ],
                html: [
                    './src/SimpleApp/app/**/*.html'
                ],
                css: [

                    './src/SimpleApp/css/**/*.css'
                ],
                componentCss: [
                    './src/SimpleApp/app/**/*.css'
                ],
                assets: [
                    './src/SimpleApp/assets/**/*.*'
                ]
            },
            vendorStylesheets: [
                './src/SimpleApp/vendor/bootstrap/css/bootstrap.css',
                './src/SimpleApp/vendor/admin-lte/css/AdminLTE.css',
                './src/SimpleApp/vendor/admin-lte/css/skins/_all-skins.css',
                './src/SimpleApp/vendor/font-awesome/css/font-awesome.css',
                './src/SimpleApp/vendor/pNotify/pnotify.custom.css',
                './src/SimpleApp/vendor/leaflet-js/leaflet.css'
            ],
            vendorFonts: [
                './src/SimpleApp/vendor/font-awesome/fonts/*.*',
                './src/SimpleApp/vendor/bootstrap/fonts/*.*'
            ],
            shim: [
                './node_modules/es6-shim/es6-shim.min.js',
                './node_modules/angular2/es6/dev/src/testing/shims_for_IE.js'
            ],
            vendorJs: [
                './src/SimpleApp/vendor/hammerjs/hammer.js',
                './src/SimpleApp/vendor/jquery/jquery-2.1.4.js',
                './src/SimpleApp/vendor/jquery/jquery.hammer.js',
                './src/SimpleApp/vendor/jquery/jquery.slimscroll.js',
                './src/SimpleApp/vendor/pNotify/pnotify-adapter.js',
                './src/SimpleApp/vendor/pNotify/pnotify.custom.js',
                './src/SimpleApp/vendor/signalr/signalr.js',
                './src/SimpleApp/vendor/bootstrap/js/bootstrap.js',
                './src/SimpleApp/vendor/fastclick/fastclick.js',
                './src/SimpleApp/vendor/admin-lte/js/app.js'
            ],
            angular2rc1deps: [
                './node_modules/core-js/client/shim.min.js',
                './node_modules/zone.js/dist/zone.js',
                './node_modules/reflect-metadata/reflect.js'
            ],
            angular2: './node_modules/@angular/**/*',
            rxjs: './node_modules/rxjs/**/*',
            systemJs: './node_modules/systemjs/dist/system.src.js'
        }
    },
    ts: {
        config: './tsconfig.json'
    },
    targets: {
        systemMinJs: 'system.min.js',
        vendorMinJs: 'vendor.min.js',
        vendorMinCss: 'vendor.min.css',
        buildFolder: './dist/www',
        resourcesFolder: './resources/',
        appFolder: 'app',
        stylesFolder: 'css',
        minified: {
            js: 'app.js',
            css: 'app.css',
            templateCache: 'ng-templates.js'
        }
    }
};
