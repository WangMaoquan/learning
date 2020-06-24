import {  KRider } from '../interface/index';
import axios from 'axios';
/*
 * @Description: 获取hero数据的接口文件
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 09:53:26
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 11:23:07
 */

export function getResult() {
  return axios.get<KRider[]>('/api/getKamenRiderList');
}
