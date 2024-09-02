# Challenge-12 (Portfolio Website)

## Introduction

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

This is a portfolio website for my personal use.

## Table of Contents

- [Required-Technologies](#required-technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippet](#code-snippet)
- [Features](#features)
- [Future-Features](#future-features)
- [License](#license)
- [Technologies](#technologies-used)
- [Credits](#credits)
- [Contact Me](#contact-me)

## Required Technologies

Nothing required to view this website!

## Installation

No need to install.

## Usage

Head to this <a href='https://joshuapruitt.netlify.app/'>link</a> to view the page. Once the page has loaded you'll be greeted with the about me page. This page contains some basic information about me.

At the top is a bar that has mutiple buttons. Clicking on a button will take you to its corresponding page.

There is a about me page, a portfolio page, a contact me page, and a resume page. Clicking on the portfolio button will take you to a page containing my projects. Hovering over a project will give you its github link and its deployed link.

The contact me page contains input boxes to contact me personally. Currently right now the boxes can be filled and the submit button can be pressed but it wont send anything anywhere.

The last page, the resume page, contains a link that can be clicked on to download my resume. The file will download but my current resume is not posted as of yet.

## Code Snippet

This code is what displays all my projects. As of right now it maps an array to the page and takes the information from each object contained within the array.

```
<div id='portfolioContiner'>
                    {projects.map((project) => (
                       <div id='projects' key={project.type}>
                        <div className='projectImg' style={{
                                        backgroundImage: `url(${project.img})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                        }}>

                        <a href={project.link}>
                            <img className='github' src={project.logo[0]} width='50' height='50'></img>
                        </a>

                        <a href={project.dep || '#none'}>
                            <img className='www' src={project.logo[1]} width='60' height='60'></img>
                        </a>
```

## Features

Features include:

- Different pages, viewable by nav bar buttons
- A contact page that checks for valid email
- A portfolio page with buttons to select project links
- A resume section with a downloadable file

## Future Features

Features that may be implemented in the future include:

- More projects displayed
- Page animations for responsiveness
- A full resume
- Working contact me section that sends messages to my email

## License

Licensed under the MIT license.

## Technologies Used

<ul>
<li>React.js for creating responsive web design.</li>
<li>Visual Studio Code (for writing code).</li>
<li>Mozila Web Docs and W3 Schools (for getting help with JavaScript).</li>
</ul>

## Credits

<ul>
<li>Joshua Pruitt (me)</li>
<li>Coding bootcamp staff (for their help with Coding)</li>
<ul>

## Contact Me

<ul>
<li>My email: joshuapruitt6484@gmail.com</li>
<li><a href=https://github.com/JoshuaPruitt>My GitHub</a></li>
<li><a href=https://www.linkedin.com/in/joshua-pruitt-1a494a311>My LinkedIn</a></li>
</ul>
