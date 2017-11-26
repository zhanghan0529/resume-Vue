<template>
  <div id='preview'>
{{count.profile}}
{{count.workhistory}}
<div v-for = 'item in count.projects'>
<div v-for = '(value,key) in item'>
  {{key}}
  {{value}}
</div>
</div>

{{count.school}}
{{count.awards}}
{{count.introduce}}
  </div>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.resume;
    }
  },
  methods: {

  }
};
</script>

<style lang='scss'>
#preview {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  flex: 1;
  animation: fade-in 0.3s;
}
</style>
