{% if theme.gitment.enable and theme.gitment.githubID and theme.gitment.repo and theme.gitment.ClientID and theme.gitment.ClientSecret %}
  <link rel="stylesheet" href="https://imsun.github.io/gitment/style/default.css">
  <script src="https://imsun.github.io/gitment/dist/gitment.browser.js"></script>
  <script>
    var gitment = new Gitment({
      id: document.location.href, 
      owner: {{theme.gitment.githubID}},
      repo: {{theme.gitment.repo}},
      oauth: {
        client_id: {{theme.gitment.ClientID}},
        client_secret: {{theme.gitment.ClientSecret}},
      },
    })
    gitment.render('container')
  </script>
{% endif %}
