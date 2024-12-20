<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title>{{env('APP_NAME')}}</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="/path/to/material-symbols/index.css" rel="stylesheet" name="call material">
    <link rel="icon" sizes="16x16 24x24 32x32 48x48 64x64" href="images/favicon.svg">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    @if (Auth::check())
    <script>
        window.Laravel = {!!json_encode([
            'isLoggedin' => true,
            'user' => Auth::user()
        ])!!}
    </script>
    @else
        <script>
            window.Laravel = {!!json_encode([
                'isLoggedin' => false
            ])!!}
        </script>
    @endif
    <div id="app"></div>
<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>