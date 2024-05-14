import React from "react";

const Herosection = () =>{
    return(
        <div className="jumbotron ">
            <h1 className="display-4">App looks great!</h1>
            <p className="lead">
            React is one of the most popular, efficient, and powerful open-source JavaScript libraries for building dynamic and interactive user interfaces. Whether you are a beginner or an experienced developer, React Tutorial will significantly enhance your development skills. ReactJS is not a framework, it is just a library developed by Facebook.
            </p>
            <hr className="my-4" />
            <p>
            We can divide these codes and put them in custom components. Then we can utilize those components and integrate them into one place.
            </p>
            <a className="btn btn-success btn-lg" href="https://www.youtube.com/" role="button">
                React is awesome
            </a>
        </div>
    );
};

export default Herosection;