<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>

  {# css #}
  <link rel="stylesheet" href="/global/css/main/base_de3fe2e5.css">
  {% block css %}
  {% endblock %}
</head>
<body>
  {# body placeholder #}
  {% block body %}
  {% endblock %}

  {# js #}
  <script src="/global/js/main/index_85bb5e8a.js"></script>
  {% block js %}
  {% endblock %}
</body>
</html>