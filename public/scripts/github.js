class GitHub {
  async getUsers(searchUser) {
    try {
      const responseProfile = await fetch("/.netlify/functions/getUser", {
        method: "POST",
        body: JSON.stringify({ user: searchUser }),
      });

      const responseRepos = await fetch("/.netlify/functions/getRepo", {
        method: "POST",
        body: JSON.stringify({ user: searchUser }),
      });

      const profile = await responseProfile.json();
      const repos = await responseRepos.json();

      return {
        profile,
        repos,
      };
    } catch (err) {
      console.log(err);
    }
  }
}
