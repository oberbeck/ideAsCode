# IDE as code

Developers in modern teams come and go. In some countries, developers can even quit their job within days. I came across projects where onboarding a new developer took weeks until a developer finally was able to contribute. In my experience, a major part of the onboarding is the local developer setup. Often it is complicated due to an evolution of changes and a lack of documentation as well as automation. Overall, onboarding is very time consuming and expensive. We all know: "It works on my machine". Classic local setups are rarely isolated. Often, side effects occur through other installations or different versions. Switching between projects can be a nightmare.

The rise of infrastructure as code has revolutionized the industry. Environments can be versioned, reproduced, rolled back, isolated, moved around, reused with ease. Well written code can even describe the environment itself and sometimes removing the need for documentation all together. Eventually, the application will run in a container. Why not straight from the beginning of the development process?

The idea is to run the application in a container during every step of the software's lifecycle; starting on the developer's machine. This allows us to isolate different projects locally. Development environments can be version controlled. For a rich experience, modern code editors even let you preserve a native development experience throughout a hybrid approach. I use this approach daily.

This leads to a fast developer onboarding experience. The reproducibility rate increases as the number of side-effects can be kept low. Developers do not have to worry about cluttering their machines and can switch between projects with ease. Environments and changes only need to be defined once and can be used by every team member directly. Tightly coupling the environment with the application's source code also assures an always up to date reproducibility description out of the box. On top, this even allows us to be productive remotely without physical access to a developer machine.

---

## Problem
* slow team onboarding
* situations not reproducable, side-effects
* cluttered local machines from old/other projects

## Assumptions
* environment is containerisable

## Approach
* isolating projects
* defining and versioning environment as code
* attach to the container directly or via a hybrid approach

## Advantages
* fast team onboarding
* reproducability for colleagues/pipeline/production
* free of side effects
* clutter free local machines/environments
* project switch with ease
* native development feeling (in comparison to a VM)
* once setup, working for everyone (same for changes)
* versioning with code
* no physical access to development machine required

## Downsides
* slightly more overhead
  * solution: execute on remote machine
    * can even start to develop in a web browser

---

This is my contribution to the **NTT DATA Global DevOps Conference 2020**
