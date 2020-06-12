@extends('layouts.app')

@section('content')
<div class="container mx-auto pt-48">
    <div class="flex flex-wrap justify-center items-center h-full">
        <div class="flex flex-col break-words bg-gray-800 rounded shadow-lg w-full max-w-sm overflow-hidden">
            <div class="font-semibold bg-purple-800 text-purple-100 py-6 px-4 mb-0">
                {{ __('Login') }}
            </div>

            <form class="w-full p-6" method="POST" action="{{ route('login') }}">
                @csrf

                <div class="flex flex-wrap mb-6">
                    <label for="username" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Username') }}:
                    </label>

                    <input id="username" type="username"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('username') border-red-700 @enderror"
                        name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                    @error('username')
                    <p class="text-red-700 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex flex-wrap mb-6">
                    <label for="password" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Password') }}:
                    </label>

                    <input id="password" type="password"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('password') border-red-700 @enderror"
                        name="password" required>

                    @error('password')
                    <p class="text-red-700 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex mb-6">
                    <label class="inline-flex items-center text-sm text-gray-700" for="remember">
                        <input type="checkbox" name="remember" id="remember"
                            class="form-checkbox bg-gray-600 border-gray-900 text-purple-700"
                            {{ old('remember') ? 'checked' : '' }}>
                        <span class="ml-2 text-gray-300">{{ __('Remember Me') }}</span>
                    </label>
                </div>

                <div class="flex flex-wrap items-center">
                    <x-button type="submit">
                        {{ __('Login') }}
                    </x-button>

                    @if (Route::has('password.request'))
                    <a class="text-sm text-purple-500 hover:text-purple-700 whitespace-no-wrap no-underline ml-auto"
                        href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                    @endif

                    @if (Route::has('register'))
                    <p class="w-full text-xs text-center text-gray-300 mt-8">
                        {{ __("Don't have an account?") }}
                        <a class="text-purple-500 hover:text-purple-700 no-underline" href="{{ route('register') }}">
                            {{ __('Register') }}
                        </a>
                    </p>
                    @endif
                </div>
            </form>

        </div>
    </div>
</div>
@endsection
