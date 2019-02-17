@angular("react")
{{--Used to set app name--}}
@route("react")
{{--Used to define site route name--}}
@title("Laravel React")
{{--Used to define application title--}}
@servicesRoute("services")
{{--Used to define services route, when defined a $servicesUrl variable is defined in javascript--}}
<html lang="en">
<head>
    <title>{{$app->title()}}</title>
    <base href="{{$app->url()}}/">
    <link href="{{asset("img/laravel-developer.png")}}" rel="shortcut icon"/>
    <link href="{{$app->asset("style.css")->url()}}" rel="stylesheet"/>
    @vars()
    {{--Used to print <script> tag containing javascript variables--}}
</head>
<body>
<div id="app"></div>
<div class="pre-loader" ng-if="showPreloader">
    <img class="logo" src="{{asset("storage/laravel-logo.png")}}">
    <p>Loading Application</p>
</div>
<script src="{{$app->asset("runtime.js")->url()}}" async></script>
<script src="{{$app->asset("vendor.js")->url()}}" async></script>
<script src="{{$app->asset("main.js")->url()}}" async></script>
</body>
</html>
