import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
 

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3> Developed by Miki shibabaw </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2023 </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/codekarmainme"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/miki-shibabaw-7b1b942a8/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
