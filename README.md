# html-router

A router designed with simplicity in mind.

```html
<body>
  <router-view></router-view>

  <router-route path="/" redirect="/home"></router-route>

  <router-route path="/home">
      <h1>Home!</h1>
      <button onclick="router.push('/login')">Load Login!</button>
  </router-route>

  <router-route path="/login">
      <h1>Login!</h1>
      <button onclick="router.push('/home')">Load Home!</button>
  </router-route>

  <script src="https://unpkg.com/html-router"></script>
</body>
```
