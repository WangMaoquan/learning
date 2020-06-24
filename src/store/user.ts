/*
 * @Description: user
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 10:44:58
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 10:56:17
 */
import { VuexModule, Module, Mutation, Action} from 'vuex-module-decorators';
import store from './index';
@Module({dynamic: true, name: 'user', store})
class User extends VuexModule {
  public username = 'joker';
  @Mutation
  public setUserName(name: string) {
    this.username = name;
  }
  @Action
  public login(name: string) {
    if (name === this.username) {
      alert('用户名正确');
    }
  }
}

export default User;
