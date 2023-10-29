import React from "react";
import "./Faculty.css";

const FacultyCard = () => {
  return (
    // <div className="outer-box">
    <div className="container-fluid justify-content-center">
      <div className="row">
        <div className="card col-5 outer-box">
          <div className="heading">
            <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="">
              <h2>Suresh Purini</h2>
            </a>
            <p className="title">
              Assistant Professor
              <br />
              Ph.D.(University of Maryland, Baltimore County)
            </p>
          </div>
          <div className="image-box">
            <img src="./suresh.jpg" alt="" className="image" />
            <div className="text-box">
              <p className="description">
                <b>Research Interests : </b>
                <br />
                1. Compilers
                <br />
                2. Parallel and Distributed System
                <br />
                3. Virtualization
                <br />
                4. Cloud Computing and Complexity Theory
              </p>
            </div>
          </div>
        </div>

        <div className="card col-5 outer-box">
          <div className="heading">
            <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="">
              <h2>Venkatesh Choppella</h2>
            </a>
            <p className="title">
              Associate Professor
              <br />
              Ph.D. (Indiana University, Bloomington)
            </p>
          </div>
          <div className="image-box">
            <img src="./Venkatesh.jpg" alt="" className="image" />
            <div className="text-box">
              <p className="description">
                <b>Research Interests : </b>
                <br />
                1. Programming Languages
                <br />
                2. S/W Architectures
                <br />
                3. Formal Methods
                <br />
                4. CS Education
              </p>
            </div>
          </div>
        </div>

        <div className="card col-5 outer-box">
          <div className="heading">
            <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="">
              <h2>Vignesh Sivaraman</h2>
            </a>
            <p className="title">
              Associate Professor
              <br />
              Ph.D. (National University of Singapore, Singapore)
            </p>
          </div>
          <div className="image-box">
            <img src="./Vignesh.jpg" alt="" className="image" />
            <div className="text-box">
              <p className="description">
                <b>Research Interests : </b>
                <br />
                1. Information-centric Networks
                <br />
                2. Internet of Things
                <br />
                3. Privacy
              </p>
            </div>
          </div>
        </div>

        <div className="card col-5 outer-box">
          <div className="heading">
            <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="">
              <h2>Deepak Gangadharan</h2>
            </a>
            <p className="title">
              Associate Professor
              <br />
              Ph.D. (National University of Singapore, Singapore)
            </p>
          </div>
          <div className="image-box">
            <img src="./Deepak.jpg" alt="" className="image" />
            <div className="text-box">
              <p className="description">
                <b>Research Interests : </b>
                <br />
                1. Scalable design and Performance Analysis of Edge-based IoT
                systems
                <br />
                2. Analysis and Scheduling of Real-Time Distributed
                Systems/Cyber-Physical Systems
                <br />
                3. Hardware/Software Co-Design, Faultytolerant System Design
              </p>
            </div>
          </div>
        </div>

        <div className="card col-5 outer-box">
          <div className="heading">
            <a href="https://www.iiit.ac.in/people/faculty/psuresh/" target="">
              <h2>Tejas Bodas</h2>
            </a>
            <p className="title">
              Associate Professor
              <br />
              Ph.D (IIT Bombay)
            </p>
          </div>
          <div className="image-box">
            <img src="./Tejas.jpg" alt="" className="image" />
            <div className="text-box">
              <p className="description">
                <b>Research Interests : </b>
                <br />
                1. Stochastic modelling
                <br />
                2. Queuing theory,pricing
                <br />
                3. Game theory,mean field approximation
                <br />
                4.Markov decision processes
                <br />
                5.Reinforcement learning and Bayesian optimization
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default function Faculty() {
  return (
    <div>
      <FacultyCard />
    </div>
  );
}
