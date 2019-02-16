# web-component-router

A router designed with simplicity in mind.

__Note:__ The name is a work in progress.

```html
<body>
  <router-view></router-view>
  
  <router-route path="/home">
    <h1>Home route!</h1>
    <button onclick="router.push('/login')">Login</button>
  </router-route>
  
  <router-route path="/" redirect="/home"></router-route>
  
  <router-route path="/login">
    <h1>Login route!</h1>
  </router-route>
</body>
```

__WIP:__ https://jsfiddle.net/046w17z2/81/
