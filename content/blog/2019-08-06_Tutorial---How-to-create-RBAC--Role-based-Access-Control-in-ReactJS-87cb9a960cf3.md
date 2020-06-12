---
title: Tutorial — How to create RBAC (Role based Access Control)in ReactJS
description: RBAC in ReatJS
date: '2019-08-06T09:57:35.588Z'
categories: []
keywords: []
slug: >-
  /@tarunnagpal78/tutorial-how-to-create-rbac-role-based-access-control-in-reactjs-87cb9a960cf3
---

![Role Based Access Control](img\1__sH__adk3G54NTb8oEQ8Zmow.jpeg)
Role Based Access Control

Have you ever come to a situation where you want to control your APP actions and pages based on user login type (Admin/Moderate/anonymous)?

Have you faced any situation where you need to hide important information of your APP from anonymous users?

Do you want better control of the type of users and their actions on the site?

To address these 3 points, you have to create privilege in your APP. This privilege is called RBAC and in this tutorial, I am going to take you to a journey of creating and using the same.

During the tutorial, if you are stuck and feel things are getting ambiguous. You can directly jump to the final [Source code here](https://github.com/tarun-nagpal-github/react-rbac-tutorial).

The complete code in the form of an example is [deployed here](https://fervent-meitner-4ac871.netlify.com).

In spite of all these still, you find you are lost in the blog, please feel free to comment on this blog at the bottom.

So, let's begin ……

**Prerequisites**

1\. Basic knowledge of JavaScript

2\. Basic knowledge of React

I have learned ReactJs and got a chance to explore almost every feature that I could.

During the project, I have a requirement to develop a complete RBAC — System.

I searched many blogs and tutorials but I have not found any Ready-Made Solution (Like [Drupal-RBAC](https://www.drupal.org/project/rac)).

So, after searching for long hours and struggling with various types of plugins and modules. I decided to create RBAC of my own.

In the tutorial below I would be covering the following things

1\. What is RBAC

2\. What is Protected Route in ReactJs

3\. Integrate RBAC with steps

3.1 — Create Permission Matrix

3.2 — Save the Permissions and Roles in the Backend

3.3 — Fetch the Meta (Allowed Pages and Actions) of a User upon Login

4\. Integrate Actions with HTML/React Elements

> The complete code is deployed [here](https://fervent-meitner-4ac871.netlify.com). You can also see the source code [here](https://github.com/tarun-nagpal-github/react-rbac-tutorial).

1.  **What is RBAC**

RBAC stands for Role Based Access Control and it is process by which we give permission to the user based on their access rights.

In some other words, It lets employees have access rights only to the information they need to do their jobs and prevents them from accessing information that doesn’t pertain to them.

You can take the example of the Indian Air Force, in which each officer has its own privileges. Based on that Government provide them (and families ) the facilities and accommodations etc.

**2\. What is Protected Route in ReactJs**

Protected Route is a HOC ([High Order Component](https://reactjs.org/docs/higher-order-components.html)) which open the URL (route) only when the user passes a test (Access Control).

People from angular World can see this as a [Route Guard](https://angular.io/api/router/CanActivate)

You can see the example of a Protected HOC below.

<ProtectedRoute path=”/users-list” component={UserList} />

**3\. Integrate RBAC**

In this section we will integrate, the Logic into React and you can see the working code.

**3.1 Create Permission Matrix**

This section is a component (with HTML) that can display the Roles → Modules → Pages → Actions in the left to right order.

When a user selects a role they will be shown a list of modules in the complete APP. The same Click on Modules will display pages and actions.

Few Examples: -

1\. An Authenticated user will have access to the contact us page but not Add User Page.

2\. An Moderate User will have access to create a user but not to delete.

3\. An Admin User will have all the rights but cannot modify self data

4\. An Super-admin will have all types of roles

RBAC — Permission Matrix — Screenshot

![RBAC — Permission MatrixRBAC — Permission Matrix](https://cdn-images-1.medium.com/max/800/1*BDNvyDOFBmbygzuzSZLJMQ.png)
RBAC — Permission Matrix

**3.2 Save the Permissions and Roles**

This section is responsible for saving actions. The Hierarchy is as follows.

![RBAC — Flow Diagram](img\1__9T6grgxd3oTW5Xoky0Bd5w.jpeg)
RBAC — Flow Diagram

**3.3 Fetch the Meta (Allowed Pages and Actions) of a User upon Login.**

This Section is responsible for fetching the allowed modules/pages/actions.

You will get the following response from the API (get-allowed-pages.json).

You can check the access of the pages

The value _allowedActionsName_ will be passed as props

4\. Integrate Actions with HTML/React Elements

Now finally you will get the actions on every component based on the page-URL. You can bind them directly with the HTML elements.

Example — If User is allowed to delete record, then only the button will be enabled.