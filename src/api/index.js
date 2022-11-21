import request from './request'
export const sale_list = (data)=> request({
    url: 'https://open.easypnp.com/gateway/test-webapi-order/api/1/SalesOrder/GetAllSalesOrderList',
    data:data,
    method:'post'
})