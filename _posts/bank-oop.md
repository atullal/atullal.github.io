---
title: "Overview of Object Design in a State-of-the-Art Bank Software"
excerpt: "Object design and documentation in a software system play a crucial role in ensuring its structure, functionality, and relationships between different components. In this article, we'll dive deep into the object design and documentation of a state-of-the-art bank software and explore its design choices, software principles followed, and exciting future work."
coverImage: "/assets/blog/bank-oop/cover.jpeg"
date: "2022-10-10T05:35:07.322Z"
categories: ["Object oriented programming"]
author:
  name: Atul Lal
  picture: "/assets/blog/authors/atullal.jpeg"
ogImage:
  url: "/assets/blog/bank-oop/cover.jpeg"
github: https://github.com/atullal/terrierbank
---

## Introduction
The pertinence of object architecture and annotation within a software entity cannot be understated, being instrumental in delineating its configuration, operative capabilities, and the interconnections amongst its distinct elements. This article embarks on a comprehensive scrutiny of the object architecture and annotation of an avant-garde banking software system, delving into the strategic design decisions, adherence to software tenets, and prospective developments.

## Object Modeling

The Unified Modeling Language (UML) provides a cohesive illustration of the class infrastructure of the software, analogous to a bird's-eye view of a towering edifice. The object architecture and annotation of this banking software manifest a compelling and intricate web of relationships. The Main class UML diagram amalgamates all constituent components, reminiscent of the foundational bedrock of a skyscraper. The staticData packet presides over SHA256 and conversions, playing a pivotal role akin to the structural integrity offered by steel girders. The User class wields methods that furnish granular control over accounts, operating much like an express elevator. The Manager and Account classes are arranged hierarchically, paralleling the tiered structure of a skyscraper, while the userInterface package acts as the captivating glass façade of the building, managing all frontend operations.

## Architectural Decisions

The architectural strategies employed in the construction of this banking software are marked by groundbreaking innovation, encompassing database design, software tenets, and application of the Model-View-Controller (MVC) pattern, abiding by the Don't Repeat Yourself (DRY) principle, and the usage of the Decorator Pattern.

The database design is the bedrock that bears the load of the entire software system. The Entity-Relationship Diagram (ERD) elegantly delineates the relationships amongst the customer, account, and bank ledger entities, evoking the precise design blueprint that guides the foundation construction.

## Software Tenets

The software tenets followed during the development of this banking software are akin to the architectural standards that assure the edifice is robust, aesthetically pleasing, and ecologically sustainable.

- The Open/Close principle mirrors the principle of sustainable construction materials usage. It affirms that software entities should be open for extension but closed for modification, promoting flexibility without disrupting the existing codebase.

- The Factory Proxy pattern is reminiscent of energy-efficient systems in construction. It encourages the creation of objects without direct instantiation, leading to an optimized codebase, resulting in enhanced software performance.

- The MVC architecture mirrors the application of intelligent building technologies. It compartmentalizes the application into model, view, and controller, facilitating a well-organized codebase.

- DRY principle parallels the concept of recycled materials usage in construction. It ensures minimal redundancy within the codebase, promoting maintainability.

- The Decorator Pattern is akin to the use of intelligent home technologies. It endows a class with additional functionalities without permanently altering its code, offering a versatile codebase.

## Future Endeavors

The future roadmap for this banking software bears resemblance to the ongoing evolution of any iconic edifice, allowing scope for continued enhancement and innovation.

Migrating to a hosted database is comparable to extending a new wing to a skyscraper. This requires a comprehensive analysis of the current setup, data, applications, and dependencies that are reliant on the database, as well as the selection of a hosted solution that best aligns with the bank’s requirements. The migration of data and configuration of applications to use the new database environment will be akin to the construction of the new wing, ensuring that the entire system remains reliable and secure.

Unit testing the database and middleware is akin to conducting regular maintenance checks on the edifice. It safeguards the system's reliability and performance, preempting potential issues.