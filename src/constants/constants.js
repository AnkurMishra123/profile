export const projects = [
  {
    title: 'Scramble game',
    description: "A simple word scramble game to guess the words within the time limit using the hint provided and options to skip the word.",
    image: '/images/1.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    source: 'https://github.com/AnkurMishra123/scramble_game',
    visit: 'https://js-scramble-game.netlify.app/',
    id: 0,
  },
  {
    title: 'MarkDown Editor',
    description: "A Markdown editor using React and Bootstrap that seamlessly blends simplicity with style for enhanced document creation.",
    image: '/images/2.png',
    tags: ['React', 'BootStrap'],
    source: 'https://github.com/AnkurMishra123/markdown-editor.git',
    visit: 'https://mark-downeditor.netlify.app/',
    id: 1,
  },
  {
    title: 'Motion Alarm',
    description: "I've created a small intresting project that uses Telegram Chat Bot, Python Open CV, and a simple camera setup to detect motion in front of the camera to trigger alarm sound and sends a Telegram notification when 5 consecutive alarm bells are triggered. It helps us to understand how hardware interacts with software.",
    image: '/images/3.png',
    tags: ['Python', 'Open CV'],
    source: 'https://github.com/AnkurMishra123/Alarm-System',
    visit: 'https://github.com/AnkurMishra123/Alarm-System',
    id: 2,
  },
  {
    title: 'Sorting Visualizer',
    description: "I have made this Sorting Visualizer, a dynamic web application built with React. User can Witness the magic of Bubble, Selection, Insertion, Merge, Quick, and Heap sorts in real time action with adjustable speed and size controls or the blocks of data, gaining insights into algorithmic efficiency and complexity in real-time.",
    image: '/images/4.png',
    tags: ['React', 'BootStrap', 'Algorithms'],
    source: 'https://github.com/AnkurMishra123/Sorting_Visualizer',
    visit: 'https://sorting-visualizer1s.netlify.app/',
    id: 3,
  },
  {
    title: 'Web Code Editor',
    description: "This is a clone of Code pin with some improved features, it is an online code editor enabling real-time HTML, CSS, and JavaScript coding with instant previews.",
    image: '/images/5.jpg',
    tags: ['React', 'Material Ui'],
    source: 'https://github.com/AnkurMishra123/Web-Code-Editor.git',
    visit: 'https://webeditor-codepin.netlify.app/',
    id: 4,
  },
  {
    title: 'Sibling Chat',
    description: "This is a simple real time chat application using ChatEngine that allows real time chat services and file transfer with Firebase authentication for Google and Facebook login.",
    image: '/images/6.jpg',
    tags: ['React', 'ChatEngine', 'Firebase', 'Tailwind'],
    source: 'https://github.com/AnkurMishra123/Sibling_chat',
    visit: 'https://sibling-chat.netlify.app/',
    id: 5,
  },
  {
    title: 'WhiteBoard Sharing App',
    description: "This is a whiteboard sharing webpage, with real time chat functionality. The admin can create the room and is allowed with the controls to draw on the board.",
    image: '/images/7.png',
    tags: ['React', 'Socket.Io', 'BootStrap'],
    source: 'https://github.com/AnkurMishra123/White-Board.git',
    visit: 'https://github.com/AnkurMishra123/White-Board.git',
    id: 6,
  },

];

export const TimeLineData = [
  { year: 2019, text: 'Completed My 12th', },
  { year: 2020, text: 'Started my college Journey', },
  { year: 2021, text: 'Started my DSA Journey and Youtube Channel', },
  { year: 2022, text: 'Got Intern as a web Developer', },
  { year: 2023, text: 'Continuing my development Journey', },
];


export const blogs = [
  {
    title: 'Mastering GitHub: A Comprehensive Guide for Beginners',
    description: "Mastering Git and GitHub is essential for collaborating on projects, tracking changes, and contributing to open-source communities. In this blog post, we'll take you through the basics of using GitHub, from setting up your account to collaborating with others.<br/><br/><b>Getting Started with GitHub</b><br/>1. Creating a GitHub Account:Getting Started with GitHub If you don't have a GitHub account yet, head over to GitHub and sign up for a free account. Make sure to choose a username that reflects your identity as a developer.<br><br> 2. Setting Up Git:<br/> Install Git on your local machine.You can download it here.Once installed, configure Git with your username and email using the following commands in your terminal or command prompt:<br/>```bash\nCopy code\ngit config --global user.name 'Your Name'\ngit config--global user.email 'your.email@example.com'\n```<br/>Creating Your First Repository:<br/><br>3. Creating a New Repository:<br/> On the GitHub homepage, click on the '+' sign in the top right corner and select 'New repository.' Give your repository a name, description, and choose whether it should be public or private.Initialize it with a README if you want to start with an initial file.<br/><br/>4. Cloning a Repository:<br/> To work on a project locally, you'll need to clone the repository to your machine. Use the following command, replacing < repository-url > with the URL of your GitHub repository:<br/>```bash\nCopy code\ngit clone < repository - url >\n```<br/>Working with Git<br/><br>5. Branching and Commits:<br/> Create a new branch for your work to avoid directly modifying the main codebase:<br/>```bash\nCopy code\ngit checkout - b new- feature\n```<br/>Make your changes and commit them:\n\n```bash\nCopy code\ngit add.\ngit commit - m 'Added new feature'\n```<br/><br/>6. Pushing Changes:<br/> Once your changes are ready, push them to your GitHub repository:<br/>```bash\nCopy code\ngit push origin new- feature\n```<br/><br><b>Collaborating on GitHub</b><br/><br/>7. Pull Requests:<br/> After pushing changes to your fork or branch, create a pull request on GitHub. Describe the changes and why they should be merged.<br/><br/>8. Forks and Upstreams:<br/> Fork repositories to contribute to open - source projects. Set up an upstream remote to stay updated with the original project:\n\n```bash\nCopy code\ngit remote add upstream < original - repo - url >\ngit fetch upstream\ngit merge upstream / main\n```<br/><br/>9. Issues and Labels:<br/> Report issues for bugs or suggest enhancements. Use labels to categorize and prioritize issues.<br/><br/>Advanced GitHub Features<br/><br/>10. GitHub Actions:<br/> Automate workflows using GitHub Actions for continuous integration and deployment.<br/><br/>11. GitHub Pages:<br/> Host your website directly from your GitHub repository using GitHub Pages.<br/><br/>12. GitHub CLI:<br/> Use the GitHub command - line interface for a more efficient workflow.<br/><br><b>Conclusion</b><br/>Congratulations on completing this GitHub guide! Whether you're a solo developer or part of a collaborative team, mastering GitHub is a valuable skill that will enhance your coding experience. Don't hesitate to explore more advanced features as you become more comfortable.GitHub's extensive documentation and supportive community make it an excellent platform to grow your coding skills.<br/><br/>Remember, the journey of a thousand commits begins with a single push.Happy coding! 🚀",
    image: '/images/b1.png',
    id: 1,
  },


];