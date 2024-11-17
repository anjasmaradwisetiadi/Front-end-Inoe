<template>
  <div>
    hasil ascjnklasj/Welcom asdadad e {{ name }}
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  beforeRouteEnter (next) {
    if (!window.Laravel.isLoggedin) {
      window.location.href = '/';
    }
    next();
  },
  data () {
    return {
      name: null
    };
  },
  created () {
    if (window.Laravel.user) {
      this.name = window.Laravel.user.name;
    }
  }
};
</script>