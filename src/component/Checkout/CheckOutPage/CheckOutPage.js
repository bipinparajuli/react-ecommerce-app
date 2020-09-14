import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


function CheckOutPage({image,description,title,price}) {
    return (
        <div style={{marginTop:"20px"}}>
            <Card>
              <div style={{overflow:'hidden'}}>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        </div>
        <CardBody>
          <CardTitle><strong>{title}</strong></CardTitle>
    <CardSubtitle><strong>{price}</strong></CardSubtitle>
    <CardText>{description}</CardText>
          <Button >Remove From Card</Button>
        </CardBody>
      </Card>
        </div>
    )
}

export default CheckOutPage
