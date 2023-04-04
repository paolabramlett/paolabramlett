import caseOne from '../../Assets/images/bio-images.gif';
import caseTwo from '../../Assets/images/bio-images_1.gif';
import caseThree from '../../Assets/images/bio-images_2.gif';
import caseFour from '../../Assets/images/bio-images_3.gif';
import caseFive from '../../Assets/images/bio-images_4.gif';
import caseSix from '../../Assets/images/bio-images_5.gif';

const Portfolio = () => {
    return (
        <>
        <div className='container d-flex align-items-center'>
         <div class="container-port">
            <h2 class="title" style={{color: '#2B0D58'}}>
                Portfolio
            </h2>
            <p class="text-index" style={{color: '#2B0D58'}}>
                I'd like to share with you some of my work. I've gathered the information
                on some of the projects I've worked on as a UX/Ui designer and Social
                Media Marketing Manager.
            </p>
            </div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={caseOne} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={caseTwo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={caseThree} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={caseFour} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>4th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={caseFive} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>5th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={caseSix} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>6th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </>
    )
}

export default Portfolio;