import photoBio from '../../Assets/images/bio-img.png';


const About = () => {
    return (
        <>
        <header className='header-about'>
        <h1 className="title-header">
                About Me
            </h1>
            <p className="par-header">
                Here's a little about my story
            </p>
            </ header>

    <main>
        <section className="bio" style={{backgroundColor: '#0B215B'}}>
            <div className="img-container">
                <img src={photoBio} alt="bio-img" />
            </div>
        <div className="bio-container">
            <h1 className="title-bio" style={{color: '#B4FDD9'}}>
                Short Bio
            </h1>
            <br />
            <p className="bio-text" style={{color: '#B4FDD9'}}>
                Born and bread in Puerto Escondido, Mexico. I graduated as a filmmaker in Arte7
                escuela de cine in Mexico City. I specialized in Social Media Marketing Management 
                with the SoMe Academy and a few years later I persued a certification in UX/Ui Design, 
                learnign how to Code with SheCodes: Coding workshops for women, and UX Design Certificate
                by Google. I also finished the Project Management Certificate by Google.
            </p>
            <br />
            <p className="bio-text" style={{color: '#B4FDD9'}}>
                I'm very passionate about what I do for work, but I also enjoy watching movies and 
                series in my free time, listening and making music with my guitar, reading novels on
                my kindle I take everywhere, and specially to my travels around Mexico and the world.
            </p>
            <br />
            <p className="bio-text" style={{color: '#B4FDD9'}}>
                If I think of my future, I see myself doing more of the work I've been doing so far,
                but from different parts of the world, doing all the things I love, in different cities,
                knowing new people on the way.
            </p>
        </div>
        </section>        
    </main>

   
        
        </>
    )
}

export default About;