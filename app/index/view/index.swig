{% extends "../../global/view/basic.swig" %}

{% set title = '首页' %}
{% set pageKey = 'index' %}

{% block css %}
<link rel="stylesheet" href="/index/css/main/index.css">
{% endblock %}

{% block js %}
<script src="/index/js/main/index.js"></script>
{% endblock %}

{% block body %}
hello index
{% endblock %}
