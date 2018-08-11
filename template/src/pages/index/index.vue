<template>
  <div>
    <p>跳转倒计时：{{countDown}}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState('index', ['countDown', 'redirectURI']),
  },
  methods: {
    ...mapMutations('index', ['DECREMENT']),
    ...mapActions('index', ['initRedirectURI']),
    redirect() {
      if (this.redirectURI !== '') {
        location.href = this.redirectURI;
      } else {
        console.log('no redirectURI');
      }
    },
  },
  created() {
    this.initRedirectURI();
  },
  mounted() {
    const intervId = setInterval(() => {
      this.DECREMENT(1);
      if (this.countDown <= 0) {
        clearInterval(intervId);
        this.redirect();
      }
    }, 1000);
  },
};
</script>

<style>
</style>
