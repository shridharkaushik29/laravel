<html ng-app="<?= $app->name() ?>">
    <head>
        <?= $app->html()->responsive_meta() ?>
        <?= $app->html()->title() ?>
        <?= $app->html()->main_script() ?>
        <?= $app->bower()->tags_string() ?>
        <?= $app->asset("app.js")->tag() ?>
    </head>
    <body>
        <div ui-view></div>
    </body>
</html>