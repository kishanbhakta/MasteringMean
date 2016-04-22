//Set the 'development' environment configuration object
module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '698177743653545',
    clientSecret: '8440ba1f85b6d905ff84be1912172e5c',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  },
  twitter: {
    clientID: 'vXVWYbhgkRUDx8B38yPH1FmbY',
    clientSecret: 'hvah4bYypDZuf3X2D8srYceMdHFDqSs9gcPA8RzgWUUe64DLv8',
    callbackURL: 'http://localhost:3000/oauth/twitter/callback'
  },
  google: {
    clientID: '188250880143-ght8hjnjt0lgv8hj25tcmv11b7piruv8.apps.googleusercontent.com',
    clientSecret: '44WBEEhqLNkfx2XMCc4ej02N',
    callbackURL: 'http://localhost:3000/oauth/google/callback'
  }
};
