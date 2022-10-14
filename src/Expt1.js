import React, { Component } from 'react';

class Expt1 extends Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {

        return (

            <div>

                <div class="Parent">
                    <div class="child1">
                        <h1 id="sample">
                            Process to Create Simple React APP
                        </h1>
                        <p>
                            It is one of the easiest ways to spin up a new React project and is an ideal choice to use for your own personal projects as well as for serious, large-scale applications.
                            <br />
                            <br />
                            There are several steps to be followed to create a react app:
                            <br />
                            <br />
                            <b>Step:1</b>
                            <div class="Block_Code">node -v</div>
                            Check for Node JS version in terminal, Whether installed properly or not
                            <br />
                            &#x2192; v16.17.0 [Successfully Installed]
                            <br />
                            <br />
                            <b>Step:2</b>
                            <br />
                            To use Create React App, we first need to open our terminal or command line on our computer.
                            <br/>
                            To create a new React project, we can use the tool npx, provided you have an npm version of at least 5.2.
                            <div class="Block_Code">npx create-react-app app_name </div>
                            Command used to create a react app 
                            <br />
                            <br />
                            Now let us see detailed information about structure of React App
                            <ul>
                                <li>
                                    <b>README.md</b> is a markdown file that includes a lot of helpful tips and links that can help you while learning to use Create React App.
                                </li>
                                <li>
                                    <b>node_modules</b> is a folder that includes all of the dependency-related code that Create React App has installed. You will never need to go into this folder.
                                </li>
                                <li>
                                    <b>package.json</b> that manages our app dependencies and what is included in our node_modules folder for our project, plus the scripts we need to run our app.
                                </li>
                                <li>
                                    <b>.gitignore</b> is a file that is used to exclude files and folders from being tracked by Git. We don't want to include large folders such as the node_modules folder
                                </li>
                                <li>
                                    <b>public</b> is a folder that we can use to store our static assets, such as images, svgs, and fonts for our React app.
                                </li>
                                <li>
                                    <b>src</b> is a folder that contains our source code. It is where all of our React-related code will live and is what we will primarily work in to build our app.
                                </li>
                            </ul>
                            <b>Step:3</b><br />
                            Once you have dragged your project into your code editor, you can open up your terminal (in VSCode, go to View &gt; Terminal).
                            <br />
                            <br />
                            <div class="Block_Code">
                                npm start
                            </div>
                            When we run our project, a new browser tab will automatically open on our computer's default browser to view our app.
                            <br />
                            The development server will start up on localhost:3000 and, right away, we can see the starting home page for our app.
                            


                        </p>
                        <img src="https://www.freecodecamp.org/news/content/images/2021/03/Screen-Shot-2021-02-03-at-8.56.40-PM.png" style={{ width: '500px', height:'400px' }} alt="output" />

                      
                    </div>
                    <div class="aside1" style={{ lineHeight:'1px' }}>
                        <p style={{fontWeight:'3px',}}>Recent posts &and;
                        </p>
                        <p style={{ fontSize: '16px', }}><a href="#">Home</a></p>
                        <p style={{ fontSize: '16px', }}><a href="#">Portfolio</a></p>
                        <p style={{ fontSize: '16px', }}><a href="#sample">Create Sample React App</a></p>
                        <p style={{ fontSize: '16px', }}><a href="#">About</a></p>
                    </div>

                </div>
            </div>
        );
    }
}
export default Expt1;