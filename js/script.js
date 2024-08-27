document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector('.mobile-menu-button i');
    const mobileMenu = document.getElementById('mobile-menu');

    // Initially hide the mobile menu
    mobileMenu.style.display = 'none';

    menuButton.addEventListener('click', function () {
        // Toggle the visibility of the mobile menu
        if (mobileMenu.style.display === 'none') {
            mobileMenu.style.display = 'block';
            menuButton.classList.remove('bx-menu');
            menuButton.classList.add('bx-x');
        } else {
            mobileMenu.style.display = 'none';
            menuButton.classList.remove('bx-x');
            menuButton.classList.add('bx-menu');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Function to open the modal
    function openModal(modalId) {
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    }

    // Function to close the modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Event listener for opening modals
    document.querySelectorAll('.service-box').forEach(function(box) {
        box.addEventListener('click', function() {
            var modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Event listener for closing modals
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('close')) {
            closeModal(event.target.closest('.modal'));
        } else if (event.target.classList.contains('modal')) {
            closeModal(event.target);
        }
    });
});
