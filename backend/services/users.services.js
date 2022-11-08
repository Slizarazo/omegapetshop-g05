
class UsersService {

    constructor() {
      this.users = [];
      this.generate();
    }
  
    generate() {
  
    }
  
    create() {
  
    }
  
    find() {
      return this.Users;
    }
  
    findeOne(id) {
      return this.Users.find(item => item.id === id);
    }
  
    update() {
  
    }
  
    delete() {
  
    }
  
  }
  
  module.exports = UsersService;
  