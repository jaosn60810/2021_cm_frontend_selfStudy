<template>
  <div>
    <h1>Test01</h1>
    <div>
      <router-link :to="{ name: 'test01-info' }">Info</router-link> |
      <router-link to="/test01/img">Img</router-link>
      <div style="color: red">{{ this.$route.query.id }}</div>
    </div>

    <router-view></router-view>
  </div>
</template>
