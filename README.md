# Inspiration #
During this challenging time of the coronavirus pandemic, students all over the world are at homes suffering from unproductivity. Due to the increased degree of personal freedom from traditional schooling to online education, many students have a lack of motivation to complete assignments and keep up with their school work. To help boost overall productivity and quality of education, we have created an interactive task application called InterACT based on a point and milestone system to motivates students to follow through with their plans. This app allows students to keep track of the tasks they should complete during the school day and uses a point and award system to motivate them to follow through with their plans. Without the point system, students may not feel motivated to complete their tasks or they may forget about them. By making productivity rewarding and interactive, students will feel a sense of accomplishment each time they complete tasks to get more points and reach new milestones.

# How I built it #
This app was built with the Ionic, which is a framework for Cross-Platform Mobile App Development; an Angular-based codebase that runs on the web, iOS, and Android; and deployed as a native iOS and Android mobile app using Capacitor, Ionic's official native app runtime. Ionic paired with Angular and Typescript is able to be used across desktop, mobile, and web applications.

# Challenges I ran into #
Initially, we did not know how to use the Ionic Framework, so it was a big challenge to learn how to use it and develop the application. In addition, a speech-to-text feature was tested; however, in order to deploy the speech-to-text feature with streaming audio, we had to run it in mobile IDE using XCode with iOS. This involved switching to Cordova instead of Capacitor, which was the original native app runtime. When doing so, the code ran into a lot of compiler issues, so after a lot of time spent on debugging, we eventually had to switch back to Capacitor.

# Accomplishments that I'm proud of #
We take pride in the practicality and usability of the app. Any individual can use this product easily to enhance their educational needs, while also having fun.

# What's next for Interact #
Given more time, we plan to play around more with the speech-to-text feature, this time within Capacitor, paired with a natural language processor, in order to allow students to speak into the app about their plans and tasks, and convert the key tasks into text to display in the app.

# Built with #
Ionic, Angular, Capacitor, Typescript, HTML, SASS
