class Engineer{
  
  constructor(githubUN){
    this.githubUN=githubUN;
  }

  getGitHub() {

  };

  getRole(role) {
    return role;
  };

}

module.exports = Engineer;


//In addition to Employee's properties and methods, Engineer will also have the following:
//github—GitHub username
//getGithub()
//getRole()—overridden to return 'Engineer'