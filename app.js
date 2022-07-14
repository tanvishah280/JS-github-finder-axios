// Intantiate GitHub
const github = new Github;

// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (event) => {
    // Get input text
    const userText = event.target.value;

    if (userText !== '') {
        // Make HTTP call

        const test = async () => {
            const response = await github.getUser(userText);

            console.log(await response);
            // console.log(response.profile);
            if (response === undefined) {
                // show alert
                ui.showAlert('User not found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(response.profile);
                ui.showRepos(response.repos);
            }
        }
        test();
    } else {
        // clear profile
        ui.clearProfile();
    }

})
