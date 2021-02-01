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
                  ImageUrl: "./img/portfolio/minesweeper.png",
                  publishedAt: 1448693940000,
                  labels: ["Mine sweeper", "nostalgic", "game"]
            },
            {
                  id: "bookStore",
                  name: "book store",
                  title: "web site for give rate for books",
                  desc: "book web site that give you all the new details and rates",
                  ProjectUrl: "projs/bookStore",
                  ImageUrl: "./img/portfolio/bookstore.png",
                  publishedAt: 1448693940000,
                  labels: ["book", "store", "rate book"],
            },
            {
                  id: "pacman",
                  name: "Pacman",
                  title: "pacman game",
                  desc: "the nostalgic mine sweeper game with lots of feature",
                  ProjectUrl: "projs/pacman",
                  ImageUrl: "./img/portfolio/pacman.png",
                  publishedAt: 1448693940000,
                  labels: ["pacman", "nostalgic", "game"],
            },
      ];
      return projects;
}