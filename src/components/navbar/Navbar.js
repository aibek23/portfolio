import React from 'react';
import {Offcanvas,Button} from 'react-bootstrap';

  
class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            Close:true
        };    

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
  
      }
      handleClose(){
        this.setState({ show: !this.state.show})
        console.log(this.setState.show)
      }
        handleShow() {
            this.setState({ show: !this.state.show });
            console.log(this.state.show)
        }
 
 
  render() {
    return (<>


           
        <Button variant="outline-success" onClick={this.handleShow} className="me-2">
          Search
        </Button>


      <Offcanvas show={this.state.show} onHide={this.handleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </>
    )
  }
}


export default Navbar