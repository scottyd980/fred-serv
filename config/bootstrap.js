/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
    
    var initial_projects = [
        {
            name: "public-repo"
        },
        {
            name: "hello",
            items: [
                {
                    name: "test item 1",
                    user: "me",
                    message: "test message 1",
                    status: "new"
                },
                {
                    name: "test item 2",
                    user: "me",
                    message: "test message 2",
                    status: "new"
                },
                {
                    name: "test deleted item",
                    user: "me",
                    message: "test deleted message",
                    status: "deleted"
                }
            ]
        }
    ]
    
    Project.count().exec(function (err, count) {
            if (count == 0) Project.create(initial_projects).exec(function (dummy) {});
        });

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
