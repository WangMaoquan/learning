/*
 * @Description: vueconfig
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-06-24 10:09:39
 * @LastEditors: Wang
 * @LastEditTime: 2020-06-24 11:16:31
 */ 

module.exports = {
  devServer: {
    before(app) { // 模拟接口
      app.get('/api/getKamenRiderList', (req, res) => {
        res.json([
          { id: 1, name: 'Kuuga'},
          { id: 2, name: 'AgitΩ'},
          { id: 3, name: 'Ryuki'},
          { id: 4, name: 'Faiz'},
          { id: 5, name: 'Blade'},
          { id: 6, name: 'Hibiki'},
          { id: 7, name: 'Kabuto'},
          { id: 8, name: 'Den-O'},
          { id: 9, name: 'Kiva'},
          { id: 10, name: 'Decade'}
        ])
      })
    }
  }
}