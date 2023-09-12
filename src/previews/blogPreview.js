CMS.registerPreviewStyle("/../assets/css/bootstrap.min.css");
CMS.registerPreviewStyle("/../assets/css/blog-style.css");

  var PostPreview = createClass({
    render: function() {
      var entry = this.props.entry;
      var image = entry.getIn(['data', 'image']);
      var bg='';
      if(image){
       bg = this.props.getAsset(image);
      }
       
      
      return h('div', {},
        //=========header============
      h('div', {"className": "position-absolute top-0 w-100 z-index-1"},
        h('div', {"className": "container"},
          h('nav', {"className": "navbar navbar-expand-md navbar-dark"},
            h('div', {"className": "container-fluid"},
              h('a', {"className": "navbar-brand", href:"../../index.html"},
                h('img', {src:"/assets/images/brand-logo.svg"},
                )
              ),
              h('button', {"className": "navbar-toggler", type:"button", "data-bs-toggle":"collapse", "data-bs-target":"#navbarSupportedContent", "aria-controls":"navbarSupportedContent", "aria-expanded":"false", "aria-label":"Toggle navigation"},
                h('span', {"className": "navbar-toggler-icon"}," ")
              ),
              h('div', {"className": "collapse navbar-collapse ms-md-5", "id":"navbarSupportedContent"},
                h('ul', {"className": "navbar-nav me-auto mb-2 mb-md-0"},
                  h('li', {"className": "nav-item"},
                    h('a', {"className": "nav-link", "href":"../../pricing.html"},"Pricing"
                    )
                  )
                )
              )
            )
          )
        )
      ),
        //=========content===========
        h('div', {"className": "section1"},
          h('div', {"className": "container"},
            h('h1', {"className": "blog-page-header"}, entry.getIn(['data', 'title'])),
            h('div', {"className": "row"},
              h('div', {"className": "col-md-2 d-flex mb-2"}, 
                h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'category']))
              ),
              h('div', {"className": "col-md-2 d-flex mb-2"}, 
                h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'author']))
              ),
              h('div', {"className": "col-md-2 d-flex mb-2"}, 
                h('button', {"className": "blog-tab-pill"}, entry.getIn(['data', 'date']))
              ),
            ),
            h('div', {"className": "mt-5"}, 
              h('img', {src: bg.toString(), "className": "w-100"}),
            ),
            h('div', {"className": "blog-content"}, this.props.widgetFor('body')),
      )));
     
      
      
    }
  });


 
      
  CMS.registerPreviewTemplate("blog", PostPreview);