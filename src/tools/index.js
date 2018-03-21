import ajax from './ajax'

export const reqCategorys = () => ajax('/categorys')
export const reqBrand = () => ajax('/brand')
export const reqHomepage = () => ajax('/homepage')
export const reqAllbrands = () => ajax('/allbrands')
