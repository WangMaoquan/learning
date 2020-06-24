<!--
 * @Description: KamenRider
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 08:46:08
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 11:24:04
--> 
<template>
  <div>
    <h1>{{ username }}</h1>
    <h1>{{ msg }}</h1>
    <input type="text" @keydown.enter="addHero" />
    <div v-for="rider in riders" :key="rider.id" @click="handleClick(rider)">
      {{ rider.name }}
    </div>
    <p>共有{{ total }}假面骑士</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
import { KRider } from '@/interface/index';
import { getResult } from '@/api/rider';
import { getModule } from 'vuex-module-decorators';
import User from '@/store/user';
const user = getModule(User);
@Component // 这个里面可以放子组件
export default class KamenRider extends Vue {
  private riders: KRider[] = [];
  @Prop({type: String, required: true})
  private msg!: string;
  private created() {
    getResult().then((res) => {
      this.riders = res.data;
    });
  }
  private handleClick(hero: KRider) {
    alert(`我选${hero.name}`);
  }
  @Emit() // 下面的方法会成为方法名 方法的返回值 会成为传递过去的值
  private addHero(e: KeyboardEvent) {
    // 这里是keykoardEvent 类型
    const input = e.target as HTMLInputElement; // 这里的target 我们知道 所以可以断言成 HTMLInputElement
    this.riders.push({
      id: this.riders.length + 1,
      name: input.value
    });
    input.value = '';
    return this.riders[this.riders.length - 1].name;
  }
  // 这个当做计算属性
  get total() {
    return this.riders.length;
  }
  get username() {
    return user.username;
  }
}
</script>

<style lang="scss" scope></style>
