

# Oku 

# Code Institute Portfolio Project 2: JavaScript Essentials - Front end Calculator deployed via Github.
### To view the project please [click here](https://ry-f3.github.io/Oku/).
<br>

![Index page screenshot](/assets/images/screenshots/main.png)


## **Background**


Project Oku is a crypto calculator designed to address the needs of traders in the cryptocurrency market. It aims to provide users with the tools to evaluate price targets and calculate the value of their assets. This readme file serves as a guide to understanding the purpose and functionality of Project Oku.

**Market Dynamics and the Need for a Price Target Crypto Calculator:**<br>
Financial markets, including the cryptocurrency market, operate in cycles characterized by periods of bullish and bearish sentiment. Greed drives the market during bull runs, while fear dominates during bearish periods. In the realm of cryptocurrencies, many individuals seek quick wealth without fully understanding the underlying mathematics and technical analysis.

Oku aims to fill this gap by offering a comprehensive calculator specifically tailored for the cryptocurrency market. By incorporating essential factors such as circulating supply and market capitalization, the calculator assists traders in setting realistic price targets and making informed investment decisions based on quantitative analysis.

**Understanding Circulating Supply and Market Capitalization:**<br>
When analyzing a digital currency, it is crucial to consider its circulating supply and whether it is capped or not. This distinction determines whether the currency is deflationary, like Bitcoin with a limited supply, or inflationary, similar to fiat currencies such as the US dollar. Fiat currencies can be continuously printed through policies like quantitative easing and are not backed by gold.

**To calculate the price of a cryptocurrency, divide its market capitalization by the circulating supply:**<br>

Price = Market Cap / Circulating Supply

**Conversely, to determine the market capitalization, multiply the price by the circulating supply:**<br>

Market Cap = Price x Circulating Supply

These formulas provide valuable insights into the valuation and potential growth of a given cryptocurrency, enabling users to assess its market position and set reasonable price targets.

**Calculating Asset Value:**<br>
Oku also offers a feature that allows users to input their assets and calculate their total value. This feature assists users in understanding the current worth of their holdings. While an ideal future addition would be the ability to email this information to the user, it may require further research and development to implement.

**User Driven:**<br>
Oku provides a valuable tool for traders in the cryptocurrency market by offering a comprehensive calculator for price targets and asset value calculations. By considering factors such as circulating supply and market capitalization, users can set realistic price targets and make informed investment decisions. Project Oku empowers users to engage in quantitative analysis, enhance their understanding of cryptocurrency investments, and effectively manage their portfolios.


## **Scope**


**User Interface:** <br> The calculator will have a user-friendly interface where users can input relevant data such as circulating supply, market capitalization, and desired price targets. A well-designed interface will enhance user experience and ease of data input.

**Calculation Logic:** <br> The JavaScript code will incorporate the formulas for price calculations, considering market capitalization and circulating supply. The logic should be accurate and efficient, handling different input scenarios and providing appropriate results.

**Error Handling:** <br> The calculator should account for potential errors or invalid inputs, providing error messages or validation checks to guide users and ensure accurate calculations.

**Flexibility and Customisation:** <br> Consider allowing users to customise parameters according to their specific cryptocurrencies or investment strategies. This flexibility will enhance the usability and applicability of the calculator for a wide range of cryptocurrencies.

**Mobile Responsiveness:** <br> Ensure that the calculator is responsive and compatible with different screen sizes and devices, allowing users to access and utilise it conveniently on both desktop and mobile platforms.

**Testing and Validation:** <br> Thoroughly test the calculator's functionality and validate the results against known values. Implement unit tests to ensure accurate calculations and a reliable user experience.

By considering these factors and implementing the necessary functionalities, the JavaScript-based Project, Oku calculator will provide traders with a valuable tool for evaluating price targets and calculating asset values in a variety of markets.


## **Audience**


**Oku, is designed to serve a wide range of individuals involved in cryptocurrency and general  trading and investments. The target audience for this tool includes:**

**Cryptocurrency Traders:** <br> Active traders who engage in buying and selling cryptocurrencies can benefit from using Oku. They can leverage the calculator to evaluate price targets and assess potential returns on their investments. By considering factors such as circulating supply and market capitalization, traders can make informed decisions about their trading strategies.

**Crypto Investors:** <br> Long-term investors who hold cryptocurrencies can also find value in Oku. The calculator allows them to set realistic price targets based on quantitative analysis, taking into account factors such as circulating supply and market dynamics. This enables investors to evaluate the growth potential of their cryptocurrency holdings and make informed decisions about their investment portfolios.

**Crypto Enthusiasts:** <br> Individuals with a general interest in cryptocurrencies and a desire to understand their valuation and price dynamics can use Oku. The calculator provides insights into the calculation of cryptocurrency prices and the impact of factors such as market capitalization and circulating supply. This audience can gain a deeper understanding of how cryptocurrencies are valued and how market dynamics influence their prices.

**Novice Traders and Investors:** <br> Oku caters to individuals who are new to cryptocurrency trading and investment. The calculator simplifies the process of evaluating price targets and understanding the basics of cryptocurrency valuation. It offers a user-friendly interface and clear calculations to guide novice traders and investors in making more informed decisions.

**JavaScript Developers:** <br> The codebase of Oku, which is implemented in JavaScript, can be valuable for developers who want to learn how to build similar calculators or incorporate cryptocurrency-related calculations into their own projects. The codebase serves as a resource for understanding and implementing cryptocurrency calculations within a JavaScript context.

Whether they are experienced traders, long-term investors, crypto enthusiasts, newcomers to the crypto world, or developers seeking to expand their knowledge, Oku provides a valuable tool for enhancing understanding, evaluating price targets, and making informed decisions in the dynamic cryptocurrency market.


## **User Stories**


**Key points on how I can use Oku:**

1. As I open up Oku, I am greeted with a clean and intuitive interface.

2. I input the circulating supply and market capitalization of the cryptocurrency I am interested in.
Oku instantly calculates the corresponding price based on the provided data.

3. I can evaluate the feasibility of my desired price target by comparing it with the current market conditions and the cryptocurrency's fundamentals.

4. If needed, I can adjust the input values to explore different scenarios and understand the impact on the price calculation.

5. Oku also provides a color chart probability counter that visually represents the likelihood of achieving the desired price target. This feature adds an additional layer of analysis, allowing me to gauge the probability of success based on the inputted values. (This is an intention but depends on the development process for the project on its feasibility).

6. Additionally, Oku provides a feature that allows me to calculate the value of my cryptocurrency assets. I can input the quantity of each cryptocurrency I hold, and the calculator determines their total value based on current prices.

7. I can also consider the market dynamics and fundamentals suggested by Oku while setting realistic price targets and making investment decisions.

8. Oku ensures that I have a quantitative analysis tool at my disposal, empowering me to make more informed decisions in the volatile cryptocurrency market.


## **Wireframes**

Originally, my wireframes showcased a highly stylized representation of my website. 
However, as the development process advanced, the growing urgency of incorporating responsive design necessitated substantial modifications. It became evident that the initial design would have imposed limitations, prompting a wise decision to pursue a seamless and adaptable design approach. Consequently, significant changes were made to ensure a responsive and user-friendly experience across various devices.


**Homepage (Desktop):**<br>
![Homepage](/assets/images/Wireframes/wireframe1.png)

![Homepage](/assets/images/Wireframes/wireframe2.png)


## **Function and User Interaction**
 
In addition to outlining the current functionality of Oku, I acknowledge that there are several avenues for future improvements. These areas of development could enhance user interaction and elevate the overall user experience of the application. Here are some ideas for future works:

1. **Refined User Interaction:** The focus is to further refine the user interface and interaction of Oku, making it more intuitive and user-friendly. By continuously optimising the design and user flow, whilst aiming to make what  the user needs to do more clear.

2. **Real-Time Data Integration:** A valuable enhancement would involve integrating an API to provide real-time data on cryptocurrency prices, market trends, and other relevant information. This integration will ensure that users have access to the most up-to-date and accurate data within the application.

3. **Email Data Sharing:** To enhance convenience and flexibility, a feature that allows users to easily send their portfolio data or other relevant information via email can be implemented. This will enable users to securely share their data with themselves or others, facilitating collaboration and analysis.

4. **Login System with User Profiles:** By implementing a login system with personalised user profiles, Oku could offer a more tailored experience. This will allow users to securely access their personal accounts, save preferences, and store their portfolio information for seamless usage across devices.

5. **Advanced Probability Feature:** The aim is to enhance the existing probability feature by incorporating advanced algorithms or data analysis techniques. This improvement will make the calculations more accurate and reliable, providing users with more meaningful insights and predictions.

These ideas serve as potential future works for Oku, reflecting my commitment to continuously improve the application and meet the evolving needs of the users.

**Screenshots of the original site**

![Final-page-1](/assets/images/screenshots/original1.png)

Initially, I took inspiration from [Solomia Kravets](https://dribbble.com/shots/16754003--buy-exchange-cryptocurrency-website) for the stylised design of my application. The intricate and visually captivating design elements were impressive. However, as I delved further into the project, I recognised that achieving responsiveness would entail substantial backtracking. Since my primary focus was on JavaScript functionality, I made the conscious decision to prioritise that aspect over the elaborate design details.

As a result, I simplified the design of my calculator application, placing emphasis on ensuring a seamless user experience and efficient functionality. By streamlining the design, I aimed to create an interface that is intuitive and user-friendly, allowing users to easily interact with the calculator and perform calculations effortlessly.

While the stylised design inspired by Solomia Kravets initially intrigued me, I chose to simplify it to align with the core objective of the project – delivering a robust and functional JavaScript application. The simplified design allows users to focus on the calculator's core functionality, ensuring a seamless and efficient user experience.

**Screenshots of the final pages below:**

<br>

![Final-page-1](/assets/images/screenshots/homepage1.png)

<br>

![Final-page-2](/assets/images/screenshots/homepage2.png)

<br>

![Final-page-3](/assets/images/screenshots/assetspage.png)
## **Features**

### **Calculator** 

![Calculator-divide](/assets/images/screenshots/calc.png)

In my application, the default action of the calculator is set to division. This means that when the user interacts with the calculator, it automatically performs a division operation using the market capitalisation and circulating supply values provided.
By taking the market capitalisation and circulating supply as inputs, the calculator applies the division operation to calculate a price target for the digital currency. This default functionality offers users a quick and convenient way to estimate the approximate price of a cryptocurrency based on these key factors.
To achieve this, I employ JavaScript functions and utilise keyup and keydown event listeners to capture user input in real-time. As the user enters or modifies the values for market capitalisation and circulating supply, the calculator instantly updates and recalculates the price target, allowing users to explore different scenarios and make informed decisions.
By incorporating this default divisible action, my calculator empowers users to quickly assess the potential price of a digital currency based on its market capitalisation and circulating supply, providing valuable insights for their investment strategies.


![Calculator-multiply](/assets/images/screenshots/calc2.png)


In addition to the default division action, my calculator application also features a switch toggle that allows users to swap between market capitalisation and price calculations. This switch toggle introduces a dynamic functionality that changes the underlying function used by the calculator.
When the toggle is activated, it modifies the calculator's behaviour to perform multiplication instead of division. This means that users can now input a price value, and based on this input, the calculator will calculate the corresponding market capitalisation.
To implement this functionality, I incorporated a checkbox element with a boolean value of true or false. When the checkbox is checked, indicating the user's intention to switch functions, the calculator updates its operation accordingly.
By offering this switch toggle feature, users have the flexibility to perform both market capitalisation to price and price to market capitalisation calculations using a single calculator. This enhances the versatility and usefulness of the application, catering to a wider range of user needs and preferences.


### **Information and probability bar**

![Probability-bar](/assets/images/screenshots/info.png)

As part of my application, I incorporated a visually appealing probability bar graphic to represent the likelihood of achieving the desired price target. This dynamic bar provides users with a visual representation that scales based on the inputted data.
The probability bar ranges from 0% to 100%, with the top end indicating a certain likelihood of reaching the price target. As users input the relevant data, such as market capitalisation, circulating supply, or other factors, when switched, the bar dynamically adjusts, scaling down to 0% probability as the inputted data deviates from the target.
While the current implementation provides a basic representation, I am eager to explore more advanced concepts in data structures and algorithms to enhance the accuracy of the probability calculation. By considering potential outliers and incorporating complex calculations, the probability bar can offer users a more comprehensive and precise assessment of the likelihood of achieving their price target.
In future iterations, I aim to delve deeper into data structures and leverage statistical analysis techniques to refine the probability bar functionality. This will enable the application to account for a wider range of variables, ultimately providing users with a more nuanced and accurate representation of the probability of attaining their desired price target.


To access the  probability bar and explore its functionality, users can simply click on the question mark icon within the application. Clicking the question mark reveals not only the probability bar but also provides basic information on how they can utilise websites like CoinMarketCap to assess various digital currencies and their corresponding values, as well as other essential factors.
CoinMarketCap and similar platforms offer a wealth of information on cryptocurrency market trends, historical data, market capitalisation, circulating supply, and more. By leveraging these websites, users can gain insights into the performance and potential of different digital currencies, aiding them in making informed investment decisions.
The question mark icon serves as a gateway to both the probability bar and the guidance on utilising platforms like CoinMarketCap. By clicking on it, users can access the displayed information and tools that enhance their understanding of the cryptocurrency landscape and assist them in exploring the market's vast possibilities.


## **Portfolio** 

![asset-calculator](/assets/images/screenshots/assetcalc.png)

A convenient feature in my application is the presence of a small navigation bar below the main header. This navigation bar enables users to easily toggle between the Oku Calc and Portfolio Calculator section. To enhance customisation, I incorporated a dropdown menu that allows users to select different icons that best represent their assets. By utilising JavaScript's addition operation in conjunction with another function, the application calculates the user's net worth.
The tabs within the navigation bar can be added or removed based on the user's preference, offering flexibility and adaptability. To achieve this functionality, I implemented a loop that utilises the querySelector to iterate through each input field and detect values that are above zero. This allows the application to dynamically update the net worth calculation based on the user's inputs.
By incorporating this intuitive navigation bar and the ability to switch between different tabs, users can seamlessly switch between the Oku Calc and Portfolio Calculator. The net worth calculation further adds value by providing users with a comprehensive overview of their financial standing based on their inputted data.

During the development process, I encountered a scenario that involved adding and deleting inputs dynamically. This presented a unique challenge that required careful handling and problem-solving. With the guidance and support of my mentor, I was able to overcome this challenge and implement the desired functionality successfully.
With my mentor's guidance, I explored different approaches and solutions to achieve the desired functionality. Using JavaScript, I took on the task of manipulating the HTML structure by implementing specific functions triggered by user interactions. This allowed me to dynamically add or remove inputs based on the user's actions, resulting in a seamless and responsive user experience.
The mentor's role was pivotal in this process, offering guidance, suggestions, and insights into effective techniques. They shared their expertise, pointing me in the right direction while encouraging independent problem-solving. By collaborating with my mentor, I was able to learn from their experience and successfully implement the desired functionality in my application.
Encountering and resolving this scenario not only expanded my technical skills but also emphasised the importance of seeking guidance and leveraging the knowledge of mentors. Their support and guidance empowered me to overcome challenges and deliver a robust, user-friendly solution.



### **Unified colour scheme**
[Adobe Stock]().  [Coolors.co]() 

![Unified colour scheme]()

### **Introductory text**



![Index introduction]()

### **User feedback**



### Contact form



### **Accessibility**



## **Design Choices**

### **Font**


### **Layout and Structure**

[Balsamiq](https://balsamiq.com/) 



### **Colour schemes**



## **Bugs**

[W3 HTML](https://validator.w3.org/)  [Jigsaw](https://jigsaw.w3.org/css-validator/) 

**List of known bugs:**



**List of fixed bugs**


## **Future work**


 
## **Technologies**

* [Github](https://github.com/) 
    * Hosted the project's repository. 

* [Gitpod](https://gitpod.io/) 
    * Utilised an IDE with version control capabilities to edit and create files.

* [Github Pages](https://pages.github.com/) 
    * Used to deploy the website.

* [Balsamiq](https://balsamiq.com/) 
    * Utilised a tool for creating wireframes to plan the project.

* [Slack](https://slack.com/intl/en-gb/) 
    * Used a platform to connect with my mentor and fellow course alumni.

* [Remixicon](https://remixicon.com/)
    * Used for most of the website's icons.

* [Font Awesome](https://khan.github.io/Font-Awesome/) 
    * Used for some of the website's icons.

* [Google Fonts](https://fonts.google.com/)
    * Used tool to pair fonts.

* [Responsinator](http://www.responsinator.com/)
    * Used to test the responsiveness of the website. 

## **Testing**

### **Testing User Stories**

| User Story   | Fulfilment | 
| ------------------------------------------------------------------ |:---------------------------------------------|


### **Testing functionality**

| Input     | Result   | Intention   |
| ------------------------------------------------------------------ |:---------------------------------------------| :---------------------------------------------------------|


### **Testing on different devices**



### **Testing code**

#### **HTML validation**



**Index.html** - 

**Form.html** - 

#### **CSS (Jigsaw) validation**

![Error]()

**Stylesheet.css** - 

#### **Lighthouse performance testing**

##### Desktop:

**Index.html**:


**Form.html**:


##### Mobile:

**Index.html**:


**Form.html**:


## **Credits**

Developed by **Rhys.Alexander.Few**

### **Code**

* **Adam Boley** 
    * Markdown Language and Readme guidance and peer review - [Github](https://github.com/AdamBoley).

<br>


* **Antonio Rodriguez** 
    * Project guidance and showing me how I would use JavaScript for the hamburger toggle in the future.

### **Images**



### **Acknowledgements**




