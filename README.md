## Overview 
This application allows you as the user to create a resume in minutes and then download it to make yourself stand out in today's job market. A few of the technologies we used were React.js (for the front end of the app), Typeform API (to embed questionnaires to get insightful user responses to generate the resume), Auth0 (for user authentication), Microsoft Power Automate for resume generation

The current job market is declining with many people in the tech industry being laid off. This sort of recession puts pressure on people, like ourselves, being recent college graduates and wanting to apply to jobs. However, we are unsure what the future may hold for ourselves and others.

Our audience are college students and recent graduates from any school/institution because we can resonate with their experiences. We wanted to build an app that would be user-friendly and efficient when creating a summary of who you are into one page, or at times two.

This app solves the issue with people not knowing where to start when wanting to sit down and create a resume for themselves. Generally, students scour the internet for the best advice to help with their resumes. However, why not automate this with a little bit of typing and a few clicks.


This project has not only taught us about the issues of employment and resumes, but also the intricacies of building an app with this sort of scale or vision. From a technical standpoint, we have become more comfortable with troubleshooting any bugs or errors, front end back end development with React.js, Auth0’s user authentication, working with different APIs and plugins to personalize your project to goals, and learning to especially take breaks and rest when needed!

Résumer differs from its competitors because it gives the user the best experience when building their resume. Instead of starting you off with a blank or prefilled template, Résumer learns who you are and tailors your resume to you based on your experiences and skills. This leaves room for you as the user to highlight things about yourself. 

## Features

Well-designed user interface and experience (UI/UX)
Fast loading time 
User authentication and data protection
Built-in integrations (typeform)
PDF/Word Doc download


## Demo
-Start up of the app-
![startup](https://user-images.githubusercontent.com/42758283/213923541-d9dec84c-4356-47f3-8851-767fde2b9b9a.gif)

-After clicking "Let's Get Started", the user goes through the Typeform integration to make their resume-
![typeform](https://user-images.githubusercontent.com/42758283/213923665-81d8b8a9-15ec-46dd-9ba6-577a9ba8ce8e.gif)

-Generating the Resume-
![generatingresume](https://user-images.githubusercontent.com/42758283/213923702-66608744-7436-43ae-95dc-b261f529352f.png)

-Generated Resume-
![resumess](https://user-images.githubusercontent.com/42758283/213923717-6a9af16a-30cf-4e6e-884c-edbce71d8ce3.png)

-After generating the resume, clicking "Sign Up" allows the user to sign up to download the resume-
![signup](https://user-images.githubusercontent.com/42758283/213923730-1a934a92-edd4-4367-b7c1-7987e47419f1.gif)

-Logging in with new profile-
![login](https://user-images.githubusercontent.com/42758283/213923746-3841058d-5272-4e5b-bf6b-5e3968140d75.gif)

-Home navigation-
![homenav](https://user-images.githubusercontent.com/42758283/213923766-33eb155e-2c55-4fbb-8f8e-f8a3d9f3f355.gif)

-If the user forgot their password-
![forgotpassword](https://user-images.githubusercontent.com/42758283/213923784-dd81767c-fd9e-4256-af16-71b41d98eb24.gif)




## Installation


System Requirement


- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - `12 || 14 `
- [npm](https://www.npmjs.com/) - v6 or greater


Setup


Setup your project by running the following commands:


Install Dependencies


    npm install
    npm install @auth0/auth0-react
    Npm instal @typeform/embed-react —-save


This file contains various environment variables that you can configure.


**PORT** - Port to run your frontend on \
**REACT_APP_GOOGLE_CLIENT_ID** - (Optional) Your Google Client ID


## Running the App
    npm start




