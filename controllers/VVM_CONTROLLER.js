class VVMController {
    getHomePage(req, res) {
      res.render('home', { title: 'Home' });
    }
  
    getAboutPage(req, res) {
      res.render('about', { title: 'About' });
    }
  
    getFavoritesPage(req, res) {
      res.render('favorites', { title: 'Favorites' });
    }
  
    getHobbyPage(req, res) {
      res.render('hobby', { title: 'Hobby' });
    }
  
    getContactPage(req, res) {
      res.render('contact', { title: 'Contact' });
    }
  }
  
  module.exports = new VVMController();
  