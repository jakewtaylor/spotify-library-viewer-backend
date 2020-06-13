@extends('layouts.app')

@section('content')

@auth
<div id="app"></div>
@else
<p>login or register</p>
@endauth
@endsection