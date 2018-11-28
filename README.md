# Accessible Forms

**[Live Site][forms]**
Please take a moment to explore the forms

[forms]: https://beaccessible.github.io/forms 

The internet is an institution, touching every part of our lives from shopping to ordering food to booking  medical appointments. Each of these interactions live in an form, an HTML element for receiving input from a website's user. With this growing recognition, technology is evolving and laws are changing.

Similar to how store locations must have a ramp, forms must follow particular design steps to support users that might not be able to hold a mouse or view a screen. These people rely on assistive tech such as screen readers, which organize and read aloud information on the page. 

When a website support these users, it realize benefits for all users. Beyond the reduction of regulatory risk,accessibility is about creating the best experience for your general user base, not just those with disabilities. Accessibility means that users can intuitively navigate your site and access they information they want.

The live site demonstrates that accessible forms improve the experience for all users. Each example features a do and also, a don't. The do form is designed to follow the design patterns established in WCAG 2.0 AA Level--the most agreed-upon standard for web accessibility. The don't form highlights some common issues seen across the web. These forms also take advantage of ARIA (Accessible Rich Internet Applications) tags, which are placed on HTML elements to give screen readers helping in organizing the content on the page.

These exercises provide a starting point for building accessible forms. However, it can't be overstated! Online accessibility is best achieved through the Be Accessible Three Step Process:

* **Automated Audit** - Computers are good at surfacing the location of easy to fix issues in a site's design such as missing alternative text. 

* **Manual Audit** - Trained designers find the real barriers in an user's experience and provide recommendations on how to improve UI elements and remediate the site.

* **Usability Lab** - Real users add empathy to the development process. Only by testing an application with real users, especially those with disabilities, can designers understand the full experience of users.

## UI Patterns and Code Explainers

### 1. Display Clear Instructions and Helper Text
Accessibility is about anticipating users' actions and behavior on your website. The _do_ form displays the additional instructions for the input. The  This helper text rather than compelling the user to hover over the tooltip. Also, worth mentioning that the hover effect doesn't exist on mobile. The _don't_ form presents browser compatibility issues. 

The _do_ form also features a clear call to action--the button clearly the states the action initiated by submitting the form, while the _don't_ form provides a nebulous description, i.e. Submit or Enter. 

### 2. Dynamic Form Feedback: Validate on Client Rather Than Server Side
A sighted user makes a mistake on a form and they see that they haven't received the intended reaction. These users merely hit the back button on the browser bar and try a different link or form input and then proceed. This process that takes seconds. With the page reloading, this process often takes minutes for screen reader users. The _do_ form dynamically validates user input, not submitting the form unless the forms are filled and follow certain rules. For example, the email field must contain an '@' and '.'. Waiting for a response from the server is the slowest part of a user's experience on a site. Client side validation is powered by JavaScript. 

Also, it's important to note that the feedback is not provided until after the user first tries to submit the form. Further aiding users, the _do_ form features clear feedback about the source of the error rather than just alerting them that the field is invalid. ARIA Live regions beneath the form inputs, are used to let screen readers know of the error messages. Any text changes in the ARIA Live regions are announced to screen reader users. We prefer using ARIA Live Regions over reloading the page and then using JavaScript to focus the user.

### 3. Progressive Enhancement: Using Regular Expressions and JavaScript
Accessibility means an intuitive user experience that limits users from making mistakes on the site. This produces better outcomes for users and developers. User enters their desired input and a company receives information less likely to cause hiccups. 

Progressive enhancement are layers of enhancement built on top of the core functionality of the UI element. In the _do_ form, we limit the user from entering numerical input or entering invalid numbers (such as more than 2 decimal points) for the _Enter Donation_ field. When user types a letter or invalid character, we use JavaScript to prevent the keystroke. After a user leaves the field, we manicure the input, presenting it in a more comprehensible form. This can be done for currency, phone numbers, or any kind of input that might be entered in a different format.

### 4. Use HTML over PDF For Important Or Long-Term Information
Accessibility is about more than just following the WCAG 2.0 (now WCAG 2.1!). It's about an awareness of the great diversity of user agents--that is the combination of browser, operating system, device, language, internet, and so many other technical details inherent in each user.

PDF requires the user to download a file from the website. It could be blocked by their network and just generally raises questions about security. Then the user must actually have software to read the PDF, which can't be assumed especially on mobile. 

A PDF made accessible at a low level will still be far less accessible than HTML. Unless the PDF is correctly formatted, it will basically be read as a long run-on sentence. 

The _do_ form also replaces the text input for health plan with a dropdown. Radio buttons and choices that clearly tell the user, sighted or visually impaired, that a valid option was selected are best.

### Accessibility Statement
Websites should have an accessiblity statement. The statement provides visitors, that have trouble using the site, with a point of contact for raising issues. This outlet for feedback is an important part of accessibility. Managing accessibility is an iterative process. The accessibility statement is a place for organizations to explain their accessibility efforts and the state of their site. This is a clear signal of empathy and attention to the issue. The accessibility statement is meant to be an honest statement, not a legal one. It's an acknowledgement of work to be done and a chance to highlight support for assistive tech.

If you have any questions or issues with the form, feel free to submit an issue here on GitHub or hit up Be Accessible on our website, or use Twitter to get in contact--whatever is your preferred medium!

### Future Features

Be Accessible will keep adding to this set of form examples. We'll next be adding information about modals and form controls which change text elsewhere on the page--for example, adding an item to a shopping cart.

#### Special Thanks

Special credit to UX Designer Marina Lyulko for producing wireframes and helping guide the development of this training. Also thanks to David Gevorkian for seeing that accessibility is about training and education before auditing. 