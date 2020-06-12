@extends('layouts.app')

@section('content')
<div class="container mx-auto pt-48">
    <div class="flex flex-wrap justify-center items-center h-full">
        <div class="flex flex-col break-words bg-gray-800 rounded shadow-md w-full max-w-sm overflow-hidden">
            <div class="font-semibold bg-purple-800 text-purple-100 py-6 px-4 mb-0">
                {{ __('Register') }}
            </div>

            <form class="w-full p-6" method="POST" action="{{ route('register') }}">
                @csrf

                <div class="flex flex-wrap mb-6">
                    <label for="username" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Username') }}:
                    </label>

                    <input id="username" type="text"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('username')  border-red-500 @enderror"
                        name="username" value="{{ old('username') }}" required autocomplete="username" autofocus>

                    @error('username')
                    <p class="text-red-500 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex flex-wrap mb-6">
                    <label for="name" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Name') }}:
                    </label>

                    <input id="name" type="text"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('name')  border-red-500 @enderror"
                        name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>

                    @error('name')
                    <p class="text-red-500 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex flex-wrap mb-6">
                    <label for="email" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('E-Mail Address') }}:
                    </label>

                    <input id="email" type="email"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('email') border-red-500 @enderror"
                        name="email" value="{{ old('email') }}" required autocomplete="email">

                    @error('email')
                    <p class="text-red-500 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex flex-wrap mb-6">
                    <label for="password" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Password') }}:
                    </label>

                    <input id="password" type="password"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900 @error('password') border-red-500 @enderror"
                        name="password" required autocomplete="new-password">

                    @error('password')
                    <p class="text-red-500 text-xs italic mt-4">
                        {{ $message }}
                    </p>
                    @enderror
                </div>

                <div class="flex flex-wrap mb-6">
                    <label for="password-confirm" class="block text-gray-300 text-sm font-medium mb-2">
                        {{ __('Confirm Password') }}:
                    </label>

                    <input id="password-confirm" type="password"
                        class="form-input w-full bg-gray-600 border-2 border-gray-600 text-gray-900"
                        name="password_confirmation" required autocomplete="new-password">
                </div>

                <div class="flex flex-wrap">
                    <x-button type="submit" :block="true">
                        {{ __('Register') }}
                    </x-button>

                    <p class="w-full text-xs text-center text-gray-300 mt-8">
                        {{ __('Already have an account?') }}
                        <a class="text-purple-500 hover:text-purple-700 no-underline" href="{{ route('login') }}">
                            {{ __('Login') }}
                        </a>
                    </p>
                </div>
            </form>

        </div>
    </div>
</div>
@endsection
