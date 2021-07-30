<template>
  <li class="list-item" :class="[itemData.items ? 'style-none' : '']">
    <div v-if="itemData.items" key="list-item">
      <base-list :list-data="itemData"/>
    </div>
    <div v-else key="list-item" v-html="itemData">
    </div>
  </li>
</template>

<script>

export default {
  name: 'BaseListItem',
  components: {
    BaseList: () => import('@/components/BaseList')
  },
  props: ['itemData']
}
</script>

<style scoped>
.style-none{
  list-style-type: none;
}
</style>