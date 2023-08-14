

# Oku 

# Code Institute Portfolio Project 2: JavaScript Essentials - Front end Calculator deployed via Github.
### To view the project please [click here](https://ry-f3.github.io/Oku/).
<br>

![Index page screenshot](/assets/images/screenshots/responsive.png)


## **Background**


Project Oku is a crypto calculator designed to address the needs of traders in the cryptocurrency market. It aims to provide users with the tools to discover realistic price targets and to calculate the value of their assets. This readme file serves as a guide to understanding the purpose and functionality of Oku.

**Market Dynamics and the Need for a Price Target Crypto Calculator:**<br>
Financial markets, including the cryptocurrency market, operate in cycles characterised by periods of bullish and bearish sentiment. Greed drives the market during bull runs, while fear dominates during bearish periods. In the realm of cryptocurrencies, many individuals seek quick wealth without fully understanding the underlying mathematics and technical analysis.

Oku's objective is to bridge this gap by providing a specialised calculator tailored for the cryptocurrency market, specifically focusing on determining a realistic price per coin. By factoring in crucial variables such as circulating supply and market capitalization, this calculator empowers traders to swiftly manipulate numeric values, providing them with a clear visualisation in the form of a probability bar. This approach intentionally avoids promoting certainty, recognizing the absence of certainties in financial markets, especially in light of unforeseen events like black swan events. The aim is to assist newcomers in making wiser investment decisions. This is particularly important as many 'influencers' on social media often spread misinformation about price points, such as predicting XRP reaching $100 per coin. Such predictions are entirely unrealistic, given the total crypto market cap of $1 trillion, and for XRP to reach $100, its market cap alone would need to be $5 trillion.

**Understanding Circulating Supply and Market Capitalisation:**<br>
When analysing a digital currency, it is crucial to consider its circulating supply and whether it is capped or not. This distinction determines whether the currency is deflationary, like Bitcoin with a limited supply, or inflationary, similar to fiat currencies such as the US dollar. Fiat currencies can be continuously printed through policies like quantitative easing and are not backed by gold.

**To calculate the price of a cryptocurrency, divide its market capitalisation by the circulating supply:**<br>

Price = Market Cap / Circulating Supply

**Conversely, to determine the market capitalisation, multiply the price by the circulating supply:**<br>

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

**Testing and Validation:** <br> Ensure thorough testing of the calculator's functionality and validate the results by comparing them against established values. Implement unit tests to guarantee precise calculations and a dependable user experience. For example, utilise event key triggers to prevent the appearance of exponential notation values, such as 'e' or 'E', and specified characters like '/', '.', '-', '[', ']', '{', '}', '<', '>', which are commonly used in scientific notation (e.g., "1E+10" represents 1 multiplied by 10 to the power of 10). This proactive approach helps maintain accuracy in calculations and enhances user interaction.

By considering these factors and implementing the necessary functionalities, the JavaScript-based Oku calculator will provide traders with a valuable tool for evaluating realistic price targets and calculating individual net worth based on their assets.


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

3. I can evaluate the feasibility of my desired price target by checking the probability bar.

4. If needed, I can adjust the input values to explore different scenarios and understand the impact on the price calculation.

5. There is a link to coingecko so that I can check data points in relation to my favourite cryptocurrency projects.

6. Additionally, Oku provides a feature that allows me to calculate the value of all my assets and total my net worth.

7. I can visually see live price information for some of the top cryptocurrencies. 

8. Oku ensures that I have an experimental calculator tool to help me make more informed financial decisions.


## **Wireframes**

In the initial stages, my wireframes showcased a highly stylized representation of the website, drawing heavy inspiration from the visual language of [Solomia Kravets](https://dribbble.com/shots/16754003--buy-exchange-cryptocurrency-website). As the development process evolved over time and progressed through multiple iterations, the need for responsive design became increasingly urgent. This realisation prompted significant modifications to the original design, driven by the recognition that the initial approach would impose limitations. A wise decision was made to embrace a seamless and adaptable design strategy, ensuring a responsive and user-friendly experience across a diverse range of devices. The strong colour palette and visually directive messaging, influenced by coinstats.com, have been integral to shaping the evolving design.


**Homepage (Desktop):**<br>
![Homepage](/assets/images/Wireframes/wireframe1.png)

![Homepage](/assets/images/Wireframes/wireframe2.png)


## **Function and User Interaction**
 
In addition to outlining the current functionality of Oku, I acknowledge that there are several avenues for future improvements. These areas of development could enhance user interaction and elevate the overall user experience of the application. Here are some ideas for future works:

1. **Refined User Interaction:** The focus is to further refine the user interface and interaction of Oku, making it more intuitive and user-friendly. By continuously optimising the design and user flow, whilst aiming to make what  the user needs to do more clear.

2. **Real-Time Data Integration:** A valuable enhancement would involve integrating an API to provide real-time data on cryptocurrency prices, market trends, and other relevant information. This integration will ensure that users have access to the most up-to-date and accurate data within the application.<strong>(Not fully realised but appropriate links are given).</strong>

3. **Email Data Sharing:** To enhance convenience and flexibility, a feature that allows users to easily send their portfolio data or other relevant information via email can be implemented. This will enable users to securely share their data with themselves or others, facilitating collaboration and analysis. <strong>(Not yet included).</strong>

4. **Login System with User Profiles:** By implementing a login system with personalised user profiles, Oku could offer a more tailored experience. This will allow users to securely access their personal accounts, save preferences, and store their portfolio information for seamless usage across devices. <strong>(Not yet included).</strong>

5. **Advanced Probability Feature:** The aim is to enhance the existing probability feature by incorporating advanced algorithms or data analysis techniques. This improvement will make the calculations more accurate and reliable, providing users with more meaningful insights. <strong>(Not yet included).</strong>

These ideas serve as potential future works for Oku, reflecting my commitment to continuously improve the application and meet the evolving needs of the users.

**Screenshots of the original site**

![Final-page-1](/assets/images/screenshots/original1.png)

Initially, I took inspiration from [Solomia Kravets](https://dribbble.com/shots/16754003--buy-exchange-cryptocurrency-website) for the stylised design of my application. The intricate and visually captivating design elements were impressive. However, as I delved further into the project, I recognised that achieving responsiveness would entail substantial backtracking. Since my primary focus was on JavaScript functionality, I made the conscious decision to prioritise that aspect over the elaborate design details.

As a result, I simplified the design of my calculator application, placing emphasis on ensuring a seamless user experience and efficient functionality. By streamlining the design, I aimed to create an interface that is intuitive and user-friendly, allowing users to easily interact with the calculator and perform calculations effortlessly.

While the stylised design inspired by Solomia Kravets initially intrigued me, I chose to simplify it to align with the core objective of the project – delivering a robust and functional JavaScript application. The simplified design allows users to focus on the calculator's core functionality, ensuring a seamless and efficient user experience.

## **Layout**

![Inspiration](/assets/images/screenshots/coinstats-inpiration.png)

I found further inspiration for the design and functionality of my page from the swap page on CoinStats. This source served as a valuable reference, allowing me to create a clean and responsive page that accommodates a diverse range of devices seamlessly. The layout and structure from the CoinStats swap page worked perfectly, enabling me to effectively house and integrate both functionalities of my application.

<br>

## **Screenshots of the final pages below:**

<br>

**Landing Page**

![Final-page-1](/assets/images/screenshots/home.png)

<br>

**Portfolio**

![Final-page-2](/assets/images/screenshots/home-portfolio.png)

<br>

## **Features**

### **Navbar** 

![Vavbar](/assets/images/screenshots/navigation.png)

* **Navbar with Logo and Links:** The navigation bar features a clickable logo that takes users back to the main landing page. On the far right, there's a convenient link to access the MetaMask crypto wallet.

* **Live Cryptocurrency Prices:** In the center of the navbar, we've integrated [CoinGecko's](https://www.coingecko.com/en/api) API to display up-to-the-minute cryptocurrency prices. Stay informed about market changes right from our site!

* **Tagline:** There is a tagline to give users a quick glimpse of what our site has to offer.

### **Calculator** 

![Calculator-divide](/assets/images/screenshots/calc.png)

My cryptocurrency price calculator is designed to help users estimate the price of a digital currency based on two essential factors: market capitalization and circulating supply. By default, the calculator performs division using the provided values, enabling users to quickly assess potential prices.

```javascript
let calculationMode = "divide";
```

This example was used to create a flag to track the initial calculation mode, which can be changed at the user’s discretion.

As the user interacts with the calculator, the price target updates in real-time. This dynamic experience allows users to explore different scenarios and make well-informed investment decisions.

```javascript
document.getElementById("cap-el").addEventListener('input', function (event) {
    // Format input values
    formatInputValue(event);
    
    // Update calculation based on current mode
    if (calculationMode === "divide") {
        calcDivide();
        // Also update probability visualization
        updateProbability();
        barStart();
    } else {
        calcMultiply();
    }
});
```

To switch between calculation modes (division and multiplication), users can interact with the application’s switch toggle. This feature enhances the calculator's versatility, allowing users to tailor their assessment method. 


```javascript
// Switch between division and multiplication modes
function calcSwitch(event) {
// Prevent the form from submitting
event.preventDefault();

// Toggle calculation mode
if (checkBox.checked) {
// Switch to multiplication mode
calculationMode = "multiply";
// ... Add event listeners and update UI elements accordingly
} else {
// Switch to division mode
calculationMode = "divide";
// ... Add event listeners and update UI elements accordingly
}

// Reset input values and recalculate
valueReset();
barStart();
}
``` 

To accommodate future project iterations, I've chosen to use the form element in the HTML, as it allows for more extensive functionalities, such as sending results to the user's email address. This choice required me to prevent the default form submission behavior in the early stages, as the calculator's immediate response to user input is crucial for a seamless experience.


### **Probability bar**

#### **Likely**

As a part of my application, I've integrated a visual probability bar graphic that represents the likelihood of reaching the desired price target. This bar scales from 25% to 75%, deliberately excluding the extreme ends to acknowledge the absence of certainties or impossibilities in the ever-fluctuating cryptocurrency markets.

<br>

![Probability-bar](/assets/images/screenshots/likely.png)

<br>

#### **Maybe**

As users input data such as market capitalization, circulating supply, or other relevant factors, the probability bar dynamically adjusts. It scales down toward the 25% mark when the inputted data deviates from the target, reflecting the inherent uncertainty in predicting cryptocurrency prices.

<br>

![Probability-bar](/assets/images/screenshots/maybe.png)

<br>

#### **Unlikely**

While the current implementation offers a fundamental representation, I'm eager to explore advanced concepts in data structures and algorithms to enhance the accuracy of the probability calculation. By considering potential outliers and incorporating complex calculations, the probability bar can provide users with a more comprehensive and precise assessment of the likelihood of achieving their price target.

<br>

![Probability-bar](/assets/images/screenshots/unlikely.png)

<br>

In future iterations, I aim to dive deeper into data structures and leverage statistical analysis techniques to refine the probability bar functionality. This approach will enable the application to account for a broader range of variables, ultimately offering users a more nuanced and accurate representation of the probability of attaining their desired price target within a more realistic range.

## **Portfolio** 

![asset-calculator](/assets/images/screenshots/portfolio.png)

A convenient feature in my application is the presence of a small navigation bar below the main header. This navigation bar enables users to easily toggle between the Oku Calc and Portfolio Calculator section. To enhance customisation, I incorporated a dropdown menu that allows users to select different icons that best represent their assets. By utilising JavaScript's addition operation in conjunction with another function, the application calculates the user's net worth.
The tabs within the navigation bar can be added or removed based on the user's preference, offering flexibility and adaptability. To achieve this functionality, I implemented a loop that utilises the querySelector to iterate through each input field and detect values that are above zero. This allows the application to dynamically update the net worth calculation based on the user's inputs.
By incorporating this intuitive navigation bar and the ability to switch between different tabs, users can seamlessly switch between the Oku Calc and Portfolio Calculator. The net worth calculation further adds value by providing users with a comprehensive overview of their financial standing based on their inputted data.

During the development process, I encountered a scenario that involved adding and deleting inputs dynamically. This presented a unique challenge that required careful handling and problem-solving. With the guidance and support of my mentor, I was able to overcome this challenge and implement the desired functionality successfully.
With my mentor's guidance, I explored different approaches and solutions to achieve the desired functionality. Using JavaScript, I took on the task of manipulating the HTML structure by implementing specific functions triggered by user interactions. This allowed me to dynamically add or remove inputs based on the user's actions, resulting in a seamless and responsive user experience.
The mentor's role was pivotal in this process, offering guidance, suggestions, and insights into effective techniques. They shared their expertise, pointing me in the right direction while encouraging independent problem-solving. By collaborating with my mentor, I was able to learn from their experience and successfully implement the desired functionality in my application.
Encountering and resolving this scenario not only expanded my technical skills but also emphasised the importance of seeking guidance and leveraging the knowledge of mentors. Their support and guidance empowered me to overcome challenges and deliver a robust, user-friendly solution.

### **Future Enhancements:**

* Seamless Portfolio Tracking: I will be working on a feature that will allow you to interact with our website using your MetaMask wallet. Easily input your digital asset data, and we'll do the rest, giving you real-time updates on the value of your portfolio.

* User Authentication: To ensure security and personalised experiences, we'll implement user authentication. Your data will be safe and accessible only to you.

* Comprehensive Portfolio Management: I will be developing tools to help you manage your digital assets effortlessly. Add, remove, and edit holdings with ease, and input past transactions for accurate performance metrics.

* Visualise Your Portfolio: See the performance of your portfolio over time with interactive graphs and charts. Understand how your investments are doing at a glance.

* Stay Secure: Security is a top priority. I will implement robust encryption, follow best practices, and explore advanced security measures to keep your data safe.

## **Favicon** 

I incorporated a favicon into the website, which was created using [Canva](https://www.canva.com/).

### **Unified colour scheme**

![Unified colour scheme](/assets/images/screenshots/coinstats.png)

Oku's color palette draws inspiration from CoinStats and thoughtfully integrates the color orange (#ff9332) for clear communication of its features. While we've leveraged colors from CoinStats, we've also made modifications to enhance user accessibility across various elements of the platform.

* Navigation background: #0d0d0d
    * Text color: #999999
* Small navigation contrast buttons: #ff9332 (to highlight essential actions)
* Main form body: #1a1a1a (provides a comfortable reading experience)
    * Form label colour: #E7E5DF (for clear form field identification)
    * Form info text colour: #f1f1f175 (subdued text for better contrast)
    * Info link text colour: #a96a32 (to attract user attention)
    * Probability bar colour: #999999cc (semi-transparent grey for subtlety)
* Tooltip background: #999999
    * Tooltip text colour: #fff
* Footer background: #0d0d0d
    * Footer text: #999999af (slightly subdued to maintain readability)
    * Footer icon hover colour: #a96a32 (for interactive visual feedback)

The primary use of the vibrant orange colour creates a dynamic and engaging environment, signifying enthusiasm, creativity, and warmth. This resonates well with the cryptocurrency industry's forward-thinking nature, evoking feelings of optimism and positivity. By carefully selecting and adapting colours, we've established a visually appealing design that remains accessible and functional, ensuring a captivating and inclusive experience for users who share a passion for digital currencies.

### **Accessibility**

To ensure accessibility, I implemented ARIA labels where appropriate within the website. ARIA labels provide additional context and information to assistive technologies, enhancing the overall accessibility of the application.
Moreover, I prioritised the use of high contrast colours throughout the design to optimise readability. By selecting colour combinations with distinct contrast, the content becomes more legible for users with visual impairments or those viewing the website in challenging lighting conditions.
By incorporating ARIA labels and employing high contrast colours, the website strives to provide an inclusive user experience. Accessibility considerations play a crucial role in ensuring that individuals with diverse needs can navigate and engage with the content effectively.


## **Bugs**

**List of known bugs:**

* Icons from Font Awesome not displaying properly on certain browsers and smaller screens.

* Accumulation issue in portfolio calculations, where the calculations were being added together multiple times per input value.

* Scroll bar functionality on mobile devices requiring the use of a div element and adjustments to the height property.

* Click event not recognized within portfolio.js, resolved by utilising the DOMContentLoaded event listener.

* Challenges with adding and deleting inputs, addressed by updating the HTML with JavaScript and using specific functions to handle changes in functionality.

* Difficulty in achieving a responsive design for smaller screens, particularly with displaying smaller icons.

* Limited visibility of smaller icons on certain browsers and mobile devices with smaller screens.

* Help icon has not been made responsive for mobile devices.


**List of fixed bugs**

* Issue with click event recognition in portfolio.js:
    * The click event was not being recognized as expected.
    * Solution: Utilised the DOMContentLoaded event listener to ensure the default function is loaded into the DOM immediately upon website display. This resolved the click event recognition issue.
* Accumulation issue in portfolio calculations:
    * Calculations in the loop were accumulating and adding together multiple times for each input value.
    * Solution: Refactored event listener implementation to properly remove and add event listeners, ensuring the calculations are iterated correctly. This fixed the accumulation problem and provided accurate results.


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
    * Used for some of the website's icons.

* [Font Awesome](https://khan.github.io/Font-Awesome/) 
    * Used for most of the website's icons.

* [Google Fonts](https://fonts.google.com/)
    * Used tool to pair fonts.

* [Responsinator](http://www.responsinator.com/)
    * Used to test the responsiveness of the website. 

* [Canva](https://www.canva.com/)
    * Used to create a logo and the favicon.

## **Testing**

### **Testing User Stories**

| User Story   | Fulfilment | 
| ------------------------------------------------------------------ |:---------------------------------------------|
As a user, I want to be able to calculate the price target for a digital currency based on its market cap and circulating supply, so I can make informed investment decisions. | The application provides a calculator where users can enter the market cap and circulating supply of a digital currency. The calculator then calculates the price target for the currency and displays it to the user. This enables users to make informed investment decisions based on the calculated price target. 
As a user, I want the option to switch between calculating the market cap and calculating the price based on the entered values, so I can have flexibility in my calculations. | The application includes a toggle switch that allows users to switch between calculating the market cap and calculating the price. When the toggle is switched to the market cap mode, the calculator updates its functionality to calculate the market cap based on the entered values. This provides users with the flexibility to perform different types of calculations based on their needs.
As a user, I want to be able to add and remove inputs in the portfolio calculator, so I can total my net worth. | The portfolio calculator section of the application allows users to dynamically add and remove inputs for different assets. Users can easily add new assets by clicking the "Add Input" button and remove existing assets by clicking the "Remove" button next to each input. This feature enables users to realise their net worth.
As a user, I want the probability bar to accurately reflect the likelihood of achieving a price target, so I can gauge the potential success of my investments. | The probability bar in the application visually represents the likelihood of achieving a price target. As users enter values and calculate the price target, the bar dynamically adjusts to reflect the probability of reaching the target. The bar scales from 25% to 75%.. This provides users with a visual representation to financially inform users on feasibility.
As a user, I want the website to be responsive and accessible on different devices and screen sizes, so I can use it conveniently on desktop and mobile devices. | The website is designed to be responsive and accessible across various devices and screen sizes. It adapts its layout and components to ensure a seamless user experience on both desktop and mobile devices. Users can conveniently access and use the calculator on their preferred device without any usability or display issues.
As a user, I want the website colours to have high contrast and be visually appealing, so I can easily read and understand the content. | The website colour scheme prioritises high contrast and readability. The chosen colours provide a visually appealing and engaging experience while ensuring that the content remains easily readable. This enhances the user's ability to understand the information and calculations presented on the website.
As a user, I want the website to load quickly and efficiently, so I can access the calculator without delay. | The website is optimised for fast loading and efficient performance. It follows best practices for code optimization and utilises appropriate caching techniques. This ensures that users can access the calculator and other functionalities without experiencing significant delays or slow loading times.
As a user, I want the website to provide clear instructions and explanations on how to use the calculator, so I can easily understand its features and functionality. | The website includes clear instructions and explanations on how to use the calculator. There is a prominently displayed "Help" or "Instructions" section that users can access to get detailed guidance on using the calculator. This helps users understand the features and functionality of the calculator, enabling them to use it effectively for their calculations.


### **Testing functionality**

| Input     | Result   | Intention   |
| ------------------------------------------------------------------ |:---------------------------------------------| :---------------------------------------------------------|
Market Cap: $10,000,000<br>Circulating Supply: 1,000,000 | Price Target: $10 | Calculate the price target based on the given market cap and circulating supply.
Market Cap: $5,000,000<br>Circulating Supply: 2,500,000 | Price Target: $2 | Calculate the price target based on the given market cap and circulating supply.
Toggle Switch: Circulating Supply<br>Circulating Supply: 1,000,000<br>Price: $10 | Market Cap: $10,000,000 | Switch to calculate the market cap and calculate the market cap based on the given circulating supply and price.
Access the website on a desktop device and click the question mark icon | 	Display instructions and explanations on how to use the calculator | Click the question mark icon to access the help section and view detailed instructions on how to use the calculator and understand its features.
Add Input: Bitcoin<br>Amount: 2<br>Price: $50 | Net Worth: $100 | Add an asset to the portfolio with the name "Bitcoin", an amount of 2, and a price of $50. Calculate the net worth based on the entered asset data.
Remove Input: Bitcoin | Net Worth: $500 | Remove an asset (Bitcoin) from the portfolio and calculate the net worth based on the remaining assets.

### **Deployment**

### **Testing on different devices**

* Samsung S22
    * Tooltips were directed off the screen this has now been resolved. Tap the headings for information.

* Samsung Flip3 
    * Icons not working in the porfolio section.
    * Question mark icon has not been made responsive for mobile devices.

* Samsung A13
    * No further issues than previously stated.

* Ipad Pro
    * Issues surrounding input sizing with the porfolio section.


### **Testing code**


#### **JavaScript Validation**  using *[jshint](https://jshint.com/)* :
 
**Porfolio.js** - The validator highlighted missing semicolons and overused semicolons in the code. These issues have been identified and resolved to adhere to proper coding conventions.

**ap.js** - The validator lists '$' as an undefined variable. I used the code from this blog on [Code Prime](https://blog.codeprime.club/2022/02/how-to-show-live-price-of-cryptocurrency-coin.html) to get it to work

**nav.js** - The validator highlighted missing semicolons and overused semicolons in the code. These issues have been identified and resolved to adhere to proper coding conventions.

**oku-cal.js** - It was flagged that four variables are undefined and five variables are unused. However, these variables are actually utilised in the code, and removing them would break the functionality. It is possible that the validation tool misinterpreted their usage or didn't fully capture it. Alternatively, it could be due to not following the expected conventions. I would appreciate any feedback on this. (JavaScript has now been refactored all variables used).

#### **HTML validation** using [W3 Validator](https://validator.w3.org/#validate_by_input) :

![Errors](/assets/images/screenshots/screenshot3.png)

**Index.html** - All of the errors highlighted in the screenshot above have now been rectified.

#### **CSS validation** using [jigsaw](https://jigsaw.w3.org/css-validator/validator) :

![Error](/assets/images/screenshots/Screenshot1.png)

**Stylesheet.css** - The error highlighted in the screenshot above has been rectified.

#### **Lighthouse performance testing**

##### Desktop:

**Index.html**:

![SEO](/assets/images/screenshots/desktop.png)

##### Mobile:

**Index.html**:

![SEO](/assets/images/screenshots/mobile.png)


## **Credits**

Developed by **Rhys.Alexander.Few**

### **Code**

**Peer Review**

* **Adam Boley** 
    * Special thanks to my friend for reviewing my code and providing helpful suggestions and feedback.  - [Github](https://github.com/AdamBoley).

<br>

* **Antonio Rodriguez** 
    * Special thanks to my mentor for providing valuable guidance and support throughout the development of this project.


**Other Resources**


**Bibliography:**

* YouTube video tutorial: "Creating a Sidebar Menu with HTML, CSS, and JavaScript" by Traversy Media. Retrieved from: https://www.youtube.com/watch?v=luV9Mso3cHk

* W3Schools code example: "CSS Flexbox Layout" on W3Schools. Retrieved from: https://www.w3schools.com/css/tryit.asp?filename=trycss_grid

* Stack Overflow post: "If checkbox is checked and user clicks on the button, do this" on Stack Overflow. Retrieved from: https://stackoverflow.com/questions/25926556/if-checkbox-is-checked-and-user-clicks-on-the-button-do-this

* W3Schools code example: "Custom Scrollbar Style" on W3Schools. Retrieved from: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_custom_scrollbar2

* Stack Overflow post: "Adding numbers in a for loop in JavaScript" on Stack Overflow. Retrieved from: https://stackoverflow.com/questions/11686724/adding-numbers-in-for-loop-javascript

* YouTube video tutorial: "JavaScript Event Listeners on Dynamically Created Elements" by The Net Ninja. Retrieved from: https://www.youtube.com/watch?v=m3StLl-H4CY

* Code Prime blog: "Javascript synatax and steps followed to
enable the use of an API within the navbar." Retrieved from: https://blog.codeprime.club/2022/02/how-to-show-live-price-of-cryptocurrency-coin.html

Please note that these resources were used for learning and reference purposes during the development of the project, with the exception of the scroll bar and the column template where I copied and pasted the webkit code.








