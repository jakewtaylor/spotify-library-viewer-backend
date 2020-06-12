<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    {{-- <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet"> --}}
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body class="bg-gray-900 h-screen antialiased leading-none">
    <nav class="bg-gray-800 shadow py-6">
        <div class="container mx-auto px-6 md:px-0">
            <div class="flex items-center justify-center">
                <a href="{{ url('/') }}" class="text-lg font-semibold text-gray-100 no-underline">
                    {{ config('app.name', 'Laravel') }}
                </a>

                <div class="flex-1 text-right">
                    @guest
                    <a class="no-underline hover:underline text-gray-300 text-sm p-3"
                        href="{{ route('login') }}">{{ __('Login') }}</a>
                    @if (Route::has('register'))
                    <a class="no-underline hover:underline text-gray-300 text-sm p-3"
                        href="{{ route('register') }}">{{ __('Register') }}</a>
                    @endif
                    @else
                    <span class="text-gray-300 text-sm pr-4">{{ Auth::user()->name }}</span>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="inline">
                        {{ csrf_field() }}
                        <button type="submit"
                            class="no-underline hover:underline text-gray-300 text-sm p-3">{{ __('Logout') }}</button>
                    </form>
                    @endguest
                </div>
            </div>
        </div>
    </nav>

    @yield('content')
</body>

</html>
