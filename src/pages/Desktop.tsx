import { CloseCircleOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Row,Typography } from 'antd'
import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getUserStorage } from '../helpers';
import { useHideMenu } from '../hooks/useHideMenu';
import { SocketContext } from '../context/socket-context/SocketContext';
import { Ticket } from '../interfaces/interfaces';


const { Text, Title } = Typography;

export const Desktop = () => {

  const { socket } = useContext( SocketContext );

  useHideMenu( { hide:false } );

  const navigate = useNavigate();

  const [user, setUser] = useState<any>( getUserStorage() );

  const [ticket, setTicket] = useState<any>( null );
  
  if( !user.agente || !user.escritorio ){

    return <Navigate to="get-into" replace={true} />
  }

  const handleNextTicket =()=>{
  

    socket.emit('next-ticket-to-work', user , ( ticket:Ticket ) => {
      setTicket( ticket )
      
    } );

  }

  const handleExit = ()=>{
  
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
{
  ticket && (
<Row>
      <Col>
        <Text>Atendiendo ticket número: </Text>
        <Text 
        style={{ fontSize:30 }} 
        type='danger'
        
        >{ ticket.number }</Text>
      </Col>
    </Row>

  )
}
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
