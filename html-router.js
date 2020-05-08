(() => {
  const R = {
    push(path) {
      window.location.hash = '#'+path;
    },
    __routes: {},
    __routerView: null
  };

  const loadPath = path => {
    if (path in R.__routes) {
      if ('redirect' in R.__routes[path]) {
        R.push(R.__routes[path].redirect);
      } else {
        R.__routerView.innerHTML = '';
        R.__routes[path].element.hidden = false;
        R.__routerView.append(R.__routes[path].element);
      }
    } else {
      console.warn('router: Attempting to load unknown path "'+ path +'"');
    }
  }
    
  window.addEventListener('hashchange', () => {
    loadPath(window.location.hash.substr(1));
  });
    
  const currentHash = window.location.hash;
  if (currentHash === '') {
    // Redirect to index page theres no hash
    window.location.hash = '#/';
  } else {
    window.location.hash = '';
    window.location.hash = currentHash;
  }
    
  window.customElements.define('router-view', 
    class extends HTMLElement {
      connectedCallback() {
        if (R.__routerView) {
          throw new Error('router-view: There can only be one router-view.');
        }
        R.__routerView = this;
      }
    }
  );
    
  window.customElements.define('router-route', 
    class extends HTMLElement {
      constructor(...args) {
        super(...args);
        this.hidden = true;
      }
    
      connectedCallback() {
        this.prepareAttributes();
          
        const route = {
          path: this.getAttribute('path')
        };
            
        if (this.hasAttribute('redirect')) {
          route.redirect = this.getAttribute('redirect');
        } else {
          route.element = this;
        }
            
        R.__routes[route.path] = route;
      }
          
      prepareAttributes() {
        if (!this.hasAttribute('path')) {
          throw Error('router-route: Missing required attribute "path".');
        }
        if (this.hasAttribute('redirect') && this.firstChild !== null) {
          throw Error('router-route: Redirect route may not have children');
        }
      }
    }
  );
})();
