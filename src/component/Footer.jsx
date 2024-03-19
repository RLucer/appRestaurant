import React from 'react';

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          {/* <span>Get connected with us on social networks:</span> */}
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
               Antojitos 
              </h6>
              <p>
               
We are dedicated to covering the broadest flavors to make your tastes a unique and wonderful experience, book with us and come enjoy
              </p>
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>schedules </h6>
              <p>
                Monday - Saturday
              </p>
              <p>
                12:30 - 23:30
              </p>
              <p>
               Sunday
              </p>
              <p>
               12:30 - 17:00
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>RRSS</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Linkedln
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-3" />
                AV. San Pedro 9695
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@antojitos.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 562 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 562 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href='https://github.com/RLucer'>
            Ricardo_Lucero
        </a>
      </div>
    </MDBFooter>
  );
}