<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ArchangeLillith/star-dash-frontend">
    <img src="public/images/Logo/logo.png" alt="Logo" width="700" height="250">
  </a>

  <p align="center">
    A scheduling website for tiering (getting a high rank in a one time event) in <a href="https://colorfulstage.com/">Project: Sekai</a>
    <br />
  
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#for-developers">For Developers</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#license">License</a></li>
  </ul>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img src="screenshots/home.png" alt="home page screenshot" width="1000" height="500">

My largest project to date, this website is, in a nutshell, a schedule maker. However, it goes far beyond that. To understand what this website does, a bit of background is needed; to 'tier' in Project: Sekai, you have a runner (the person who's trying to score high), at least one manager (the main contact and scheduler), and fillers. Fillers are people who donate their time to help the runner reach high scores. Events are one time only, and last for 200 hours each. This website is a tool for managers to easily manage the 30+ people involved in these events. 

To get more complex, a team of people is five - one runner and four fillers. A team is usually created for every hour of the event whether or not the runner will actually play during that time. Further complicating this, one filler can come with anywhere from one to four teams <i>each</i>. This is where my website shines. A specific paramater (BP) is used to match make, if you have too high or low a BP, you won't be able to play. Calculting the best possible teams is handled by an algorithm when all four fillers are selected, and the top five best team combinations are displayed for the manager to select to add to that time slot. That's the bread and butter of this website - what once was a multiple week job of filling out spreadsheets by hand is now a button click. 

But how do we get filler information? Great question! The fillers themselves add it. No need to log in, just fill out a form and if the manager and event are correct, the fillers' information is tied to that manager for that event. Before StarDash, it was sent in a message through Discord, but now the manager doesn't have to handle all that data and take time to add it all into a spreadsheet! 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With
<div align="center">

[![React][React.js]][React-url]
[![typescript][typescript]][typescript-url]
[![nodejs][nodejs]][nodejs-url]
[![express][express]][express-url]
[![Passport][Passport]][Passport-url]
[![JWT][JSON-web-tokens]][JSON-web-tokens-url]
[![MySQL][MySQL]][MySQL-url]
[![S3][S3]][S3-url]
[![bcrypt][bcrypt]][bcrypt-url]
[![js-cookie][js-cookie]][js-cookie-url]
[![cors][cors]][cors-url]
[![esbuild][esbuild]][esbuild-url]
[![eslint][eslint]][eslint-url]
[![vite][vite]][vite-url]
[![sass][sass]][sass-url]

</div>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
<i>To understand used termimology, please review the short explination in the <a href="#about-the-project">About The Project</a> section.</i>

If the user is a filler, they can register for an event without creating an account or logging in! Simply go to the 'Filler Registration' page and select the correct event type, event, and type in their manager's name. The manager's names are all unique and chosen by the manager, so there's no confusion on who the registered filler should go to. Within the form are places for all the teams a filler could have. Once everything is filler out, the user can submit their data, recieving a success message if an event of that name is associated with the manager - if the manager's name is wrong, a generic error will appear. Managers are informed that copying and pasting their name is the best way to ensure fillers are registered smoothly. 

As for a manager, there are many more features! Creating an account is simple to do, and when the account is created it will automatically log in the user. If the manager has no events (either their own or they could have joined someone else's), the screen greeting them will prompt them to create and event themselves or join on an existing one. If the manager has one event, that event will automatically load and the manager will instead be directed to the schedule page. If the manager is associated with mor than one event, a screen will apprear asking them to eith create an event, join an event, or choose an existing event. From here, the user can explore their events, edit the one they choose to, peruse a list of fillers (and edit their data if need be), change their settings (themeing and pagination defaults), or join / create new events! 

Events are never seen unless a manager is in an event, and there's a 'run password' that exists on every run that's needed to join a run, meaning no bad actor can just join a run and sabatoge it. Further, the manager that originally created the event - referred to as a lead manager - can see all managers associated with the run. If an issue arises, the lead manager can kick another manager from the run, requiring a run password change so that manager can't just join back. As of now, there's no way to hand lead status over to someone else.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GALLERY -->
## Gallery
Explore StarDash's vibrant pages below through images!

<details open>
  <summary>Home View</summary>
 <img src="/screenshots/home.png" alt="home view" width="1000" height="500">
</details>

<details>
  <summary>Login</summary>
 <img src="/screenshots/login.png" alt="login screen page" width="1000" height="600">
</details>

<details>
  <summary>Register</summary>
  <img src="/screenshots/register.png" alt="register as a manager" width="1000" height="600">
</details>

<details>
  <summary>Filler Registration</summary>
  <img src="/screenshots/filler-registration.png" alt="register as a filler" width="1000" height="600">
</details>

<details>
  <summary>Manager Home</summary>
 <img src="/screenshots/manager-home.png" alt="home for managaers, logged in users only" width="1000" height="600">
</details>

<details open>
  <summary>Manager Greeting Page</summary>
 <img src="/screenshots/manager-login-front.png" alt="manager greeting page" width="1000" height="600">
</details>

<details>
  <summary>Create Run Page</summary>
  <img src="/screenshots/create-run.png" alt="create a new run as a manager" width="1000" height="600">
</details>

<details>
  <summary>Join Run</summary>
 <img src="/screenshots/join-run.png" alt="join an existing run as a manager" width="1000" height="600">
</details>

<details>
  <summary>FAQ's</summary>
 <img src="/screenshots/faq.png" alt="faqs, will differ when logged in as to the content!" width="1000" height="600">
</details>

<details>
  <summary>Manager Settings</summary>
 <img src="/screenshots/settings.png" alt="settings for managers" width="1000" height="600">
</details>
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--DEV -->
### For Developers

If you'd like to run a local copy of this project, please follow the steps below to do so!

1. Clone the repo
   ```sh
   git clone https://github.com/ArchangeLillith/knitters-fren
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Boot the project (backend lives on localhost:3000, frontend lives on localhost:8000)
    ```sh
   npm run dev
   ```

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Thank you to Elivaras who's been reviewing my code here and there!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[typescript]: https://img.shields.io/badge/typescript-20232A?style=for-the-badge&logo=typescript&logoColor=#3178C6
[typescript-url]: https://www.typescriptlang.org/
[sass]: https://img.shields.io/badge/SASS-CFB1BB?style=for-the-badge&logo=sass&logoColor=#CC6699
[sass-url]: https://reactjs.org/
[vite]: https://img.shields.io/badge/vite-8A89FF?style=for-the-badge&logo=vite&logoColor=DAA520
[vite-url]: https://vite.dev/
[dayjs]: https://img.shields.io/badge/dayjs-FF6347?style=for-the-badge
[dayjs-url]: https://day.js.org/
[esbuild]: https://img.shields.io/badge/esbuild-F4C430?style=for-the-badge&logo=esbuild&logoColor=000000
[esbuild-url]: https://esbuild.github.io/
[eslint]: https://img.shields.io/badge/eslint-A78BFA?style=for-the-badge&logo=eslint&logoColor=000000
[eslint-url]: https://eslint.org/
[cors]: https://img.shields.io/badge/CORS-E8A87C?style=for-the-badge&logo=c&logoColor=8B4000
[cors-url]: https://github.com/expressjs/cors
[js-cookie]: https://img.shields.io/badge/JS_Cookie-D2B48C?style=for-the-badge&logo=javascript&logoColor=8B4513
[js-cookie-url]: https://www.npmjs.com/package/js-cookie
[bcrypt]: https://img.shields.io/badge/bcrypt-90EE90?style=for-the-badge&logo=bloglovin&logoColor=2A9D8F
[bcrypt-url]: https://github.com/kelektiv/node.bcrypt.js
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[nodejs]: https://img.shields.io/badge/node.js-d8e3db?style=for-the-badge&logo=nodedotjs&logoColor=#fffffff
[nodejs-url]: https://nodejs.org/en
[express]: https://img.shields.io/badge/express-c3c6c7?style=for-the-badge&logo=express&logoColor=##9ccce6
[express-url]:https://expressjs.com/
[Passport]: https://img.shields.io/badge/Passport-4e5052?style=for-the-badge&logo=passport&logoColor=#62e371
[Passport-url]: https://www.passportjs.org/
[JSON-web-tokens]:https://img.shields.io/badge/JSON_Web_Tokens-6fd1cb?style=for-the-badge&logo=jsonwebtokens&logoColor=#fffffff
[JSON-web-tokens-url]: https://jwt.io/
[MySQL]: https://img.shields.io/badge/MySQL-ffffff?style=for-the-badge&logo=mysql&logoColor=#fffffff
[MySQL-url]: https://www.mysql.com/
[S3]: https://img.shields.io/badge/Amazon_S3-e5e5e5?style=for-the-badge&logo=amazon-s3
[S3-url]: https://aws.amazon.com/pm/serv-s3/?gclid=EAIaIQobChMIzbHh-_XgiAMVci2tBh0TGjcJEAAYASAAEgL-KvD_BwE&trk=936e5692-d2c9-4e52-a837-088366a7ac3f&sc_channel=ps&ef_id=EAIaIQobChMIzbHh-_XgiAMVci2tBh0TGjcJEAAYASAAEgL-KvD_BwE:G:s&s_kwcid=AL!4422!3!536324434071!e!!g!!amazon%20s3!11346198420!112250793838
