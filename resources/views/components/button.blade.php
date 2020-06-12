@php
$class = "
align-middle text-center select-none font-bold
whitespace-no-wrap py-2 px-4 rounded text-base
leading-normal no-underline text-gray-100
bg-purple-700 hover:bg-purple-800"
. (" " .($block ? 'block w-full' : 'inline-block'))
@endphp

@if ($isAnchor())
<a href="{{ $href }}" class="{{ $class }}">
    {{ $slot }}
</a>
@else
<button type="{{ $type }}" class="{{ $class }}">
    {{ $slot }}
</button>
@endif
