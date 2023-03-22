
import { Button, Card, Col, Divider, List, Row,Tag,Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../context/socket-context/SocketContext';
import { getLast } from '../helpers';



const { Text, Title } = Typography;

export const Queue = () => {

  useHideMenu( { hide:true } );

  const [tickets, setTickets] = useState<any>();

  const { socket } = useContext( SocketContext );

  useEffect(() => {
  
    socket.on( 'ticket-assigned', ( assingedTickets:any )=>{
       setTickets( assingedTickets );
    } );
  
    return () => {
      socket.off('ticket-assigned');
    }
  }, [socket])
  
  useEffect(() => {

    getLast().then( data =>{
      setTickets( data )
    } ).catch( error => console.log(error) )
  
  }, [])
  
  return (
    <>
    <Title level={ 1 } >Atendiendo al cliente número</Title>

    <Row>
      <Col span={ 12 } >
        <List
        dataSource={ tickets && tickets.slice(0,3) }
        renderItem = { (item:any)=>(
          <List.Item>
            <Card
            style={{ width:300,marginTop:16 }}
            actions={[
              <Tag color="volcano">{ item.agente }</Tag>,
              <Tag color="volcano">Escritorio: { item.escritorio }</Tag>
            ]}
            ><Title>No. { item.number }</Title>
            </Card>
          </List.Item>
        ) } 
        />
      </Col>
    
      <Col span={ 12 } >
        <Divider  > Historial </Divider>
        <List 
        dataSource={ tickets && tickets.slice(0,3) }
        renderItem={ (item:any)=>(
          <List.Item>
            <List.Item.Meta 
            title={`Ticket No. ${ item.number }`}
            description={
              <>
                <Text type='secondary' >En el escritorio: </Text>
                <Tag color='magenta' > { item.number } </Tag>
                <Text type='secondary' >Agente: </Text>
                <Tag color='volcano' > { item.agente } </Tag>
              </>
            }
            />
          </List.Item>
        ) }
        />
      </Col>
    </Row>
    </>
  )
}
