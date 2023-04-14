import instance from "./instance";

const getAll = ()=>{
    return instance.get('/products')
}
const getId = (id)=>{
    return instance.get('/products/' + id)
}
const create = (product)=>{
    return instance.post('/products/',product)
}
const remove = (id)=>{
    return instance.delete('/products/' + id)
}
const updateProduct = (product)=>{
    return instance.patch('/products/' + product.id,product)
}
export { getAll, create, remove, updateProduct, getId}