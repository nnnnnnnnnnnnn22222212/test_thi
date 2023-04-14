
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { Card, Col, Row } from "antd"
const Product = (props) => {
    
    const [data,setData] = useState([]) 
    useEffect(() => {setData(props)},[props] )
  return (
    <div>
    <div>Product</div>
    <div>
        <Row gutter={100} >
            </Row>
        {props.products.map((item) =>{
            return (
                <div key={item.id}>
                    <Link to={`/products/${item.id}`}>
                    <Col span={100}>
                        <Card title={item.name} bordered={false}> 
                            <h2>Price: {item.price}</h2>
                            <h2>CanId: {item.cateId}</h2>
                        </Card>
                    </Col>
                    </Link>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Product