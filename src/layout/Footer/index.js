
// Transform to Stateless Functional Components when finished

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './footer.css';
export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="section gray">
        <Grid className="no-pad">
          <Row>
            <Col md={6} sm={6} xs={12} >
              <p>&copy; 2016 <a href="#">Ministerul Muncii</a></p>
            </Col>
            <Col md={6} sm={6} xs={12} >

                <p className="social-media">
                  <a href="https://twitter.com" target="_blank" title="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="https://facebook.com" target="_blank" title="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="https://www.linkedin.com" target="_blank" title="linkedin"><i className="fa fa-linkedin"></i></a>
                  <a href="https://github.com/orgs/gov-ithub" target="_blank" title="github"><i className="fa fa-github"></i></a>
                </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
