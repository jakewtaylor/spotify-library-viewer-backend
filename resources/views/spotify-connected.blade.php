@extends('layouts.app')

@section('content')
<div class="container mx-auto pt-48">
    <div class="flex flex-wrap justify-center items-center h-full">
        <div class="flex flex-col break-words bg-gray-800 rounded shadow-lg w-full max-w-sm overflow-hidden">
            <div class="font-semibold bg-purple-800 text-purple-100 py-6 px-4 mb-0">
                {{ __('Spotify connected!') }}
            </div>

            <div class="w-full p-6">
                <p class="text-sm leading-normal text-gray-300 mb-4">
                    Successfully authenticated with spotify, you should be redirected in a few seconds...
                </p>
            </div>
        </div>
    </div>
</div>

<script>
    const accessTokens = @json($accessTokens);

</script>
@endsection
