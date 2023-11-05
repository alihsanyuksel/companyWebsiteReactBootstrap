import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';

export default function AppFooter () {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400){
                setShowTopBtn(true);
            }else {
                setShowTopBtn(false);
            }
        })
    }, [])

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <Container fluid>
            <div className='copyright'>&copy; 2023 corporate.All right reserved.</div>
            <div className='socials'>
                <ul>
                    <li>
                        <a href="https://wwww.facebook.com"><i className='fab fa-facebook-f'></i></a>
                    </li>
                    <li>
                        <a href="https://wwww.facebook.com"><i className='fab fa-facebook-f'></i></a>
                       
                    </li>
                    <li>
                        <a href="https://wwww.facebook.com"><i className='fab fa-facebook-f'></i></a>
                        
                    </li>
                </ul>
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
        </Container>
    )
}