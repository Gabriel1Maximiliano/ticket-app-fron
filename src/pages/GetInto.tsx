
import { useNavigate } from "react-router-dom";
import { Button, Divider, Form, Input, InputNumber,Typography } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const { Text,Title } = Typography;

export const GetInto = () => {

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('desktop')
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
    <Title level={ 2 } >Ingresar</Title>
    <Text>Ingrese su nombre y número de escritorio</Text>
    <Divider />
     <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 14 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nombre del Agente"
      name="agente"
      rules={[{ required: true, message: 'Por favor ingrese su nombre!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Escritorio"
      name="escritorio"
      rules={[{ required: true, message: 'Ingrese  el número de escritorio' }]}
    >
      <InputNumber min={ 1 } max={ 99 } />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
      <Button 
      type="primary" 
      htmlType="submit"
      >
        <SaveOutlined />
        Ingresar
      </Button>
    </Form.Item>
  </Form>
    </>
   
  )
}
