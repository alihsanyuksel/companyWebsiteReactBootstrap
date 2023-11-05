import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


export default function AppContact () {
    return (
        <section id="contact" className='block contact-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>Contact</h2>
                    <div className='subtitle'>Get contacts babes</div>
                </div>
                    <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter your full name" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="email" placeholder="Enter your email address" required/>
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="tel" placeholder="Enter your contact number" required/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control as="textarea" placeholder="Leave a comment here" required/>   
                        </Col>
                    </Row>
                    <div className='btn-holder'>
                        <Button type="submit">Submit</Button>
                    </div>
                    </Form>
            </Container>
            <div className='google-map'>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.30043115298!2d32.59795715939683!3d39.9035232979178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2sAnkara!5e0!3m2!1sen!2str!4v1699215110415!5m2!1sen!2str"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container fluid>
                <div className='contact-info'>
                    <ul>
                        <li>
                            <i className='fas fa-envelope'></i>
                            hello@domain.com
                        </li>
                        <li>
                            <i className='fas fa-phone'></i>
                            1231244 14243
                        </li>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            Ankara Türkiye
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}