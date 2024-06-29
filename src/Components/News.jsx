import TechImg from '../assets/images/tech.jpg'
import wordlImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import "./News.css"

const News = () => {
    return ( <div className="news-app">
                <div className="news-header">
                    <h1 className='logo'>News App</h1>
                </div>

                <div className="news-content">
                    <nav className="navbar">
                        <h1 className="nav-heading">Categories</h1>
                        <div className="categories">
                            <a href="#" className="nav-link">General</a>
                            <a href="#" className="nav-link">World</a>
                            <a href="#" className="nav-link">Business</a>
                            <a href="#" className="nav-link">Technology</a>
                            <a href="#" className="nav-link">Entertainment</a>
                            <a href="#" className="nav-link">Sports</a>
                            <a href="#" className="nav-link">Science</a>
                            <a href="#" className="nav-link">Health</a>
                            <a href="#" className="nav-link">Nation</a>
                        </div>
                    </nav>
                    <div className="news-section">
                        <div className="headline">
                            <img src={TechImg} alt="Headline Image" />
                            <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </h2>
                        </div>
                        <div className="news-grid">
                            <div className="news-grid-item">
                                <img src={sportsImg} alt="SportsImage" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                            <div className="news-grid-item">
                                <img src={scienceImg} alt="ScienceImage" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                            <div className="news-grid-item">
                                <img src={healthImg} alt="HealthImage" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                            <div className="news-grid-item">
                                <img src={entertainmentImg} alt="EntertainmentImg" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                            <div className="news-grid-item">
                                <img src={nationImg} alt="NationImg" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                            <div className="news-grid-item">
                                <img src={wordlImg} alt="WorldImg" />
                                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                            </div>
                        </div>
                    </div>

                </div>

<footer>
    <p className='copyright'>
        <span>News App</span>
    </p>
        <p>&copy;All right reserved</p>
</footer>
    </div> 
    
);
}
 
export default News;