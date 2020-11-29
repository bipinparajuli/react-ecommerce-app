import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import {useStateValue} from '../../../container/StateProvider'




function CheckOutPage(props) {
  const [{login,addtocart}]=useStateValue()

  console.log( ' Delet' + addtocart.id)
  


    return (
        <div style={{marginTop:"20px"}}>
            <Card>
              <div style={{overflow:'hidden'}}>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle><strong>{props.title}</strong></CardTitle>
    <CardSubtitle><strong>{props.price}</strong></CardSubtitle>
    <CardText>{props.description}</CardText>
          <Button onClick={props.click}>Remove From Card</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default CheckOutPage
