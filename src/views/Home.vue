<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 08:46:08
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 11:17:59
--> 
<template>
  <div class="home">
    <KamenRider msg="vue+ts" @add-hero="onAddHero"/>
  </div>
</template>

<script lang="ts">
import KamenRider from '@/components/KamenRider.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    KamenRider
  }
})
export default class ClassName extends Vue {
  private onAddHero(name: string) {
    alert(name);
  }
}
</script>
