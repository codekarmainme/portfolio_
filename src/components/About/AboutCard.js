import React from 'react'
import Card from 'react-bootstrap/Card'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify', color: '#5bf450', fontWeight:'bold'}}>
            Experienced  <span className="purple">Mobile App and Full Stack Web Developer </span>
            who has <span className="purple"> record of delivering creative, high-quality and scalable solutions for buisness.</span>
            <br />
          </p>
        </blockquote>
        <br />
        <br />

        <div style={{ textAlign: 'justify',fontSize:'1em' }}>
          I have successfully designed, developed, and deployed various mobile and web applications, following clean coding practices in a test-driven development framework. With a deep passion for and top-notch expertise in web and app development, I am well-prepared to be a valuable asset to your team.
        </div>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
