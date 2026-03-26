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

The pertinence of object architecture within a software entity cannot be understated. It's truly instrumental in delineating configuration, operative capabilities, and the interconnections amongst distinct elements.

<div class="post-it">
  <strong>Note to self:</strong> Always remember that good architecture is like a good foundation. Without it, the skyscraper crumbles! 🏗️
</div>

This article embarks on a comprehensive scrutiny of the object architecture and annotation of an <span class="highlighter">avant-garde banking software system</span>. We'll be delving into the strategic design decisions, adherence to software tenets, and prospective developments that make this system robust and scalable.

## Object Modeling

When we look at the <span class="tooltip">Unified Modeling Language (UML)<span class="tooltip-content">UML is a developmental, modeling language in the field of software engineering that is intended to provide a standard way to visualize the design of a system.</span></span>, it provides a cohesive illustration of the class infrastructure of the software—analogous to a bird's-eye view of a towering edifice.

The object architecture and annotation of this banking software manifest a compelling and intricate web of relationships. The `Main` class UML diagram amalgamates all constituent components, reminiscent of the foundational bedrock.

<div class="doodle">
  *Sketching the relationships...* The staticData packet presides over SHA256 and conversions, playing a pivotal role akin to the structural integrity offered by steel girders.
</div>

The `User` class wields methods that furnish granular control over accounts, operating much like an express elevator moving between floors. The `Manager` and `Account` classes are arranged hierarchically, paralleling the tiered structure of a skyscraper, while the `userInterface` package acts as the captivating glass façade of the building, managing all frontend operations.

## Architectural Decisions

The architectural strategies employed here are marked by groundbreaking innovation. This encompasses database design, software tenets, and application of the <a href="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller" target="_blank" class="tooltip">Model-View-Controller (MVC)<span class="tooltip-content">A software design pattern commonly used for developing user interfaces that divides the related program logic into three interconnected elements.</span></a> pattern, abiding by the Don't Repeat Yourself (DRY) principle, and the usage of the Decorator Pattern.

<div class="post-it">
  <strong>Idea:</strong> Maybe I should write a separate deep-dive post purely on MVC implementations in modern fintech? 🤔
</div>

The database design is the bedrock that bears the load of the entire software system. The Entity-Relationship Diagram (ERD) elegantly delineates the relationships amongst the customer, account, and bank ledger entities, evoking the precise design blueprint that guides the foundation construction.

## Software Tenets

The software tenets followed during the development of this banking software are akin to the architectural standards that assure the edifice is robust, aesthetically pleasing, and ecologically sustainable.

- **The Open/Close principle** mirrors sustainable construction materials usage. It affirms that software entities should be open for extension but closed for modification, promoting flexibility without disrupting the existing codebase. [1]
- **The Factory Proxy pattern** is reminiscent of energy-efficient systems in construction. It encourages the creation of objects without direct instantiation.
- **The MVC architecture** mirrors intelligent building technologies. It compartmentalizes the application into model, view, and controller.
- **DRY principle** ensures minimal redundancy within the codebase, promoting maintainability. <span class="highlighter">Never write the same code twice!</span>
- **The Decorator Pattern** is akin to intelligent home technologies, endowing a class with additional functionalities without permanently altering its code.

## Future Endeavors

The future roadmap for this banking software bears resemblance to the ongoing evolution of any iconic edifice, allowing scope for continued enhancement and innovation.

<div class="doodle">
  *Roadmap Check:* Migrating to a hosted database is comparable to extending a new wing to a skyscraper!
</div>

This requires a comprehensive analysis of the current setup, data, applications, and dependencies that are reliant on the database, as well as the selection of a hosted solution that best aligns with the bank’s requirements. The migration of data and configuration of applications to use the new database environment will be akin to the construction of the new wing, ensuring that the entire system remains reliable and secure.

Unit testing the database and middleware is akin to conducting regular maintenance checks on the edifice. It safeguards the system's reliability and performance, preempting potential issues.

<div class="citations">
  <h3>References & Citations</h3>
  <ol>
    <li>
      Meyer, Bertrand (1988). <em>Object-Oriented Software Construction</em>. Prentice Hall. (Source of the Open/Closed Principle).
    </li>
    <li>
      Gamma, E., Helm, R., Johnson, R., & Vlissides, J. (1994). <em>Design Patterns: Elements of Reusable Object-Oriented Software</em>. Addison-Wesley.
    </li>
  </ol>
</div>