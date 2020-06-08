// Create a DVD class.
// This class should have properties for title, director, runtime,
// genre and any otherproperties you think would exist on a dvd.
// There should be methods to get a description of the dvd and a
// method to check if you have enough time to watch the dvd

class DVD {
  constructor(title, director, runtime, isFiction, genre, actors) {
    this.title = title;
    this.director = director;
    this.runtime = runtime;
    this.isFiction = isFiction;
    this.genre = genre;
    this.actors = actors;
  }

  giveDescription() {
    return `${this.title} is directed by ${this.director} and has a runtime of ${this.runtime} minutes.`;
  }

  amountOfTime(time) {
    return time >= this.runtime;
  }
}

const theDeparted = new DVD(
  "The Departed",
  "Steven Spielberg",
  102,
  true,
  "Thriller",
  ["Leonardo diCaprio", "Matt Damon", "Jack Nicholson"]
);

console.log(theDeparted.giveDescription);
