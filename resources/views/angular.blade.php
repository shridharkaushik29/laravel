@angular("angular")
@route("react")
@title("Laravel Angular")
@servicesRoute("services")
<html lang="en">
<head>
    <title>{{$app->title()}}</title>
    <base href="{{$app->url()}}/">
    <link href="{{asset("img/laravel-developer.png")}}" rel="shortcut icon"/>
    <link href="{{$app->asset("style.css")->url()}}" rel="stylesheet"/>
    @vars()
</head>
<body>
<div id="app"></div>
<div class="pre-loader">
    <img class="logo" src="{{asset("storage/laravel-logo.png")}}">
    <p>Loading Application</p>
</div>
<script src="{{$app->asset("runtime.js")->url()}}" async></script>
<script src="{{$app->asset("vendor.js")->url()}}" async></script>
<script src="{{$app->asset("main.js")->url()}}" async></script>
</body>
</html>
