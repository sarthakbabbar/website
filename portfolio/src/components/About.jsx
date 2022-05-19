import React from "react";
export default function About(){
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I am Sarthak
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I am a software engineer, and I like to build and learn new things. I enjoy reading books and
                        on track to read 30 books this year. I have passion for many creative things but dont spend
                        enough time on those things like photography.
                    </p>
                </div>
            </div>
        </section>
    );
}