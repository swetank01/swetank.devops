import React from 'react'
import SwetankImage from '../../static/images/banner-image.jpg'

const Landing = () => {
    return(
        <div>
            <section>
                <p>
                I’m Swetank Soni, a Creative-minded
                DevOps Engineer focused on building 
                Microservice Architecture, CI/CD Pipeline &
                Automation Infrastructure Provisioning.
                </p>
            </section>
            <img src={SwetankImage} alt="Devops Person" />
        </div>
    )
}
export default Landing