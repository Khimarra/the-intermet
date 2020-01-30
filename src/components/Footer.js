import React from 'react'

const Footer = () => {
    return(
        <div className='footer'>
            <h3>The Inter<span>Met</span> is powered by <a className="api-link" href='https://www.metmuseum.org/blogs/now-at-the-met/2018/met-collection-api'>The Metropolitan Museum of Art Collection API</a></h3>
            <h3>© - 2020 Tara Solbrig</h3>
            <div>
                <a className="icons" href="https://www.linkedin.com/in/tarasolbrig/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a  className="icons" href="https://github.com/Khimarra">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer