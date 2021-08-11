<template>
  <div>
    <h1 v-text="header"></h1>
    <div v-for="(list, idx) in listArray" :key="idx">
      <base-list :list-data="list"></base-list>
    </div>
  </div>
</template>

<script>
import {GIT_CONTENT} from "@/content/git_content";

export default {
  components: {
    BaseList: () => import('@/components/BaseList')
  },
  data(){
    return{
      listArray: GIT_CONTENT.lists,
      header: GIT_CONTENT.header,
    }
  }
}
</script>