# Food Ordering System

## Overview

### Purpose
The primary function of this project is to allow a takeaway restaurant to accept orders over the Internet. This is facilitated by enabling customers to see all available menu items, select the items they wish to order by adding them to their basket, and then place their order. The restaurant can view the order and fulfil it.

This system has many advantages over the more traditional method of taking orders over the phone which can be susceptible to miscommunication, the inability to take multiple orders and once and the lack of being able to take secure payment.


### Target Audience
This project aims to cater to owners of small—to medium-sized takeaway restaurants who are not currently taking orders over the Internet or using a mainstream app and are looking to reduce costs or have an existing solution that does not suffice.

## User Stories

### Must-Have User Stories
- **User Story 1:** As a customer I can see a list of menu items so that I can decide what I want to eat

  **Acceptance Criteria:**
    - Database model created for storing food items and another for categories.
    - Name and price of each food item is displayed.
    - Food items are group by their category.
- **User Story 2:** As a customer I can add and remove items from my basket so that I can declare what items I want to order

  **Acceptance Criteria:**
    - Items can be added or removed from the basket.
    - Basket total price and total quantity are displayed.
    - Items with multiple quantities are grouped together.
- **User Story 3:** As a customer I can place an order using the contents of my basket so that the restaurant can prepare my food

  **Acceptance Criteria:**
    - Name, Email and Phone Number Fields
    - Order number is displayed on completion
    - Collection or delivery radio
- **User Story 4:** As an employee I can view all the placed orders so that I can prepare them for the customer

  **Acceptance Criteria:**
    - List of all placed orders
    - Show time order was placed and order info
    - Dismiss button

### Should-Have User Stories
- **User Story 1:** As a customer I can specify special instructions for each item in the basket so that I can inform the restaurant of any changes they need to make

  **Acceptance Criteria:**
    - Special instructions field for each item and overall order.
- **User Story 2:** As a customer I can search for items so that I can save time if I have an exact item in mind

  **Acceptance Criteria:**
    - Search box that provides immediate feedback as customer types
- **User Story 3:** As a customer I can jump down the menu by category so that save time by not scrolling

  **Acceptance Criteria:**
    - Sidebar containing all the category names
    - Clicking a category name scrolls to that category

### Could-Have User Stories
- **User Story 1:** As a customer I can pay by card so that I can pay over the Internet as an alternative to cash

  **Acceptance Criteria:**
    - Card option in checkout
    - Order is marked as placed once payment has been received

## Design Decisions

### Entity Relationship Diagram
![Entity Relationship Diagram](docs_images/erd.png)
I created my ERD diagram using Lucidchart, it represents the database structure for the MVP version of the project which consists of all the must-have user stories. I decided not to include the default User model in my ERD as this is declared by Django and is subject to change in newer releases.

[Lucidchart ERD Document](https://lucid.app/lucidchart/513e4c27-842a-4319-9b4e-faada636017d/edit?invitationId=inv_195ab741-b650-4ba0-a9ee-729f737c8205)

### Wireframes
[<img src="docs_images/wireframes/mobile.png" alt="Mobile wireframe" width="32%"/>](docs_images/wireframes/mobile.png)
[<img src="docs_images/wireframes/tablet.png" alt="Mobile wireframe" width="32%"/>](docs_images/wireframes/tablet.png)
[<img src="docs_images/wireframes/desktop.png" alt="Mobile wireframe" width="32%"/>](docs_images/wireframes/desktop.png)
Here are the wireframes I created for this project using Balsamiq Wireframes, I created them using a mobile-first approach. To see a larger view of each wireframe, please click each wireframe to open a full-sized image.

[Balsamiq Wireframes File](docs_images/wireframes/wireframe.bmpr)

### Accessibility Considerations
Discuss how accessibility guidelines were adhered to, including colour contrast and alt text for images.  
**Guidance:** Outline how you've incorporated accessibility into your design, ensuring that your project adheres to guidelines such as WCAG.

## Features Implementation

### Core Features (Must-Haves)
- **Feature 1:** Description of the implemented feature.
- **Feature 2:** Description of the implemented feature.

(Include all must-have features)  
**Guidance:** Use this section as you complete Phase 2: Must User Stories Implementation & Testing. Document all the must-have features you implemented, explaining how they align with the user stories and acceptance criteria.

### Advanced Features (Should-Haves)
- **Feature 1:** Description of the implemented feature.
- **Feature 2:** Description of the implemented feature.

(Include all should-have features)  
**Guidance:** Include any advanced features you implemented during Phase 3: Should User Stories Implementation & Any Advanced Features. Explain how these features enhance user experience and their alignment with the acceptance criteria.

### Optional Features (Could-Haves)
- **Feature 1:** Description of the implemented feature (if any).
- **Feature 2:** Description of the implemented feature (if any).

(Include any could-have features that were implemented or considered)  
**Guidance:** If any could-have features were implemented, describe them here. This is an opportunity to showcase extra work done beyond the initial scope. But remember - keep it simple! Focus on the Must stories first. Could user story features are commonly earmarked for future project iterations.

## Testing and Validation

### Testing Results
Summarize the results of testing across different devices and screen sizes.  
Mention any issues found and how they were resolved.  
**Guidance:** Summarize the results of your testing across various devices using tools like Chrome DevTools, as outlined in Phase 2. Mention any issues found and how they were resolved.

### Validation
Discuss the validation process for HTML and CSS using W3C and Jigsaw validators.  
Include the results of the validation process.  
**Guidance:** Document your use of W3C and Jigsaw validators to ensure your HTML and CSS meet web standards. Include any errors or warnings encountered and how they were resolved.

## Deployment

### Deployment Process
Briefly describe the deployment process to GitHub Pages or another cloud platform.  
Mention any specific challenges encountered during deployment.  
**Guidance:** Describe the steps you took to deploy your website during Phase 4: Final Testing, Debugging & Deployment, including any challenges encountered.

## Reflection on Development Process

### Successes
Effective use of AI tools, including GitHub Copilot and DALL-E, and how they contributed to the development process.

### Challenges
Describe any challenges faced when integrating AI-generated content and how they were addressed.

### Final Thoughts
Provide any additional insights gained during the project and thoughts on the overall process.  
**Guidance:** Begin drafting reflections during Phase 1 and update throughout the project. Finalize this section after Phase 4. Highlight successes and challenges, particularly regarding the use of AI tools, and provide overall insights into the project.

## Code Attribution
Properly attribute any external code sources used in the project (excluding GitHub Copilot-generated code).  
**Guidance:** Document any external code sources used throughout the entire project, especially during Phase 2 and Phase 3. Exclude GitHub Copilot-generated code from attribution.

## Future Improvements
Briefly discuss potential future improvements or features that could be added to the project.  
**Guidance:** Reflect on potential enhancements that could be made to the project after Phase 4: Final Testing, Debugging & Deployment. These could be Could user story features you didn’t have time to implement or improvements based on testing feedback.
