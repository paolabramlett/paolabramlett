import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='' style={{width: '100%', height: '80vh', backgroundColor: 'gray', padding: '50px'}} >
            <div className="hero-text" >
                <h1>I am Paola <br /> Bramlett</h1>
                <p>And I'm a FrontEnd Developer
                <br /> and UX/Ui Designer</p>

                <Link to={'/contact'} >
                    <button id="button-header" className="name noselect" >Contact me</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;