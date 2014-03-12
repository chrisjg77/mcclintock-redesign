

require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery/jquery-2.1.0.min'
    }
});

require(['modules/offcanvasMenu'], function() {});