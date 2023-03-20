import { CloseCircleOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row,Typography } from 'antd'


const { Text, Title } = Typography;

export const Desktop = () => {

  const handleNextTicket =()=>{
    console.log('siguiente ticket')
  }

  const handleExit = ()=>{
    console.log('salir')
  }
  return (
    <>
    <Row>
      <Col span={ 20 } >
        <Title>Gabriel</Title>
        <Text>Estás trabajando en el escritorio </Text>
        <Text type='success' >5</Text>
      </Col>

      <Col span={ 4 } >
        <Button
        danger={true}
        onClick={ handleExit }
        >
        <CloseCircleOutlined />
        Salir
        </Button>
      </Col>
    </Row>
    <Divider />

    <Row>
      <Col>
        <Text>Atendiendo ticket número: </Text>
        <Text 
        style={{ fontSize:30 }} 
        type='danger'
        
        >55</Text>
      </Col>
    </Row>
    <Row>
      <Col offset={ 18 } >
        <Button
        onClick={ handleNextTicket }
        type='primary'
        >
          <DoubleRightOutlined />
          Siguiente</Button>
      </Col>
    </Row>

    </>
  )
}
