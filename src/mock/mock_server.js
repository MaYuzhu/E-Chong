import Mock from 'mockjs'

import mockData from './data.json'

Mock.mock('/categorys',{code:0,data:mockData.categorys})
Mock.mock('/brand',{code:0,data:mockData.brand})
Mock.mock('/homepage',{code:0,data:mockData.homepage})
Mock.mock('/allbrands',{code:0,data:mockData.allbrands})
