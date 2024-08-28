// components/data.js

const portfolioData = [
    {
        name: 'Project Weather',
        description: "This app allows viewing weather data for the next 7 days. You can use coordinates to see the weather for a specific location. As this is a demo, you can currently add locations by knowing their coordinates. By selecting Tallinn or Bali, you can view the default weather for those locations. This app can be further developed into a fully-featured weather app. Currently, a free API from OpenMeteo is being used.",
        image: 'images/img1.jpg',
        added: '2024-01-31',
        used: "Javascript, React, css, openMeteo api",
        link: "https://indrekhints.github.io/weather/"
    },
    {
        name: 'Project Reicepy Searc',
        description: "The app allows searching among hundreds of recipes. The food category is presented as an icon below. Each recipe opens in a separate module. You can add and remove from favorites. This is a Beta version, and therefore, in the search, you can only use the first letter. For example, typing 'a' in the search will show recipes starting with the letter 'a', and so on. The reason is the free API that allows searching only in this form. It can be changed according to the needs and integrated with a paid API or another similar one.",
        image: 'images/img2.jpg',
        added: '2024-01-31',
        used: "React, Bootstrap, Javascript,  receeipe Api",
        link: "https://indrekhints.github.io/reiceipe-new/"

    },
    {
        name: 'Project Stuff Manager',
        description: " This app allows checking the allocation of data into groups, and data can be rearranged as needed.Currently, Team A, B, C, D are used as examples.Under the 'Teams' link, you can overview the selections and update them as needed.The potential use cases are quite broad.",
        image: 'images/img3.jpg',
        added: '2023-11-21',
        used: "React, Bootstrap, Javascript, Localstorage",
        link: "https://indrekhints.github.io/work_team_app/"
    },
    {
        name: 'Project Quiz',
        description: 'JavaScript quiz, there may be more than one correct answer option.Correct answers are displayed in green, and incorrect ones are in red.At the end, the app displays your results.This app s code can be used to create interactive quizzes.',
        image: 'images/img4.jpg',
        added: '2024-01-10',
        used: "React, Javascript, css",
        link: "https://indrekhints.github.io/quiz/"
    },
    {
        name: 'Project ImageManager',
        description: 'Image Manager just showing Beauty of react oportunyties.',
        image: 'images/img5.jpg',
        added: '2022',
        used: "React, Javascript, css, bootstrap",
        link: "https://indrekhints.github.io/imagemanager/"
    },
];

export default portfolioData;
