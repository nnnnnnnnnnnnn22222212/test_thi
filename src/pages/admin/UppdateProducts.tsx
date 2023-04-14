import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Form, Input  } from 'antd';


const UppdateProducts = (props) => {
    const navigate = useNavigate()
    const { id } = useParams() 
    const [product, setProduct] = useState()
    useEffect(() => {
        const currentProduct = props.products.find(product => product.id == id) 
        setProduct(currentProduct) 
    }, [props])
    useEffect(() => 
    {
      setFields()
    },[product])
    const [form] = Form.useForm();
    
    const setFields = () => {
      form.setFieldsValue({ 
          id: product?.id,
          name: product?.name,
          price: product?.price,
          cateId: product?.cateId
      })
  }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate('/admin/products')
      };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <div>
      <Form 
       form={form}
        name="basic"
        labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
      >
        <Form.Item label="" name="id" style={{display: 'none'}} rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Vui lòng không để trống tên' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Vui lòng không để trống price' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="CateID" name="cateId" rules={[{ required: true, message: 'Vui lòng không để trống cate' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">Uppdate</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UppdateProducts