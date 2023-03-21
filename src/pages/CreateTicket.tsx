import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row,Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const { Text,Title } = Typography;

export const CreateTicket = () => {


  useHideMenu( { hide:true } );
  
  const handleNewticket=()=>{
  console.log('handleNewTicket')
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
    <Row>
      <Col span={ 14 } offset={ 6 }>
      <br></br>
        <Text >
          Su número
        </Text>
        <br></br>
        <Text type='success' style={{ fontSize: 55 }} >
         55
        </Text>

      </Col>
    </Row>
    </>
  )
}
