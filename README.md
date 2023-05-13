# Aircraft Sustainability Platform

## Description
The Aircraft Sustainability Platform is a solution that connects aircraft manufacturers, airlines, and recycling facilities to facilitate the repurposing and recycling of end-of-life aircraft components. The platform promotes the circular economy by reducing waste and promoting sustainability in the aviation industry.

## Problem Statement
The aviation industry is a significant contributor to global greenhouse gas emissions and is under increasing pressure to reduce its environmental impact. One area where significant progress can be made is in the recycling and repurposing of end-of-life aircraft components. However, this process can be complex and requires coordination between multiple stakeholders.

The challenge is to develop a platform or solution that effectively connects aircraft manufacturers, airlines, and recycling facilities, enabling seamless collaboration and streamlined processes for the repurposing and recycling of end-of-life aircraft components. The solution should facilitate the identification, purchase, and proper disposal of these components, contributing to the circular economy and promoting sustainability within the aviation industry.

## Solution
The Aircraft Sustainability Platform is designed to streamline the repurposing and recycling of end-of-life aircraft components, promoting sustainability and reducing waste in the aviation industry. The platform offers the following features:

1. Component Identification and Selection:
   - Manufacturers and airlines can easily identify components that are nearing the end of their useful life using various criteria such as age, lifecycle assessment, manufacturing potential, and condition.
   - The platform employs the provided formula to determine whether a component needs to be recycled based on its characteristics.
   - Components meeting the recycling criteria are flagged for further processing.

```javascript
function needToRecycle(age, lifecycle_assessment, mfg_potential, condition) {
  if (condition.toLowerCase() === "used" && ((age > 35 || lifecycle_assessment > 60) && mfg_potential > 0.40)) {
    return true;
  }
  return false;
}
```   

2. Collaboration and Communication:
   - The platform provides a indirect communication channel for manufacturers, airlines, and recycling facilities to interact and coordinate the repurposing or recycling process.

3. Recycling Facilities Integration:
   - Recycling facilities can access the platform to identify sources of recycled materials, including metals, composites, plastics, and other non-metallic materials.
   - The platform enables recycling facilities to efficiently manage the acquisition of recycled components and materials, supporting their sustainability initiatives.

4. Repurposing Opportunities:
   - The platform offers a marketplace or resource directory where manufacturers and airlines can explore repurposing opportunities for components that do not require recycling.

By leveraging the Aircraft Sustainability Platform, stakeholders in the aviation industry can actively contribute to the circular economy by reducing waste, promoting recycling, and exploring repurposing opportunities for end-of-life aircraft components.

## Key Features

1. User Registration and Authentication:
   - Allow users (manufacturers, airlines, and recycling facilities) to register and create accounts on the platform.
   - Implement authentication mechanisms to ensure secure access to the platform's features and data.
   - Manage user roles and permissions to control access to different functionalities.

2. User Management:
   - Allow administrators to manage user accounts, roles, and permissions.
   - Implement features to update user profiles, including personal information, preferences, and contact details.

3. Aircraft Parts Database:
   - Develop a comprehensive database of aircraft parts with relevant information such as part name, description, material composition, age, condition, availability, and pricing.
   - Enable search and filtering capabilities to allow users to find specific parts based on various criteria.
   - Provide detailed part views with additional information and images.

4. Component Repurposing and Recycling:
   - Allow manufacturers and airlines to identify components that are nearing the end of their useful life and arrange for their repurposing or recycling.
   - Enable manufacturers and airlines to submit requests for repurposing or recycling services for specific components.
   - Facilitate communication and coordination between manufacturers/airlines and recycling facilities for smooth execution of repurposing or recycling processes.

5. Responsive and Intuitive UI:
   - Design a user-friendly and intuitive interface that is responsive and accessible across different devices (desktop, tablet, mobile).
   - Ensure smooth navigation and efficient interaction with the platform's functionalities.

These key features empower manufacturers, airlines, and recycling facilities to collaborate effectively, identify suitable components for repurposing or recycling, and contribute to the circular economy in the aviation industry.


## Roles

1. Aircraft Manufacturers:
   - Role: Aircraft manufacturers are responsible for producing and delivering aircraft to the airlines.
   - Involvement in the Platform: Aircraft manufacturers can use the platform to identify and sell components that are nearing the end of their useful life. By participating in the repurposing and recycling process, manufacturers contribute to the circular economy and reduce waste in the aviation industry.

2. Airlines:
   - Role: Airlines operate the aircraft and are responsible for maintenance, repair, and operation of the fleet.
   - Involvement in the Platform: Airlines can leverage the platform to buy components that are nearing the end of their useful life. By repurposing or recycling these components, airlines can extend their lifespan, reduce costs, and contribute to sustainable practices in the aviation industry.

3. Recycling Facilities:
   - Role: Recycling facilities specialize in the processing and recycling of end-of-life aircraft components.
   - Involvement in the Platform: Recycling facilities play a vital role in the circular economy model by identifying sources of recycled materials, including metals, composites, and plastics. The platform enables recycling facilities to connect with aircraft manufacturers and airlines to source components for recycling and repurposing.

Each role has specific functionalities and access rights within the platform to ensure effective collaboration and engagement in the repurposing and recycling processes. By bringing together these stakeholders, the Aircraft Sustainability Platform fosters sustainable practices and promotes the circular economy in the aviation industry.

## Technologies Used

The Aircraft Sustainability Platform is built using the following technologies:

- Front-end: React.js
- Back-end: Node.js
- Database: MongoDB
- Integrated Development Environment: Visual Studio Code (VSCode)
- API Testing: Postman
- Version Control: Git
- Code Collaboration: GitHub
- System Design: Google Docs (for documentation and system design purposes)

These technologies are chosen for their versatility, scalability, and compatibility to develop a robust and efficient platform for the aircraft sustainability initiatives.

## Installation Instructions

    1. Clone the repo
        git clone https://github.com/sahil58555/Aircraft-Sustainability-Platform.git 
    
    2. Install NPM packages
        npm install

    3. Start the server
        npm start

    4. Configure env file
        DATABASE={your databse string}
        JWT_SECRET={your jwt secret}
        JWT_EXPIRES_IN={jwt expiry date - 90h, 24d, 10m}    















