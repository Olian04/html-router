# html-router

A router designed with simplicity in mind.

[Fiddle demo](https://jsfiddle.net/olian04/whc745aL/2/) 

[Fiddle demo (with brynja)](https://jsfiddle.net/olian04/mu5sz029/26/)

```html
<body>
  <router-view></router-view>

  <router-route path="/" redirect="/home"></router-route>

  <router-route path="/home">
    <h1>Home!</h1>
    <a href="#/login">Load Login!</a>
  </router-route>

  <router-route path="/login">
    <h1>Login!</h1>
    <a href="#/home">Load Home!</a>
  </router-route>

  <script src="https://unpkg.com/html-router"></script>
</body>
```
