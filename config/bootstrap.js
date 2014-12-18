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
            name: "fred-serv"
        },
        {
            name: "DocGen SMA - LC and EI",
            items: [
                {
                    name: "Welcome letter",
                    user: "a515303",
                    message: "I just committed a change to the welcome letter.",
                    status: "new",
                    documents: [
                        {
                            name: "Polite Salutation"
                            type: "text"
                            content: "The welcome letter now provides a more polite salutation to the end customer."
                        }
                    ]
                },
                {
                    name: "APS Playback",
                    user: "a515303",
                    message: "I just committed a change to the APS Playback.",
                    status: "new",
                    documents: [
                        {
                            name: "Supplemental Information"
                            type: "text"
                            content: "The APS Playback now provides supplemental information to the end customer."
                        }
                    ]
                },
                {
                    name: "Proposal",
                    user: "a515303",
                    message: "I just committed a change to the Proposal.",
                    status: "new",
                    documents: [
                        {
                            name: "SMA Investment Proposal"
                            type: "text"
                            content: "The SMA Investment Proposal - Differentiate the SMA product from our other Managed Product offerings."
                        }
                    ]
                }
            ]
        },
        {
            name: "Change of Registration",
            items: [
                {
                    name: "CoR - Brokerage PDF",
                    user: "a515303",
                    message: "I just committed a change to the Brokerage PDF.",
                    status: "new",
                    documents: [
                        {
                            name: "Brokerage PDF"
                            type: "text"
                            content: "Change of Registration - Changing to an Individual, Joint or Custodial Brokerage account."
                        }
                    ]
                },
                {
                    name: "CoR - Mutual Fund PDF",
                    user: "a515303",
                    message: "I just committed a change to the Mutual Fund PDF.",
                    status: "new",
                    documents: [
                        {
                            name: "Mutual Fund PDF"
                            type: "text"
                            content: "Change of Account Registration- Mutual Fund only Accounts - Changing to an Individual, Joint or Custodial account."
                        }
                    ]
                },
                {
                    name: "Cash Management Account PDF",
                    user: "a515303",
                    message: "I just committed a change to the CMA PDF.",
                    status: "new",
                    documents: [
                        {
                            name: "Polite Salutation"
                            type: "text"
                            content: "Change of Account Registration- Cash Management Account - Changing to an Individual, Joint or Trust accounts."
                        }
                    ]
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
