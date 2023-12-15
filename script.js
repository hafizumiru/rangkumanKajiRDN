document.addEventListener("DOMContentLoaded", function() {
    // Get all content elements and store them in an array
    var contentElements = document.querySelectorAll('.content-element');

    // Get all navigation links
    var navLinks = document.querySelectorAll('.navbar a');

    // Function to show a specific content element
    function showContent(targetContentId) {
        // Hide all content elements
        contentElements.forEach(function(content) {
            content.style.display = 'none';
        });

        // Show only the target content element
        var targetContent = document.getElementById(targetContentId);
        if (targetContent) {
            targetContent.style.display = 'block';
        }
    }

    // Function to update the content-list
    function updateContentList() {
        // Get the .content-list element
        var contentList = document.querySelector('.content-list');

        // Clear existing content in content-list
        contentList.innerHTML = '';

        // Get the currently displayed content
        var displayedContent = document.querySelector('.content-element[style="display: block;"]');

        // If there is displayed content, find its sub-content headings and add them to the content-list
        if (displayedContent) {
            var subContentHeadings = displayedContent.querySelectorAll('.sub-content h2');

            subContentHeadings.forEach(function (heading) {
                var listItem = document.createElement('li');
                listItem.textContent = heading.textContent;

                // Add a click event listener to scroll to the corresponding sub-content
                listItem.addEventListener('click', function() {
                    // Scroll smoothly to the sub-content
                    heading.parentElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                });

                // Append the list item to the content-list
                contentList.appendChild(listItem);
            });
        }
    }

    // Add click event listener to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link

            // Get the target content ID from the link's href attribute
            var targetContentId = link.getAttribute('href').substring(1);

            // Show the clicked content
            showContent(targetContentId);

            // Update the content-list
            updateContentList();
        });
    });

    // Show the "Home" content by default on page load
    showContent('home');

    // Call the function initially to populate content-list on page load
    updateContentList();
});
