# CG-Smartie

Code Gorilla has gathered information about its students. The goal of the internship is to collect all the 
knowledge present and to make a prediction. This prediction should give a score on whether a student is a 
good match with a company. This system should be able to predict, par example, the following:
- Which person has a good chance of succeeding and who needs extra guidance in a specific area
- Which person has by which kind of companies the most success, and by which type compagnie they 
shouldn’t apply. 
- For which person, it is clear that they need to have more guidance after they complete their
education.
Goals 
The goals that were predefined are: 
- find out what Code Gorilla needs. Tell us which process a candidate needs to complete and which 
data we need to make a clear education profile. On which we can test future candidates. 
- Implement a profile categorization model: The design and building of a profile categorization 
network for categorizing candidate profiles.
- Portal candidate dashboard: summarize the processes above on the dashboard. So that the 
educators can give an insight into the new candidates. 


The tools, language, and programs will be discussed during the first week of the internship. 
In this discussion, we decided to use python for the data science part. This part represents the making of the 
model. For this model, we wanted to use a clustering method. So that when we are forming the model, we 
could see which clusters of companies would fit with a particular set of students.
After approximately three weeks, we came up with an idea to integrate the neural network into a tinder-like
application. This web application will be built in Vuejs because this is the coding language used frequently in 
this company. And therefore, the most logical language to use in this project. The end-product will be 
presented in a presentation. This presentation will answer all the goals mentioned above. The product will 
be a prototype with fictional users to demonstrate its functioning. 

## Conclusion 
To summarize the focus of this report in one sentence, I would give this: predicting a match between a 
student and a company with the assistance of a neural network. A neural network is a deep learning method 
used for regression prediction. Regression means that outcome of the forecast will be a number. For this 
assignment, we want to predict a matching score. This matching score would reflect the odds of the 
compatibility of a student and a company. This neural network is built with different layers, each a different 
task. Each of these tasks improves the way that the network is learning. And how the better the network 
learns, the easier it adapts and gives the correct forecasts. But of course, this neural network isn’t valuable
alone. That’s why we decided to build a prototype website around the neural network after some 
brainstorming sessions. This allowed me to learn Vuejs, a new programming language for me. Google 
Firebase supports the web application. Firebase handles all the user authentication. And allows me to deploy
my custom model and use the data stored in the firebase store and storage. 

At the moment of writing this report, there are not many results to be shared. There is a baseline web
application created with Vuejs and corresponding extensions. But this one is still in the developing phase and 
therefore isn’t ready to be shared yet. As I have mentioned before, the first month of this internship is mainly
spent researching and discovering the tools I will use. But I could answer most of the questions posed in the 
beginning, what Code Gorilla needs before everything is a consistent database. This will be constructed 
through the website, where every user must create an account. They fill out a questionnaire depending on 
their role (Business or student). This allows Code Gorilla to quickly gather data and directly deploy it to the 
neural network behind the web application. And with a tinder-like application, the users and the businesses 
can see the matching score. Besides the company and student role, there is the Code Gorilla role. This allows 
visiting a dashboard with the newest users and the statics. 

At the beginning of the internship, we thought about the profile categorization model. This can be done with 
a different clustering model. I did most of the research for this problem and documented it for the company 
in a document. This document can be found in the annex. To give a quick summary of this document: 
clustering can be done in different ways, but for categorizing users and businesses, it is easiest to use either
the Gaussian Mixture Model or K-means. The silhouette coefficient and Dunn’s index can evaluate these 
clustering models. These two evaluations give a numerical value in return, which helps modify the clustering. 
The last question posed by Code Gorilla is about the portal candidate dashboard. The neural network tool 
isn’t going to be implemented in the already existing candidate dashboard for time reasons. We prefer to 
finalize the web application with the neural network. The advantage of this approach is that we know in 
advance if this neural network works. And if Code Gorilla is optimistic about its functioning, it will be easier 
to adapt the neural model to be displayed in the dashboard. 

If I were to have more time, I would make the front end more modern. For now, the design of the web 
application is basic. Because we are more interested in the code behind the mechanism, making the front 
end more modern could quickly improve the user experience. Besides the front end, for now, this web 
application will only be used by Code Gorilla. But if it was going to develop this platform further, it could be 
used by more people and businesses. 

This internship has allowed me to observe the working culture and assess if this is the job I want to do when 
I finish my master’s. The topic’s that I had to use in this internship—where the majority of topics that hadn’t 
been covered in my courses at the university. Because there are the topics that I was going to study in my 
master of Artificial Intelligence at the University of Linz, this internship has permitted me to check out if this 
part of Computer Science fits me. And I’m glad to report that I have made the right choice for my master’s.
If I look even further in the future, I would like to see if I can implement neural networks in autonomic drones. 
The knowledge that I have gathered about neural networks. It makes me curious if this can also be 
implemented in drones. But I can research this idea and perhaps even develop it later in my academic career.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
