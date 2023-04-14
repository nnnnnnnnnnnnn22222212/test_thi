import { useNavigate } from "react-router-dom"
import {useForm} from "react-hook-form"
import { Button, Form, Input } from "antd"

const AddProduct = (props) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    props.onAdd(values);
    navigate('/admin/products')
  }
  const onFinishFailed = (error: any) => {
    console.log('faile',error);
    
  }

  return (
    <div>
      <Form 
        name="basic"
        labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
      >
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
            <Button type="primary" htmlType="Thêm mới">Thêm mới</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default AddProduct