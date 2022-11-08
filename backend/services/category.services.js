const faker = require('faker');

class CategoryService {

  constructor() {
    this.category = [];
    this.generate();
  }

  generate() {

  }

  create() {

  }

  find() {
    return this.category;
  }

  findeOne(id) {
    return this.category.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = CategoryService;
