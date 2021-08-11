<template>
  <div>
    <h1 v-text="algorithmContent.header"></h1>
    <div v-for="(list, idx) in algorithmContent.lists" :key="idx">
      <base-list :list-data="list"></base-list>
    </div>
  </div>
</template>

<script>

import {ALGORITHMS_CONTENT} from "@/content/algorithm_content";

export default {
  components: {
    BaseList: () => import('@/components/BaseList')
  },
  data(){
    return{
      algorithmContent: ALGORITHMS_CONTENT
    }
  }
}
</script>