 <script>
        var repos = {
    "repos": [
        {
            "repoName": "kyclark/tiny_python_projects games and puzzles.",
            "repoDesc": "Code for Tiny Python Projects (Manning, 2020, ISBN 1617297518). Learning Python through test-driven development of ",
            "techStack": "Python"
        },
        {
            "repoName": "Mrinank - Bhowmick / python - beginner - projects",
            "repoDesc": "Explore a collection of beginner - friendly Python projects that can be completed with minimal code.Perfect for learning the basics and im…",
            "techStack": "python"
        },
        {
            "repoName": "COGS108 / Projects",
            "repoDesc": "Final Project materials and description.",
            "techStack": "python"
        },
        {
            "repoName": "sksalahuddin2828 / Python",
            "repoDesc": "Python Projects and Applications with exercise",
            "techStack": "Python"
        },
        {
            "repoName": "garimasingh128 / awesome - python - projects",
            "repoDesc": "Some awesome projects in python!",
            "techStack": "python"
        },
        {
            "repoName": "checkcheckzz / python - github - projects",
            "repoDesc": "Collect and classify python projects on Github(deprecated)",
            "techStack": "python"
        },
        {
            "repoName": "murtazahassan / OpenCV - Python - Tutorials - and - Projects",
            "repoDesc": "An easy to follow course of OpenCV using Python for beginners.",
            "techStack": "Python"
        }
    ]
};


        // Get the repo-container element
        var repoContainer = document.getElementById("repo-container");
        // Iterate over the repositories and populate the HTML
        repos.repos.forEach(function(repo) {
            var repoItem = document.createElement("div");
            repoItem.className = "repo-item";

            var repoName = document.createElement("div");
            repoName.className = "repo-name";
            repoName.textContent = repo.repoName;

            var description = document.createElement("div");
            description.className = "description";
            description.textContent = repo.repoDesc;

            var techStack = document.createElement("div");
            techStack.className = "tech-stack";
            techStack.textContent = repo.techStack;

            repoItem.appendChild(repoName);
            repoItem.appendChild(description);
            repoItem.appendChild(techStack);

            repoContainer.appendChild(repoItem);
        });
</script>