import React from 'react'
import {Button, Space, Table } from 'antd'
import { Link} from 'react-router-dom'
import {ColumnsType} from 'antd/es/table'
const MainProduct = (props) => {
    const removeAdmin = (id) => {
        props.onRemove(id)
    }
    interface Database{
        key: string;
        price: number;
    }
    const columns: ColumnsType<Database> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (index) => <a>{index}</a>
        },
       {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
       },
       {
        title: 'CateID',
        dataIndex: 'cateId',
        key: 'cateId',
       },
       {
        title: "Action",
        key: 'action',
        render: (record) =>(
            <Space size={'middle'}>
                <Button onClick={()=>{removeAdmin(record.key)}} type="primary">remove</Button>
                <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
            </Space>
        )
        }
       
    ];
    const data = props.products.map((item =>{
        return {
            key: item.key,
            name: item.name,
            price: item.price,
            cateId: item.cateId
        }
    }))
  return <Table columns={columns} dataSource={data} pagination={{pageSize: 5}} />
}

export default MainProduct