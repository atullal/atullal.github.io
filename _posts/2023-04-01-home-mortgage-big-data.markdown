---
layout: post
title:  "Exploring the Home Mortgage Market using Spark on Google Cloud"
date:   2023-04-01 13:25:13 -0400
categories: big-data spark cloud
cover: dalle3.png
background: style-1
description: Our goal with this dataset is to explore the Home Mortgage market within the US to identify patterns the data on the basis of gender, race, income, property type, loan type, amount and location.
---

<h1>Introduction</h1>
In the world of big data, efficient and scalable data processing frameworks are essential. Spark is one of the most prominent frameworks, providing extensive libraries and capabilities for tasks ranging from data transformation to machine learning. Coupled with Google Cloud's powerful infrastructure, Spark provides an ideal environment for big data analytics.

One such project that leverages these technologies is the exploration of the Home Mortgage Market using Spark on Google Cloud. This project utilized Google Cloud's Dataproc service, a fast, easy-to-use, fully managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way.


<h1>Overview of the Project</h1>
This project aimed to analyze a large dataset of home mortgage applications, drawing insights about the applicant's profiles, loan characteristics, and the possible influences on loan amounts. The end goal was to build a predictive model for determining loan amounts based on the applicant's profile and loan characteristics.

<h1>Google Cloud Dataproc</h1>
Google Cloud Dataproc is a fully-managed cloud service for running Apache Spark and Apache Hadoop clusters. It can handle data of any size, making it ideal for big data projects. In this project, Dataproc was used to instantiate a Spark cluster, allowing for efficient and scalable data processing.

Dataproc has several advantages:

- Fast: You can create Cloud Dataproc clusters quickly. Clusters can be started, paused, and deleted in less than 90 seconds.

- Easy to use: Cloud Dataproc initialization actions provide customization and automation. You can use Spark and Hadoop ecosystem libraries or write your own scripts.

- Integrated: Cloud Dataproc is deeply integrated with other Google Cloud services, making it easier to use and manage.

- Cost-effective: With Cloud Dataproc, you can create clusters of any size and pay only for what you use.

<h1>Data Preprocessing</h1>
The data preprocessing stage involved tasks such as handling missing values, duplicates, and outliers. The PySpark API was used extensively during this stage. PySpark provides a powerful interface for Spark that allows for a seamless transition from pandas, making it an ideal tool for data cleaning and preprocessing on large datasets.

<h1>Exploratory Data Analysis (EDA)</h1>
The EDA stage involved gaining insights from the data by exploring and visualizing it. This included tasks such as identifying correlations between different variables, visualizing distributions of variables, and much more.

<h1>Predictive Modeling</h1>
The final stage of the project was predictive modeling. The goal was to predict the loan amount based on various features. This involved preparing the data for machine learning, selecting relevant features, training the model, and evaluating its performance.

<h1>Results and Insights</h1>
The analysis of the dataset revealed several key findings, such as:

- The direct correlation between an applicant's income and their borrowing capacity.
- The role of economic conditions, lending policies, and lending agencies in influencing loan amounts.
- The indication that factors such as gender, race, and ethnicity may not significantly influence loan decisions.
Challenges
- The main challenge in this project was handling the large size of the dataset. However, with the power of Spark and Google Cloud Dataproc, this was effectively managed.

<h1>Conclusion</h1>
By leveraging the capabilities of Spark and Google Cloud Dataproc, this project successfully analyzed a large dataset of home mortgage applications and built a predictive model for loan amounts. It demonstrated the power and efficiency of using these technologies for big data projects. The jupyter notebook can be found [here][repo-link] in the github repository.

[repo-link]: https://github.com/atullal/Exploring-the-Home-Mortgage-Market