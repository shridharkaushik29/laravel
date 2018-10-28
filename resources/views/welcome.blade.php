@angular(welcome)
<html>
<head>
    @title
    @favicon
    @responsive
    @include("angular::main-script")
    {!!$app->html()->google_font("Raleway")!!}
    <link href="{{$app->asset("style.css")->url()}}" rel="stylesheet"/>
</head>
<body>
<div class="pre-loader">
    <img class="logo" src="{{url("storage/angular_laravel.jpg")}}">
    <p>Loading Application</p>
</div>
</body>
<script src="{{$app->asset("runtime.js")->url()}}" async></script>
<script src="{{$app->asset("vendor.js")->url()}}" async></script>
<script src="{{$app->asset("main.js")->url()}}" async></script>
</html>
