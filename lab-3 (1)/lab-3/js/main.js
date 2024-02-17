document.addEventListener('DOMContentLoaded', function () {
    var resourcesDiv = document.getElementById('resources');
    var showResourcesButton = document.getElementById('show-resources');

    function showResourcesHandler() {
        resourcesDiv.classList.remove('d-none');
    }

    showResourcesButton.addEventListener('click', showResourcesHandler);

    resourcesDiv.addEventListener('click', function (event) {
        if (event.target.tagName !== 'A') {
            event.target.classList.add('fst-italic', 'fw-bold');
        }
        else {
            event.target.classList.add('fw-bold');
            event.target.classList.add('fst-italic');
        }
    });

    resourcesDiv.addEventListener('mouseover', function (event) {
        event.target.classList.add('fw-bold');
        previouslyHoveredLink = event.target;
    });

    resourcesDiv.addEventListener('mouseout', function () {
        if (previouslyHoveredLink) {
            previouslyHoveredLink.classList.remove('fw-bold', 'fst-italic');
            previouslyHoveredLink = null; 
        }
    });
});