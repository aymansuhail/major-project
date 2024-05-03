import { Container } from 'react-bootstrap';
import vector from '../assets/t.png';

export const Home = () => {
  return (
    <section className="home" id="home">
      <Container>
        <div className="d-flex">
          <div className="wrap-text">
            <span className="tagline"></span>
            <h1></h1>
            <a href="/classify" className="btn-success btn">
              Detect My Plant
            </a>
          </div>
        
        </div>
      </Container>
    </section>
  );
};
