import React from "react";

function Resume() {
    return (
        <div className="Resume">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="http://placehold.it/900x400"
                            alt=""
                        />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Resume</h1>
                        <a> Education</a>
                        <p>
                            Drexel University
                            B.Sc. in Computer Engineering
                            Minor in Data Science; Minor in Computer Science
                        </p>
                        <a> Professional Experience</a>
                        <p>
                            <a> Software Engineer </a>
                            <a> Kibo (Monetate) </a>
                            <a> Philadelphia </a>
                            <ul>● Researched and implemented a feature to speed up our evaluation by nearly 40%</ul>
                            <ul>● Lead the effort to scope out the work for upgrading the python version and worked on
                                resolve the blockers for the team</ul>
                            <ul>● Lead a project to deliver improved personalization for the clients, plan and
                                prioritize the work to deliver on time</ul>
                            <ul> ● Developed new algorithms for personalization systems, enhancing user engagement
                                and deployed trends for 500+ clients in addition to fixing high-priority bugs
                            </ul>
                            <ul>● Delivered better user experience for all 500 + clients helping in reducing the
                                time spent testing and configuring strategies
                            </ul>
                            <ul>
                                ● Served as scrum master in addition to leading agile ceremonies to
                                coordinate planning, improving processes and streamlining communication
                            </ul>
                            <ul>
                                ● Participated in planning and technical development of multiple product roadmap
                                features aimed at elevating customer UX
                            </ul>
                            <ul>
                                ● Mentored and familiarized new hires with the company’s codebase and software
                                development tools and practices
                            </ul>
                            <ul>
                                ● Won a company hackathon by creating an internal facing dashboard tool using looker
                                to give insights on the computation of
                                the personalization system
                            </ul>
                            <ul>
                                ● Analyzed large datasets across uses to create reports and dashboards for internal
                                communications purposes
                            </ul>

                        </p>
                        <p>
                            <a> Software Engineer Intern </a>
                            <a> Monetate </a>
                            <a> Philadelphia, PA </a>
                            <ul>● Worked on client facing and backend codebases to fix bugs and implement new features
                                using Python, Django, and React, serving multiple clients ranging from Adidas to
                                NewEgg</ul>
                            <ul>● Optimized data ingestion pipelines for large datasets from clients to ensure near
                                real-time updating of sales catalogs</ul>
                            <ul>● Used AWS services to maintain development environments using AWS EC2 instances and
                                S3 buckets</ul>
                            <ul>● Worked on machine learning algorithms to generate automatic image captions</ul>
                            <ul>● Streamlined internal analytics scripts detailing company metrics for internal
                                communications
                            </ul>
                        </p>

                        <p>
                            <a> Business Data Analyst Intern </a>
                            <a> ARI </a>
                            <a> Mount Laurel, NJ </a>
                            <ul>● Analyzed data to deduce task completion times in company’s IT department</ul>
                            <ul>● Applied machine learning models (LSTM algorithms using Keras) and Statistical Methods
                                to infer growth of database over varying periods of time, providing managers the
                                desired results in the form of a Python based API</ul>
                            <ul>● Improved a web app using ASPRunner to display and edit specific databases for
                                internal use to aid non-technical teams to access databases</ul>
                            <ul>● Successfully tested applications of SAP Predictive Analytics on company’s existing
                                databases to predict vehicle delivery dates</ul>
                        </p>
                        <p>
                            <a>Projects</a>

                            <p>
                                <a>Software Development </a>
                                <a> Mar.io (Sidewalk Navigation System) </a>
                                <ul>● A robot aided by ML algorithms which can be installed in autonomous
                                    systems to automatically navigate sidewalks</ul>
                                <ul>● Modified an RC car to act as a data collection system using Raspberry Pi and
                                    Python</ul>
                                <ul>● Developed Python scripts to label ~4 million frames extracted from video data
                                    using k-means segmentation through S3 buckets</ul>
                                <ul>● Trained a Convolutional Neural Network to segment sidewalks using state of the art algorithms like Unet and Vgg19
                                </ul>
                            </p>
                        </p>

                        <p>
                            <a>Skills</a>

                            <p>
                                <ul>Programming Languages - Python, JavaScript</ul>
                                <ul>Frameworks - Django, React</ul>
                                <ul>Machine Learning Tools - Tensorflow, Scikit-Learn, Keras, Pandas, Numpy, Seaborn,
                                    Matplotlib, Open CV</ul>
                                <ul>Database Tools - MySQL, MongoDB, AWS Redshift, AWS S3, Athena, Tableau,
                                    Snowflake</ul>
                                <ul>Others - Git, GitHub, Agile Development, Excel, AWS EC</ul>
                            </p>
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;