class Github {
    constructor() {
        this.client_id = '71204df2e9e376abdd82';
        this.client_secret = '87cf9832a8a6f1a960a7a0c68ed4e103a9203681';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

   async getUser(user) {
        try {
            const profileResponse = await axios.get(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const repoResponse = await axios.get(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const profile = await profileResponse.data;
            const repos = await repoResponse.data;

            console.log(profileResponse);
            console.log('Profile: ',profile);
            console.log('Repos: ',repos);

            return {
                // same as profile: profile
                profile,
                repos
            }
        } catch (error) {
            console.log(error);
        }
    }
}