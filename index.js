// Init Github && UI
const github = new GitHub();
const ui = new UI();

// Get Users from Github
document.getElementById("searchUser").addEventListener("keyup", async (e) => {
  const searchUser = e.target.value;

  if (searchUser !== "") {
    const data = await github.getUsers(searchUser);

    if (data.profile.message === "Not Found") {
      ui.showAlert("isValid", "error");
    } else {
      ui.showProfile(data.profile);
      ui.showRepos(data.repos);
      ui.showAlert("isValid", "success");
    }
  } else {
    ui.clearProfile();
    ui.clearAlert();
  }
});
