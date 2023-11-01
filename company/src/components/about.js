import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg'


export default function AppAbout () {
    const html = 80;
    const resp = 10;
    const conq = 45;
    return (
      <section id="about" className='block about-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>About Us</h2>
                <div className='subtitle'>learn more about us</div>
            </div>
            <Row>
                <Col sm={6}>
                    <Image src={img1}/>
                </Col>
                <Col sm={6}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!</p>
                    <div className='progress-block'> 
                        <h4>HTML/CSS/JAVASCRIPT</h4>
                        <ProgressBar now={html} label={`${html}%`} />
                    </div>
                    <div className='progress-block'> 
                        <h4>RESPONSIVE</h4>
                        <ProgressBar now={resp} label={`${resp}%`} />
                    </div>
                    <div className='progress-block'> 
                        <h4>CONQUER</h4>
                        <ProgressBar now={conq} label={`${conq}%`} />
                    </div>
                </Col>
            </Row>
        </Container>
      </section>
    )
}