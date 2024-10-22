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
<body class="font-sans antialiased">
    @inertia
</body>
</html>
<style>
    body {
        background-image: url("storage/logos/bg.png");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100vh;
        position: absolute;
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
