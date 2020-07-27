import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-4 bg-light">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Freakstore</h5>
            <div className="">
              <div className="row">
                  <div className="col-sm">
                      <p className='text-info'>About Us</p>
                      <div className='row-sm'>
                        Our Leadership
                      </div>
                      <div className='row-sm'>
                        History
                      </div>
                      <div className='row-sm'>
                        Alliances
                      </div>
                      <div className='row-sm'>
                        Franchies
                      </div>
                   </div>
                  <div className="col-sm">
                      <p className='text-info'>Why Join</p>
                      <div className='row-sm'>
                        What to Expect
                      </div>
                      <div className='row-sm'>
                        Our Stories
                      </div>
                      <div className='row-sm'>
                        Find A Chapter
                      </div>
                      <div className='row-sm'>
                        Contact Us
                      </div>
                  </div>
                  <div className="col-sm">
                      <p className='text-info'>Services</p>
                      <div className='row-sm'>
                        Risk and Financial Advisory
                      </div>
                      <div className='row-sm'>
                        Audit and Assurance
                      </div>
                      <div className='row-sm'>
                        Consulting
                      </div>
                      <div className='row-sm'>
                        Tax
                      </div>
                   </div>
                </div>
              </div>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Wana Connect ?</h5>
            <ul>
              <li className="list-unstyled text-dark">
                <a href="#!">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gmail</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Apple</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> freakstore.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;