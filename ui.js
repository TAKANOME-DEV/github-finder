class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Show User Profile
  showProfile(user) {
    const createAt = this.formatDate("YYYY-MM-DD", user.created_at);

    this.profile.innerHTML = `
      <div class="card card-body bg-primary mt-4">
        <div class="row">
          <div class="col-md-3">
            <img
              src="${user.avatar_url}"
              alt="${user.name}"
              class="rounded img-fluid mb-3"
            />
            <a
              href="${user.html_url}"
              target="_blank"
              class="btn btn-lg btn-secondary w-100 mb-4"
              >View Profile</a
            >
          </div>
          <div class="col-md-9">
            <ul class="list-group list-group-horizontal-md flex-fill mb-4">
              <li class="list-group-item badge bg-info m-1">
                Public Repos : ${user.public_repos}
              </li>
              <li class="list-group-item badge bg-warning m-1">
                Public Gists : ${user.public_gists}
              </li>
              <li class="list-group-item badge bg-success m-1">
                Followers : ${user.followers}
              </li>
              <li class="list-group-item badge bg-secondary m-1">
                Following : ${user.following}
              </li>
            </ul>
            <ul class="list-group">
              <li class="list-group-item">
                <span class="btn btn-outline-info btn-sm">Name</span>
                  <i class="fas fa-arrow-alt-circle-right mx-4"></i>
                <span class="btn btn-outline-success btn-sm">${user.name}</span>
              </li>
              <li class="list-group-item">
                <span class="btn btn-outline-info btn-sm">Company</span>
                  <i class="fas fa-arrow-alt-circle-right mx-4"></i>
                <span class="btn btn-outline-success btn-sm">${user.company}</span>
              </li>
              <li class="list-group-item">
                <span class="btn btn-outline-info btn-sm">Website</span>
                  <i class="fas fa-arrow-alt-circle-right mx-4"></i>
                <span class="btn btn-outline-success btn-sm">${user.blog}</span>
              </li>
              <li class="list-group-item">
                <span class="btn btn-outline-info btn-sm">Location</span>
                  <i class="fas fa-arrow-alt-circle-right mx-4"></i>
                <span class="btn btn-outline-success btn-sm">${user.location}</span>
              </li>
              <li class="list-group-item">
                <span class="btn btn-outline-info btn-sm">Member Since</span>
                  <i class="fas fa-arrow-alt-circle-right mx-4"></i>
                <span class="btn btn-outline-success btn-sm">${createAt}</span>
              </li>
            </ul>
          </div>
        </div>
    </div>
    <h2 class="mt-3">Latest Repos</h2>
    <div id="repos"></div>
    `;
  }

  // Show User Latest Repos
  showRepos(repos) {
    let output = "";

    repos.map((repo) => {
      output += `
      <div class="card card-body mb-2 bg-primary">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
            <ul class="list-group list-group-horizontal-sm flex-fill">
              <li class="list-group-item badge bg-info m-1">Stars : ${repo.stargazers_count}</li>
              <li class="list-group-item badge bg-warning m-1">
                Watchers : ${repo.watchers_count}
              </li>
              <li class="list-group-item badge bg-success m-1">Forks : ${repo.forks_count}</li>
              <li class="list-group-item badge bg-secondary m-1">Language : ${repo.language}</li>
            </ul>
          </div>
        </div>
      </div>
      `;
    });

    document.getElementById("repos").innerHTML = output;
  }

  // Show Alert If User Exist
  showAlert(className1, className2) {
    this.clearAlert();

    const card = document.querySelector(".card");
    const input = document.querySelector(".form-control");
    const span = document.createElement("span");

    span.className = className1;

    if (className2 === "error") {
      input.style.borderColor = "red";
      span.innerHTML = `<i class="fas fa-times ${className2}"></i>`;
    } else {
      input.style.borderColor = "green";
      span.innerHTML = `<i class="fas fa-check ${className2}"></i>`;
    }

    card.insertBefore(span, input);
  }

  // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector(".isValid");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = "";
  }

  // Format Date : Go to https://gist.github.com/polygonplanet/7952234
  formatDate(template, date) {
    var specs = "YYYY:MM:DD:HH:mm:ss".split(":");
    date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
    return date
      .toISOString()
      .split(/[-:.TZ]/)
      .reduce(function (template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
  }
}
