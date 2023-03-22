import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row,Typography } from 'antd';
import { SocketContext } from '../context/socket-context/SocketContext';
import { useHideMenu } from '../hooks/useHideMenu';
import { useContext } from 'react';
import { Ticket } from '../interfaces/interfaces';
import { useState } from 'react';


const { Text,Title } = Typography;

export const CreateTicket = () => {

  const [ticket, setTicket] = useState<Ticket>();

  const  { socket,onLine } = useContext( SocketContext );


  useHideMenu( { hide:true } );
  
  const handleNewticket=()=>{

  socket.emit('request-ticket',null, ( ticket:Ticket ) =>{
    return setTicket(ticket);
  } )
  }

  return (
    <>
    <Row>
      <Col span={ 14 } offset={ 6 }>
        <Title>Presione para un nuevo Ticket</Title>
      <Button
      type='primary'
      icon={ <DownloadOutlined /> }
      size='large'
      onClick={ handleNewticket }
      >
        Nuevo Ticket
      </Button>
      </Col>
    </Row>
    {
      ticket && (
<Row>
      <Col span={ 14 } offset={ 6 }>
      <br></br>
        <Text >
          Su número
        </Text>
        <br></br>
        <Text type='success' style={{ fontSize: 55 }} >
         { ticket?.number }
        </Text>

      </Col>
    </Row>
      )
    }
    
    </>
  )
}
