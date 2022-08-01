import React from 'react'
import "./Nav.css"
import rlogo from "../images/rlogo.png"
import image from "../images/code.jpg"
import instagram from "../images/instagram.png"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
function Nav() {
  return (
    <div>
        <nav className='nav'>
        <img  src={rlogo} alt="rlogo" className='nav--photo'/>

        <h1>My Skills</h1>
        </nav>
        <hr />
        <section className='section'>
            <div className='div--1'>
            <img src={image} alt='me'className='section--image' />
            <div className='section--details'>
                <div className='section-details'>
            <h>Koech Obadia</h>
            <p>Developer</p>
            <p>Let's learn react</p>
                </div>
            <div className='buttons'>
                <div className='div--content'>
                <button className='button-details' >
                    <img src={instagram} alt='' className='but--image' />
                    <h1>Instagram</h1>
                </button>
                </div>
                <div>
                <div className='div--content'>
                <button className='button-details'>
                    <img src={twitter} alt='' className='but--image' />
                    <h1>Twitter</h1>
                </button>
                </div>
                </div>
            </div>
            </div>
            </div>
        <main className='main'>
            <div className='main--div'>
                <h className="main--header">About</h>
                <p>Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram and so on!.Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.</p>
            </div>
            <div className='main--div'>
                <h className="main--header">Interests</h>
                <p>Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                Web development is a very enjoyable skills one must have to be hired by big companies like facebook, instagram, twitter and so on.
                </p>
            </div>
        </main>
            <h2 className='heading'>Contact me here for more information</h2>
        <footer className='footer'>
            <img src={facebook} alt="" className='footer--images' />
            <img src={instagram} alt=""className='footer--images' />
            <img src={twitter} alt=""  className='footer--images' />
        </footer>
        </section>
    </div>
  )
}

export default Nav