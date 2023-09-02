// Define class for Horror Movies
class HorrorMovies {
    constructor(title, rating) {
        this.title =  title; // Store movie title
        this.rating = rating; // Store movie ratings
    }

    //Method to generate movie description by title and rating
    describe() {
        return `${this.title} - Rating: ${this.rating}`; // Return title and movie when called
    }
}

// Define a class for the Menu app
class Menu {
    constructor() {
        this.horrorMovies = []; // Set horrorMovies array as an empty set
    }

    // Method to display menu options
    displayMenu() {
        console.log('Menu:'); // Print 'Menu' in Main Menu
        console.log('1. Create a Horror Movie List'); //  Print 'Create a Horror Movie List' in Main Menu
        console.log('2. View Horror Movie List'); // Print 'View Horor Movie List' from Main Menu
        console.log('3. Delete Horror Movie from List'); // Print 'Delete Horror Movie from List' in Main Menu
        console.log('4. Exit');
    }

    createHorrorMovie() {
        const title = prompt('Enter movie title:'); // Prints user input of movie title
        const rating = parseFloat(prompt('Enter the movie rating')); // Prints user input of rating. ParseFloat accepts decimal ratings for rating
        const movie = new HorrorMovies(title, rating); // Create new instance of HorrorMovie using title and rating as argument
        this.horrorMovies.push(movie); // Add new horror movie to array horrorMovies
        console.log(`${movie.describe()} added to the list`); // Displays confirmation of added movie to array 
    }
    
    //Method to view all horror movies in list
    viewHorrorMovies() { 
        console.log('List of Horror Movies:'); // Prints 'List of horror Movies:'
        this.horrorMovies.forEach((movie, index) => { // Iterates through all movies in array
            console.log(`${index + 1}. ${movie.describe()}`); // Starting with 1 will print out describe() method with all titles and ratings in array
        });
    }

    // Method to delete a horror movie from the list by index
    deleteHorrorMovie() {
        const index = parseInt(prompt('Enter the index of movie to delete')) -1; // Prompts user to enter index of what movie they want deleted. It's -1 to adjust the index from starting from 0
        if (index >= 0 && index < this.horrorMovies.length) { // Checks if the index choses is a valid choice
            const deletedMovie = this.horrorMovies.splice(index, 1)[0]; // Removes movie from specified index
            console.log(`${deletedMovie.describe()} has been deleted from the list`); // Prints confirmation of removal  
        } else {
            console.log('Invalid index'); // Confirms an invalid option is chose
        }
    } 


    // Method to start the menu
    start() {
        let choice;
        do {
            this.displayMenu(); // Display menu options
            choice = parseInt(prompt('Enter your choice (1-4):')); // Prompot user selection
            switch(choice) {
            case 1: 
                this.createHorrorMovie(); // If 1, then createHorroMovie() is called
                break;
            case 2:
                this.viewHorrorMovies(); // If 2, then viewHorrorMovies() is called
                break;
            case 3:
                this.deleteHorrorMovie(); // If 3, then deleteHorroMovie() is called
                break;
            case 4:
                console.log('Exiting Menu'); // Prints Exiting Menu
                break;
            default:
                console.log('Invalid Selection. Please choose (1-4)'); // Display error if choices outside (1-4)
        }
    } while (choice != 4); // Repeats loop unless 4 is chosen
}
}

const menu = new Menu(); // Create new instance of Menu and store as menu
menu.start(); // Start the menu app by calling start() method

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   