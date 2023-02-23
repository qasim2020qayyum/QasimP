import React from 'react'
import Typical from 'react-typical'


const Profile = () => {
    return (
        <>
            <div className='profile-container'>
                <div className='profile-parent'>
                    <div className='profile-details'>
                        <div className='colz'>
                            <div className='colz-icon'>
                            <a href='#'>
                                <i className='bi bi-facebook'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus'></i>

                            </a>
                            <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a>
                            </div>

                        </div>
                        <div className='profile-details-name'>
                            <span className='primary-text'>
                                Hello I am <span className='highlighted-text'>Qasim portfolio after build change</span>
                            </span>

                        </div>
                        <div className='profile-details-role'>
                            <span className='primary-text'>
                                <h1>
                                    <Typical
                                        loop={Infinity}
                                        steps={[
                                            "Mern stack Developer",
                                            3000,
                                            "Full stack Web Developer",
                                            3000,
                                            "AWS certified Solution Architect",
                                            3000,
                                            "Software Engineer",
                                            3000,
                                        ]}
                                    />

                                </h1>
                                <span className='profile-role-tagline'>Can build applications with frontend and backend operations.</span>

                            </span>

                        </div>
                        <div className='profile-options'>
                            <button className='btn primary-btn'>
                                Hire Me
                            </button>
                            <a href='qasimResume.pdf' download="Qasim Qayyum Resume.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='profile-picture'>
                        <div className='profile-picture-background'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
