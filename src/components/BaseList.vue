<template>
  <div class="list">
    <h2 v-text="listData.header"></h2>
    <ol v-if="listData.ordered" key="list" class="list__ordered">
      <base-list-item v-for="(item, idx) in listData.items" :key="idx" :item-data="item" class="list-item"/>
    </ol>
    <ul v-else key="list" class="list__unordered">
      <base-list-item  v-for="(item, idx) in listData.items" :key="idx" :item-data="item" class="list-item"/>
    </ul>
  </div>
</template>

<script>
import BaseListItem from "@/components/BaseListItem";

export default {
  name: 'BaseList',
  components: {BaseListItem},
  props: {
    listData: {
      type: Object,
      validator(value) {
        console.log('check', value )
        return value.items && Array.isArray(value.items);
      }
    },
  }
}
</script>

<style scoped>
h2 {
  color: #398666;
}
.list-items li {
  color: #2b312e;
}
ul .list-items  {
  margin: 0;
  padding: 0;
}
</style>