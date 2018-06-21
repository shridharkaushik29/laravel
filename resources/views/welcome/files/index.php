<html ng-app="<?= $app->name() ?>">
    <head>
        <?= $app->html()->responsive_meta() ?>
        <?= $app->html()->title() ?>
        <?= $app->html()->main_script() ?>
        <?= $app->html()->google_font("Raleway:100,600") ?>
        <?= $app->assetGlobal("js/manifest.js")->tag() ?>
        <?= $app->assetGlobal("js/vendor.js")->tag() ?>"
        <?= $app->asset("app.js")->tag() ?>
    </head>
    <body>
        <div ui-view></div>
    </body>
</html>