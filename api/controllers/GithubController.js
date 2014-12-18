/**
 * GithubController
 *
 * @description :: Server-side logic for managing githubs
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function (req, res) {
        sails.log.info("Got a github");
        //sails.log.debug(req.body.head_commit);
        //req.body.repository.name
        //var bogus = "bogus";
        sails.log.debug(req.body.repository.name);
        Project.findByName(req.body.repository.name).exec(function (err, projects) {
            //sails.log.debug(err);
            //sails.log.debug(projects);
            if (projects.length > 0) {
                sails.log.debug("found a project");
                var new_item = {
                    name: req.body.head_commit.id,
                    user: req.body.head_commit.author.username,
                    message: req.body.head_commit.message,
                    status: "new",
                    project: projects[0]
                }
                Item.create(new_item).exec(function (err, item) {
                    sails.log.debug(item);
                });
            } else {
                sails.log.error(req.body.repository.name);
            }
        });
        
        res.send(200, "Thank you for submitting a github webhook.");
    }
};

