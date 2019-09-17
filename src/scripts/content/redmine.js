'use strict';

togglbutton.render(
  'body.controller-issues.action-show h2:not(.toggl)',
  {},
  function (elem) {
    const numElem = $('h2');
    const projectElem = $('h1 .self');
    let description;

    if ($('.toggl-button')) {
      return;
    }

    if (numElem !== null) {
      description = numElem.textContent;
    }

    let project = projectElem && projectElem.textContent.match(/([a-z]{3}[0-9]{3})/);

    if (project) {
      project = project[0];
    }

    const link = togglbutton.createTimerLink({
      className: 'redmine',
      description: description,
      projectName: project,
      tags: [
        'Development - serverside'
      ]
    });

    $('h2').appendChild(link);
  }
);
