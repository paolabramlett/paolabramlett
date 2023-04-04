
import fotoAbout from '../../Assets/images/img-about-1.png'

const Intro = () => {
    return (
        <>
         
        <section className="container-about">
            <div className="container-about-img">
                <img src={fotoAbout} alt="Paola_Bramlett" />
            </div>
            <div className="container-about-text">
            <h2 className="title" style={{color: '#2B0D58'}}>
                About Me
            </h2>
            <h3 className="subtitle" style={{color: '#2B0D58'}}>
                I'm a Freelance UX/Ui Desginer and Social Media Manager from Puerto Escondido, Mexico 🏄🇲🇽
            </h3>
            <p className="about-text" style={{color: '#2B0D58'}}>
                Over the last +6 years I've been working as a Freelance Social Media Manager, 
                working with medium-size and small companies in Oaxaca and Puerto Escondido, 
                Mexico. Over the last 3 years I've worked on a few projects as a Web Developer and UX/Ui Designer
                for clients in Mexico and in the USA. 
                A couple of years ago I wanted to take things further and I completed the Project Management Certification by Google,
                as well as the UX Design Certification
                by Google, where I completed hands-on projects and developed the portfolio you can
                see below.
            </p>
            <br/>
            <p className="about-text" style={{color: '#2B0D58'}}>
            One of the things I've focused my attention to while working with any client is, 
            connecting with their essence and their vision and using creative and analytical 
            thinking to find innovative solutions to achieve them.
            </p>
            </div>
            </section>
            
        </>
    )
}

export default Intro;