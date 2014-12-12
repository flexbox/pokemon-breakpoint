activate :livereload
activate :gzip
activate :directory_indexes

set :js_dir, 'assets/javascripts'
set :css_dir, 'assets/stylesheets'
set :images_dir, 'assets/images'

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash

  activate :relative_assets
  set :relative_links, false

end
