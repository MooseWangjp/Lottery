'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'This is the first NODE program, I\'d like to change it';
  }
}

module.exports = HomeController;
