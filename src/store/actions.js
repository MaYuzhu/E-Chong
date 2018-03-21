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
  async getCategorys ({commit,state}) {
    const result = await reqCategorys()
    commit(RECEIVE_CATEGORYS,{categorys:result.data})
  }


}
