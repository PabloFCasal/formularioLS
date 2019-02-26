// Variables
const tweetsList = document.getElementById('lista-tweets');



// Event listeners

eventListeners();

function eventListeners() {
     
    // When the form is submmitted
    document.querySelector('#formulario').addEventListener('submit', addTweet);
    

};

// Functions

// Add tweet from the form
function addTweet(e) {
    e.preventDefault(e);
    
    // Read tweet content
    const tweet = document.getElementById('tweet').value;

    // Delete tweet button
    const deleteButton = document.createElement('a');
    deleteButton.classList = 'delete-tweet';
    deleteButton.innerText = 'X';


    // Tweet creation and adiction to the tweets list
    const li = document.createElement('li');
    li.innerText = tweet;

    // Adding delete button
    li.appendChild(deleteButton);
    tweetsList.appendChild(li);




    
};
 
