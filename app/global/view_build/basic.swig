<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>{{ title }}</title>

  {# css #}
  <link rel="stylesheet" href="/global/css/main/base_9be47ed7.css">
  {% block css %}
  {% endblock %}
</head>
<body>
  <nav class="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Jshint Config Builder</a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="{% if pageKey === 'index' %}active{% endif %}">
            <a href="#">首页</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <div class="container">
    {# body placeholder #}
    {% block body %}
    {% endblock %}
  </div>

  {# js #}
  <script src="/global/js/main/index_85bb5e8a.js"></script>
  {% block js %}
  {% endblock %}
</body>
</html>