import Vue from 'vue'

import {
  RECEIVE_CATEGORYS,
  RECEIVE_BRAND,
  RECEIVE_HOMEPAGE,
  RECEIVE_ALLBRANDS,
} from './mutation-type'

export default {
  [RECEIVE_CATEGORYS](state,{categorys}){
    state.categorys = categorys
  }

}
