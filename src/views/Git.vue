<template>
  <div>
    <h1>Git notes</h1>
    <div v-for="(list, idx) in listArray" :key="idx">
      <base-list :list-data="list"></base-list>
    </div>
  </div>
</template>

<script>
import {GIT_CONTENT} from "../../constants";
export default {
  components: {
    BaseList: () => import('@/components/BaseList')
  },
  data(){
    return{
      listArray: GIT_CONTENT.LISTS
    }
  }
}
</script>