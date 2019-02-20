# web-component-router

A router designed with simplicity in mind where you dont have to touch any javascript if you dont want to.

__Note:__ The name is a work in progress.

```html
<body>
  <router-view></router-view>
  
  <router-route path="/home">
    <h1>Home route!</h1>
    <button onclick="routerRedirect('/login')">Login</button>
  </router-route>
  
  <router-route path="/" redirect="/home"></router-route>
  
  <router-route path="/login">
    <h1>Login route!</h1>
  </router-route>
</body>
```

__WIP:__ https://jsfiddle.net/t7fq8ejc/9/
