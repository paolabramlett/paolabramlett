import Portfolio from '../Home/Portfolio';
import skillsImg from '../../Assets/images/skills-1.gif';
import skillsImgTwo from '../../Assets/images/skills-2.gif';
import skillsImgThree from '../../Assets/images/skills-3.gif';
import diplomaOne from '../../Assets/images/diploma-02.png';
import diplomaTwo from '../../Assets/images/diploma-01.png';
import diplomaThree from '../../Assets/images/diploma-4.png';
import diplomaFour from '../../Assets/images/diploma-5.png';
import diplomaFive from '../../Assets/images/diploma-3.png';
import diplomaSix from '../../Assets/images/diploma-6.jpeg';
import diplomaSeven from '../../Assets/images/diploma-7.jpeg';
import meNutshell from '../../Assets/images/IMG_2794 2.JPG';

const Work = () => {
    

    
    return (
        <>
        <header className="header-about">
         <h1 className="title-header">
            My Work
        </h1>
        <p className="par-header">
            Here is what I've been working on 👇😉
        </p>
    </header>
  

    <Portfolio />

   


    <section className="vision" style={{backgroundColor: '#2D2E60'}}>
       
        <h1 className="title-vision" style={{color: '#E4D2EF'}}>
            My vision
        </h1>
        <p className="par-vision" style={{color: '#E4D2EF'}}>
            I'm passionate about creating that connection with people's vision, and I'm committed to
            create bridges that will get them one step closer to seeing it become a reality, through
            providing solutions to grow and strengthen their digital presence
            to help them achieve their vision.
        </p>
       
    </section>

    <section className="resume">
        <div className="resume-img">
            <img src={meNutshell} alt="" />
        </div>
        <div className="container-resume">
        <h1 className="title" style={{color: '#7A8AD5'}}>
            Me in a Nutshell
        </h1>
        <p className="par-resume" style={{color: '#7A8AD5'}}>
            Hi! My name is Paola. I'm currently a freelance UX/Ui designer and Community Manager from 
            Mexico, with a vision of engaging in new projects also as a Project Manager.
        </p>
        <br />
        <p className="par-resume" style={{color: '#7A8AD5'}}>
            Over the las 5 years I've had the chance to work with different companies and projects 
            in Mexico and USA, providing services focused on design, photography, marketing strategies and project 
            management.
        </p>
        <br />
        <p className="par-resume" style={{color: '#7A8AD5'}}>
            Last year I wanted to take things further and I finished the Project Management Certification by Google,
            as well as the UX Design Certification
            by Google, where I completed hands-on projects and developed the portfolio you can
            see <a href="portfolio.html" style={{color: '#C17EB5'}}>right here</a>.
        </p>
        
        </div>
    </section>

    <section className="skills" style={{backgroundColor: '#E7D4EC'}}>
        <h1 className="title-skills" style={{color: '#104791'}}>
            My Skills
        </h1>
        <p className="skills-par" style={{color: '#104791', textAlign: 'center'}}>
            Here are some of the skills I've acquired in the past years, that have helped me
            provide a better service for my clients.
        </p>
        <div className="container-skills">
            <div className="container-skill">
                <h3 className="subtitle-skills" style={{color: '#104791'}}>
                    UX Desing
                </h3>
               
                <img className="img-skill" src={skillsImg} alt=""/>
            </div>
            <div className="container-skill">
                <h3 className="subtitle-skills" style={{color: '#104791'}}>
                    Ui Desing
                </h3>
                <img className="img-skill" src={skillsImgTwo} alt="" />
            </div>
            <div className="container-skill">
                <h3 className="subtitle-skills" style={{color: '#104791'}}>
                    Various Desing Tools
                </h3>
                <img className="img-skill" src={skillsImgThree} alt="" />
            </div>
        </div>
    </section>


    

    <section className="diploma d-flex align-items-center justify-content-evenly p-4" style={{backgroundColor: '#104791'}}>

        <h1 className="diploma-title">
            Here are some of my certifications
        </h1>
    
        <div id="carouselExampleCaptions" className="carousel slide w-50">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={diplomaOne} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaTwo} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaThree} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaFour} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>4th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaFive} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>5th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaSix} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>5th slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={diplomaSeven} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>5th slide label</h5>
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


    </ section>

    <div className="resume">
            <h3>
                You can Download my Resume here:
            </h3>
            <a href="./img/RESUME_2022.pdf" target="_blank" download> English Resume</a>
            <a href="./img/RESUME_2022_Esp.pdf" target="_blank" download> Currículum en Español</a>
        </div>




        </>
    )
}

export default Work;