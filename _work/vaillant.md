---
layout: work
title: "Vaillant Global Websites – Front-End"
client: Vaillant
year: 2014
published: false
---

In 2014 I‘ve worked 9.5 months for Vaillant in a bigger team as front-end developer to build a scalable and modular architecture to drive all of their global websites from one base and only create forked derivates for each country and company. This required a high level abstraction of nearly everything.

The technological base for the framework that has been developed was [INIT](http://use-init.com/), the open-source tool I’m building with [Hans-Christian Reinl](https://drublic.de/) who was also on the project. Together we improved the Grunt modularity further and developed nearly 40 unique components used in a private bower instance. Each component is driven by the global configuration component that includes all build and quality assurance tasks (including the grunt configuration). It includes the markup, styles, scripts, tests (visual, regression, unit, code smell) and its unique configuration settings. Four host projects finally include the various components needed to stack the websites together. That way we gained a modularity and flexibility to only include and use the things that are really needed.

### Facts about the Project

- Team of 10 Front-End Developers
- Scrum based development with four teams in parallel
- GruntJS, Bower, npm, git (following the git flow principle), Jenkins
- Custom Coding Guidelines (CSS follows a BEM-like methodology)
- No committed code without extensive review and quality assurance
- fully responsive and built with front-end performance in mind

### Result

While several projects are still in development and many more features and things are yet to be finished by the still existing development team a few projects are already live.

- [Website of Vaillant Group](http://www.vaillant-group.com/)
- [Demo of a local Vaillant Country Website](http://www.vaillant.com/customers/)
- [Demo of a local Saunier-Duval Country Website](http://www.saunierduval.com/home/)
