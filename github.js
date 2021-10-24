class GitHub {
  constructor() {
    this.client_id = process.env.CLIENT_ID;
    this.client_secret = process.env.CLIENT_SECRET;
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUsers(user) {
    try {
      const responseProfile = await fetch(
        `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

      const responseRepos = await fetch(
        `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
      );

      const profile = await responseProfile.json();
      const repos = await responseRepos.json();

      return {
        profile,
        repos,
      };
    } catch (err) {
      console.log("Error : ", err);
    }
  }
}
