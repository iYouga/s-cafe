<template>
  <div>
    <p v-for="p in person" class="cSDSectionOneTitle"><span>{{p.name}}</span><span>{{p.date}}</span></p>
  </div>
</template>

<script>
    export default {
      props:["person"],
        name: "change-shifts-details-sec-title",
    }
</script>

<style scoped>

</style>
