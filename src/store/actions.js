import {
  reqCategorys,
  reqBrand,
  reqHomepage,
  reqAllbrands,

} from '../tools'

import {
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS,
} from './mutation-type'

export default {
  async getCategorys ({commit,state},cb) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
    cb && cb()
  },
  async getBrand ({commit}) {
    const result = await reqBrand()
    commit(RECEIVE_BRAND,{brand:result.data})
  },
  async getAllBrand ({commit}) {
    const result = await reqAllbrands()
    commit(RECEIVE_ALLBRANDS,{allbrands:result.data})
  },
  async getHomePage ({commit},cb) {
    const result = await reqHomepage()
    commit(RECEIVE_HOMEPAGE,{homepage:result.data})
    cb && cb()
  }


}
