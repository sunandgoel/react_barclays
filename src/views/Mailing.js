import React from "react";
import { useState } from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function User() {
    const [file, setFile] = useState("");
    return (
    <>
      <div className="content">
        <Row>
         
          <Col md="12">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Mailing List</CardTitle>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Mail Subject</label>
                        <Input
                          placeholder="Subject"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Mail Body</label>
                        <Input
                          type="textarea"
                          defaultValue="Regards Team APAC"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label >Attachment   </label> 
                        <label htmlFor="attach"> <span height="100px" className="nc-icon nc-cloud-upload-94" /> </label>
                       <Input
                          hidden
                          type="file"
                          onChange={(e) => setFile(e.target.files[0])}
                          style={{ display: "none" }}
                          id="attach"                   
                        ></Input>
                        <div className="left">
                         <img src={
                                file
                                ? URL.createObjectURL(file)
                                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            } height="200px" alt="" />
                        </div>
                        
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Melbourne, Australia"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Melbourne"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="Australia"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                  
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
