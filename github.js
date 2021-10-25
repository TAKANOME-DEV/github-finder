class GitHub {
  constructor() {
    this.client_id = "Iv1.c9758433fc251de4";
    this.client_secret = "e76ad5bdebb214910dba519acd0c1c8b3f57fddb";
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
