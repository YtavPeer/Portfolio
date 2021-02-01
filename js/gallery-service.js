'use strict';


var gProjects = _createProjects();


function getProjects() {
      return gProjects;
}


//privates functions
//create the modal of projects;
function _createProjects() {
      var projects = [
            {
                  id: "MineSweeper",
                  name: "Mine Sweeper",
                  title: "Mine Sweeper Game",
                  desc: "the nostalgic mine sweeper game with lots of feature",
                  ProjectUrl: "https://ytavpeer.github.io/Minesweeper/",
                  ImageUrl: "./img/portfolio/minesweeper2.jpeg",
                  publishedAt: 1611503034000,
                  labels: ["Mine sweeper", "nostalgic", "game"]
            },
            {
                  id: "bookStore",
                  name: "book store",
                  title: "start rate your books",
                  desc: "book web site that give you all the new details and rates",
                  ProjectUrl: "https://ytavpeer.github.io/book-store/.",
                  ImageUrl: "./img/portfolio/bookstore2.jpeg",
                  publishedAt: 1611848754000,
                  labels: ["book", "store", "rate book"],
            },
            {
                  id: "pacman",
                  name: "Pacman",
                  title: "pacman game",
                  desc: "the nostalgic mine sweeper game with lots of feature",
                  ProjectUrl: "https://ytavpeer.github.io/Pacman/.",
                  ImageUrl: "./img/portfolio/pacman2.jpeg",
                  publishedAt: 1611071182000,
                  labels: ["pacman", "nostalgic", "game"],
            },
            {
                  id: "ballBoard",
                  name: "ball board game",
                  title: "ball game for fun",
                  desc: "a nostalgic game you need to collect all the balls",
                  ProjectUrl: "https://ytavpeer.github.io/balls-game/.",
                  ImageUrl: "./img/portfolio/ballboard2.jpeg",
                  publishedAt: 1610898407000,
                  labels: ["picture", "guess", "game"],
            },
            {
                  id: "TouchNums",
                  name: "Touch Nums",
                  title: "count the numbers game",
                  desc: "a game for kids- need to complete the count of numbers",
                  ProjectUrl: "https://ytavpeer.github.io/Touch-Nums-game/.",
                  ImageUrl: "./img/portfolio/touchnums2.jpeg",
                  publishedAt: 1610639230000,
                  labels: ["numbers", "nostalgic", "game"],
            },
            {
                  id: "todo",
                  name: "to do list",
                  title: "manage list of todos",
                  desc: "a todo list for manage all our todos",
                  ProjectUrl: "https://ytavpeer.github.io/Todo-App/.",
                  ImageUrl: "./img/portfolio/todos2.jpeg",
                  publishedAt: 1611762451000,
                  labels: ["todo", "list", "manage"],
            },
      ];
      return projects;
}