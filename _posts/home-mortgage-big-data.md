---
title: "Exploring the Home Mortgage Market using Spark on Google Cloud"
excerpt: "Our goal with this dataset is to explore the Home Mortgage market within the US to identify patterns the data on the basis of gender, race, income, property type, loan type, amount and location."
coverImage: "/assets/blog/home-mortgage-big-data/cover.jpg"
date: "2023-04-01T05:35:07.322Z"
categories: ["Big Data", "Cloud", "AI"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/home-mortgage-big-data/cover.jpg"
github: https://github.com/atullal/Exploring-the-Home-Mortgage-Market/tree/main
---

## Introduction

In the world of big data, efficient and scalable data processing frameworks are essential. Spark is one of the most prominent frameworks, providing extensive libraries and capabilities for tasks ranging from data transformation to machine learning. Coupled with Google Cloud's powerful infrastructure, Spark provides an ideal environment for big data analytics.

One such project that leverages these technologies is the exploration of the Home Mortgage Market using Spark on Google Cloud. This project utilized Google Cloud's Dataproc service, a fast, easy-to-use, fully managed cloud service for running Apache Spark and Apache Hadoop clusters in a simpler, more cost-efficient way.

## Overview of the Project

This project aimed to analyze a large dataset of home mortgage applications, drawing insights about the applicant's profiles, loan characteristics, and the possible influences on loan amounts. The end goal was to build a predictive model for determining loan amounts based on the applicant's profile and loan characteristics.

## Google Cloud Dataproc

Google Cloud Dataproc is a fully-managed cloud service for running Apache Spark and Apache Hadoop clusters. It can handle data of any size, making it ideal for big data projects. In this project, Dataproc was used to instantiate a Spark cluster, allowing for efficient and scalable data processing.

Dataproc has several advantages:

- Fast: You can create Cloud Dataproc clusters quickly. Clusters can be started, paused, and deleted in less than 90 seconds.

- Easy to use: Cloud Dataproc initialization actions provide customization and automation. You can use Spark and Hadoop ecosystem libraries or write your own scripts.

- Integrated: Cloud Dataproc is deeply integrated with other Google Cloud services, making it easier to use and manage.

- Cost-effective: With Cloud Dataproc, you can create clusters of any size and pay only for what you use.

## Data Preprocessing

The data preprocessing stage involved tasks such as handling missing values, duplicates, and outliers. The PySpark API was used extensively during this stage. PySpark provides a powerful interface for Spark that allows for a seamless transition from pandas, making it an ideal tool for data cleaning and preprocessing on large datasets.

## Exploratory Data Analysis (EDA)

The EDA stage involved gaining insights from the data by exploring and visualizing it. This included tasks such as identifying correlations between different variables, visualizing distributions of variables, and much more.

## Predictive Modeling

The final stage of the project was predictive modeling. The goal was to predict the loan amount based on various features. This involved preparing the data for machine learning, selecting relevant features, training the model, and evaluating its performance.

## Results and Insights

The analysis of the dataset revealed several key findings, such as:

1. The direct correlation between an applicant's income and their borrowing capacity.
2. The role of economic conditions, lending policies, and lending agencies in influencing loan amounts.
3. The indication that factors such as gender, race, and ethnicity may not significantly influence loan decisions.

## Challenges

The main challenge in this project was handling the large size of the dataset. However, with the power of Spark and Google Cloud Dataproc, this was effectively managed.

## Conclusion

By leveraging the capabilities of Spark and Google Cloud Dataproc, this project successfully analyzed a large dataset of home mortgage applications and built a predictive model for loan amounts. It demonstrated the power and efficiency of using these technologies for big data projects. The jupyter notebook can be found [here](https://github.com/atullal/Exploring-the-Home-Mortgage-Market) in the github repository.
