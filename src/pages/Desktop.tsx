import { CloseCircleOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row,Typography } from 'antd'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserStorage } from '../helpers';
import { useHideMenu } from '../hooks/useHideMenu';


const { Text, Title } = Typography;

export const Desktop = () => {

  useHideMenu( { hide:false } );

  const navigate = useNavigate();

  const [user, setUser] = useState<any>( getUserStorage() );
  
  if( !user.agente || !user.escritorio ){

    return <Navigate to="get-into" replace={true} />
  }

  const handleNextTicket =()=>{
    console.log('siguiente ticket')
  }

  const handleExit = ()=>{
    console.log('entre al salir')
    localStorage.clear();
    navigate('desktop')

  }
  return (
    <>
    <Row>
      <Col span={ 20 } >
        <Title>{ user.agente }</Title>
        <Text>Estás trabajando en el escritorio </Text>
        <Text type='success' >{ user.escritorio }</Text>
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
