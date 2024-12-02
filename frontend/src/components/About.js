// src/components/About.js
import React from 'react';

const About = () => (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', }} id='todoabout'>
        <h2>About Us</h2>
        <p>Welcome to Grocery Buddy, your go-to app for managing your daily grocery needs with ease and efficiency!</p>

        <hr></hr>
        <p>We understand that keeping track of grocery items can sometimes be a hassle. That’s why we created a simple yet powerful solution to help you organize, track, and manage your shopping list effortlessly.</p>

        <p>With our app, you can: </p>
        <ul>
           <li>Add items to your list anytime, anywhere.</li>
            <li>Update your list as your needs change.</li>
            <li>Remove purchased or unnecessary items with a single click.</li>
            <li>Enjoy a streamlined shopping experience by marking items as purchased.</li>
        </ul>

        <p>Our goal is to save you time and make your life a little easier. Whether you’re planning a weekly grocery trip or just jotting down a few essentials, Grocery Buddy is here to ensure you never forget a thing.

</p>


        <p>Thank you for choosing us to be part of your daily routine. Happy shopping!</p>
         
    </div>
);

export default About;
