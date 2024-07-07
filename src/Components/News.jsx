import { useState, useEffect } from 'react'
import TechImg from '../assets/images/tech.jpg'
import wordlImg from '../assets/images/world.jpg'
import sportsImg from '../assets/images/sports.jpg'
import scienceImg from '../assets/images/science.jpg'
import healthImg from '../assets/images/health.jpg'
import entertainmentImg from '../assets/images/entertainment.jpg'
import nationImg from '../assets/images/nation.jpg'
import noImg from '../assets/images/no-img.png'
import "./News.css"

import axios from 'axios'

const News = () => {

const [headline, setHeadline] = useState([]);
const [news, setNews] = useState([])


useEffect(() => {
    const fetchNews = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=uk&apikey=505214253320893896cba3bf0985d227`
        const response = await axios.get(url)

        const fetchedNews = response.data.articles

        setHeadline(fetchedNews[0])
        setNews(fetchedNews.slice(1,7))
        console.log(news, '6 articles');
        console.log(fetchedNews[0], 'still here');
    }
fetchNews();


    
}, [])




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
                        {headline && ( <div className="headline">
                            <img src={headline.image} alt={headline.title}  />
                            <h2 className='headline-title'>{headline.title}  </h2>
                        </div>)}
                       
                        {/* <div className="news-grid">
                            {news.map((article, index) => {
                                 <div key={index} className="news-grid-item">
                                <img src={article.image} alt={article.title} />
                                <h3>{article.title} </h3>
                            </div>
                            })} 
                            </div> */}



<div className="news-grid">
            {news.map((article, index) => (
              <div
                className="news-grid-item"
                key={index}
              >
                <img src={article.image || noImg} alt={article.title} />
                <h3>{article.title}</h3>
              </div>
            ))}
          </div>



{/*                            
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
                            </div> */}
                        
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