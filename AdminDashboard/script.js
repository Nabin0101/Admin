const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
    const li = item.parentElement;

    item.addEventListener('click', function () {
        allSideMenu.forEach(i=> {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
    if(window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        if(searchForm.classList.contains('show')) {
            searchButtonIcon.classList.replace('bx-search', 'bx-x');
        } else {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
        }
    }
})





if(window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search');
    searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
    if(this.innerWidth > 576) {
        searchButtonIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if(this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
})

    // Function to load content from an HTML file
    function loadContent(file) {
        console.log('Loading content from:', file);
        fetch(file)
            .then(response => response.text())
            .then(html => {
                console.log('Content loaded successfully:');
                // Replace the content of the main section with the loaded HTML
                document.getElementById('main-content').innerHTML = html;
            })
            .catch(error => console.error('Error loading content:', error));
    }

     // Variable to store the initial content
     let initialContent = '';
     // Function to restore initial content
     function restoreInitialContent() {
        // Restore the initial content stored in the variable
        document.getElementById('main-content').innerHTML = initialContent;
    }

    // Extract the initial content when DOM content is loaded
    initialContent = document.getElementById('main-content').innerHTML;

    // Event listener for the home menu item
    document.querySelector('[data-menu-item="home"]').addEventListener('click', function () {
        restoreInitialContent();
    });

    document.querySelector('[data-menu-item="venue"]').addEventListener('click', function () {
       loadContent('venue.html');
    });

    document.querySelector('[data-menu-item="user"]').addEventListener('click', function () {
        console.log('Venue menu item clicked');
        loadContent('user.html');
    });

    document.querySelector('[data-menu-item="venuerequest"]').addEventListener('click', function () {
        loadContent('venuerequest.html');
    });
    
    


    
    // Add JavaScript to handle the confirmation dialog
        const logoutButton = document.querySelector('.logout');
        const confirmationDialog = document.getElementById('confirmation-dialog');
        const confirmLogoutButton = document.getElementById('confirm-logout');
        const cancelLogoutButton = document.getElementById('cancel-logout');

        // Show the confirmation dialog when the logout button is clicked
        logoutButton.addEventListener('click', function () {
            confirmationDialog.style.display = 'block';
        });

        // Handle the "Yes" button click
        confirmLogoutButton.addEventListener('click', function () {
            window.location.href="Register.html";
            confirmationDialog.style.display = 'none';
        });

        // Handle the "Cancel" button click
        cancelLogoutButton.addEventListener('click', function () {
            confirmationDialog.style.display = 'none';
        });



    //AdminProfile
        let subMenu = document.getElementById("subMenu");
        let profileLink = document.querySelector('.profile');
    
        profileLink.addEventListener('click', function (event) {
            // Toggle the display property to show/hide the dropdown
            subMenu.style.display = (subMenu.style.display === 'none' || subMenu.style.display === '') ? 'block' : 'none';
        });
    
        // Close the dropdown when clicking outside the profile area
        document.addEventListener('click', function (event) {
            if (!profileLink.contains(event.target) && !subMenu.contains(event.target)) {
                subMenu.style.display = 'none';
            }
        });

    



    document.addEventListener("click", function() {

    
        document.querySelector('[data-menu-item="venue"]').addEventListener('click', async function () {
            try {
                const response = await fetch('venue.html');
                if (!response.ok) {
                    throw new Error('Failed to fetch venue data');
                }
                const html = await response.text();
                document.getElementById('main-content').innerHTML = html;
            } catch (error) {
                console.error('Error fetching venue data:', error);
            }
        });
        
        document.querySelector('[data-menu-item="user"]').addEventListener('click', async function () {
            try {
                const response = await fetch('user.html');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const html = await response.text();
                document.getElementById('main-content').innerHTML = html;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }

        });
    });
    //To display total number of  venues
    document.addEventListener('DOMContentLoaded', async function() {
        try {
            const response = await fetch('http://localhost:8080/venue/count');
            if (response.ok) {
                const data = await response.json();
                const venueCount = data.count; // Assuming the API response contains the count
                document.getElementById('venueCount').innerText = venueCount;
            } else {
                console.error('Failed to fetch venue count');
            }
        } catch (error) {
            console.error('Error fetching venue count:', error);
        }
    });

     //To display total number of  users
     document.addEventListener('DOMContentLoaded', async function() {
        try {
            const response = await fetch('http://localhost:8080/user/count');
            if (response.ok) {
                const data = await response.json();
                const userCount = data.count; // Assuming the API response contains the count
                document.getElementById('userCount').innerText = userCount;
            } else {
                console.error('Failed to fetch venue count');
            }
        } catch (error) {
            console.error('Error fetching venue count:', error);
        }
    });

    
//to retrieve username
document.addEventListener('DOMContentLoaded', function () {
    const adminNameElement = document.getElementById("adminName");
    // Retrieve username from sessionStorage
    const username = sessionStorage.getItem('loggedInUsername');
    // Update content of adminNameElement with the retrieved username
    adminNameElement.textContent = username;
});