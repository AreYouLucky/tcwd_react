<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="font-sans bg-custom-radial">

    @inertia
</body>
</html>
<style>
    .bg-custom-radial {
        background: radial-gradient(125% 125% at 50% 10%, #fff 40%, rgb(0, 153, 255) 100%);
    }

    .montserrat-black-900 {
        font-family: "Montserrat", sans-serif;
        font-weight: 900;
        font-style: normal;
        font-optical-sizing: auto;
    }

    * {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
        font-size: .9rem;
    }

</style>
