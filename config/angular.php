<?php

return [
    "apps" => [
        [
            "name" => "welcome",
            "html5Mode" => true,
            "title" => "Welcome to Laravel",
            "bower" => [
                "components" => [
                    "jquery",
                    "angular",
                    "bootstrap",
                    "angular-ui-router"
                ]
            ],
            "site" => [
                "routes" => [
                    "{path?}"
                ]
            ]
        ]
    ]
];
