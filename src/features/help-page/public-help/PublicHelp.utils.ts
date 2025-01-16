export const questionsAndAnswers = [
  {
    question: 'What is this site?',
    answer:
      "This site was made to make managers lives easier! You won't see much of the functionality if you're not a manager, but behind the login screen this website is a team builder, in short. When you enter your team data, it's associated with your manager and the event you're filling for along with all the other fillers! The manager(s) can then press a button and see the teams best suited for the hour based on who's signed up for that slot. This saves an immense amount of time and effort, as managers take a lot of time to calculate the best teams for their runner. The website really shines with the Cheerful Carnival event type, as it calculated the best teams within a target BP while also displaying ISV. For Marathon, it still is very useful to not have to manually enter the data into a spreadsheet and do all the work there.",
  },
  {
    question: 'Do I need an account?',
    answer:
      "If you're a manager, yes! Managers log in to see their fillers and schedule they've made, and can manage multiple events through this website. If you're here to add your data to their run there's no need to create an account, but you're welcome to so you can poke around and see what's on the inside.",
  },
  {
    question: 'The manager name is right but I keep getting an error :sadface:',
    answer:
      "Well that's rude! Your manager should have provided you with a name that they registered under, it may or may not be the same as their Discord name. If that solves you, great! If you're annoyed reading this because ofc, you already have that, you copy/pasted, here you are: let your manager know and give them your numbers the old way, they can troubleshoot with me and you don't have to worry about a thing! (Sorry if you had issues, you're also super free and encouraged to reach out to me yourself with your experience and how we can make it better.)",
  },
  {
    question:
      'What happens if I entered my numbers wrong? Or my numbers change through the run?',
    answer:
      "Not to worry! Let your manager know, and they'll be happy to edit those for you. They can see everyone's entries to the run and can edit them at any time. I designed it knowing people's numbers change.",
  },
  {
    question: 'Why do you need my Discord name?',
    answer:
      "Your Discord name is used for ease of pinging. The managers need to be able to get ahold of you, and since most communication is done through Discord, it's really nice to have your Discord name where they can access it easily! It's best to either not change your Discord name until the run is complete, or change it back to what you registered with before the run starts.",
  },
  {
    question: 'I mispelled my Discord name / my Discord name changed!',
    answer:
      "Unfortunately because of the way the website is written, we can't allow managers to change your name once you add your stats. We reccomend using the name you registered with so managers can ping you, that's the point of having your Discord name! You can totally change it around after and before, but through the run it makes your manager VERY happy to be able to copy and paste to ping their fillers",
  },
  {
    question:
      "What's my ISV? What's an ISV? Do I need to see a doctor about that?",
    answer:
      "Hahaha, no, no doctors involved. Your ISV is a number that's caculated... Somehow. Don't ask me, ask your manager. (I'm thinking of adding an ISV calculator tho, so keep an eye on our Discord announcements to see if I've got that in a feature poll)",
  },
  {
    question: "I'm a locked out manager, help!",
    answer:
      "I gotchu, no worries. Reach out to me or ping the admins in the Discord and we'll get you sorted. Please know we're in EDT time, so if we don't respond we're probabaly asleep.",
  },
  {
    question:
      'What are those weird purple and white schedule screenshots my manager keeps sending?',
    answer:
      " The core of this site includes a schedule tool! Managers can enter their fillers name into a list (as I imagine you've seen) and save that huge schedule. Normally, events are 200ish hours long so to be able to - at the press of a button - be able to recall the schedule and edit it from there is nice... But that's just an excel spreadsheet, right?? This website takes it one step farther by automatically calculating teams based on the hour! The manager will create the schedule, and when they choose, they can press a button and see what teams meet their requirments for that hour based on those fillers. Neat, huh? We're not just an excel spreadsheet anymore!",
  },
  {
    question: 'Why the name "StarDash"?',
    answer:
      "I get this a lot from people outside the community, but I think you guys will get why. I was originally going to name it a temporary name of 'Project StartDash' but spaces aren't recommended in coding and I'm lazy, so I went with 'StartDash'. I ended up with a mistype when I made the project folder for the first time, missing the second 't' in 'start', and fell in *love*. The name is so cute!! I think it's a nice nod to the start dash runners do and a reference to the stars that are in the game, as well as the stars behind the scenes~ The runner themselves, their managers and the fillers. The name encapsulates how I feel about the community 💖.",
  },
  {
    question: 'Why does this exist?',
    answer:
      "Like I said before, managers take a lot of time to prep things for their runner. My little sister is heavily involved in the community, and seeing her spreadsheet (that's putting it lightly - ask a manager to see their spreadsheet, it's *wild*) I offered to make this for the community. I don't personally play Project Sekai, but I've been a Miku fan since 2013. I love the effort both managers and runners put into this community, and I wanted to give to something I feel is a needed addition to every run, saving time and energy and perhaps confusion.",
  },
  {
    question: 'Is my data - and my runners data - safe?',
    answer:
      "YES! Managers only ever have access to the fillers that have entered their data with that specific manager's name - try and enter your data to the wrong manager name and you'll get an error. The runner data is entered by the manager themselves, and there is an option to keep the runner nameless while scheduling and using the website - the name defaults to 'Runner'. Getting technical, the database is locked behind a password (a Google suggested one, those be crazy), and all passwords are run through a hash. The way the database is written, it's impossible to log in as manager 'A' and see manager 'B's fillers, as the database queries include the manager name when pushing and pulling back data every time. This ensures there is no possible way for data to fall into the wrong manager's hands. The sensitive pages are also locked behind the login, which I know seems a bit like, well yeah, forehead, of course, but you literally have to be logged in to see anything. There are multiple checks throughout to ensure a user doesn't get into something they're not supposed to see.",
  },
  {
    question:
      'Do managers / runners / fillers have to pay for this?? No one told me!!',
    answer:
      "Short answer, no! I made this in my spare time over about three months, had our team test it in their spare time and have been absorbing all costs myself. I'd like to keep this up long term, but with how much monthly this costs that may not be realistic. I'm hoping people donate to the Patreon to keep us up and running. I'm very happy to cover the costs per month to a point, this is a gift to an amazing community, but I also have bills to pay. So far, to be very forward, our costs have been around 40USD or 60CAD a month without anyone using the database/website but me and the team for testing purposes, meaning that will increase with usage.",
  },
  {
    question: 'What about the domain name?',
    answer:
      "I am the incredibly proud registered owner of the website name StarDash.ca! I purchased it through GoDaddy and fought with Digital Ocean and GoDaddy for about two days to figure out how to get my droplet pointing to this domain. If you have no idea what that meant, t(complicated)dr, I spent two days wanting to yell at a computer since it wasn't doing what I was telling it.",
  },
];
