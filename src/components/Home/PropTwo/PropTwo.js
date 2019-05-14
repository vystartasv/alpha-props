import React from "react";
import { Link } from 'react-router-dom';
import prop2 from '../../../images/property2.jpg';

class PropTwo extends React.Component {
    render() {
        return (
            <div className="col">
            <div className="card">
              <img className="rounded mx-auto d-block" src={prop2} alt="Property 2" />
              <div className="card-body">
                <p className="card-text">
                    The attention to detail and hand selected materials are
                    inclusive of timber, natural stone and impeccable craft elements.
                </p>
              </div>
              <Link to="/">Back to home</Link>
            </div>
          </div>
        );
    }
}

export default PropTwo;