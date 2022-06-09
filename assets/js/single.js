var issueContainerE1 = document.querySelector("#issues-container");

var getRepoIssues = function(repo) {
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    console.log(repo);
    fetch(apiUrl).then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(data) {
              //pass response data to dom function
              displayIssues(data);
            
          });
        }
        else {
          alert("There was a problem with your request!");
        }
      });
};
var displayIssues = function(issues) {
    if (issues.length === 0) {
        issueContainerEl.textContent = "This repo has no open issues!";
        return;
      } 
for (var i = 0; i < issues.length; i++) {
    var issueE1 = document,createElement("a");
    issueE1.classList = "list-item flex-row justify-space-between align-center";
    issueE1.setAttribute("href", issues[i].html_url);
    issueEl.setAttribute("target", "_blank");
    

    // create span to hold issue title
    var titleEl = document.createElement("span");
    titleEl.textContent = issues[i].title;
    // append to container
    issueE1.appendChild(titleEl);

    //create a type element
    var typeE1 = document.createElement("span");

    // check if the issue is an actual issue or a pull request
    if (issues[i].pull_request) {
        typeE1.textContent ="(Pull request)"

    }else {
        typeE1.textContent = "(Issue)"
    }

    //apend to container
    issueE1.appendChild(typeE1);
    issueContainerE1.appendChild(issueE1);

}
}

getRepoIssues("facebook/react");