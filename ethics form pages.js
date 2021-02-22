Survey
    .StylesManager
    .applyTheme("default");

var json = {
  "pages": [
    {
      "name": "Section1",
      questions: [
        {
            type: "html",
            name: "info",
            html: "<h2>S1 Research Details</h2>"
        }, {
            name: "name",
            type: "text",
            title: "Name of Researcher(s):",
            placeHolder: "Insert your full name here.",
            isRequired: true
        }, {
            name: "schoolDepartment",
            type: "text",
            title: "School or Professional service department:",
            placeHolder: "Insert your school or professional service department here.",
            isRequired: true
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Email:",
            placeHolder: "Insert your email here.",
            isRequired: true,
            validators: [
                {
                    type: "email"
                }
            ]
        }, {
            name: "contactNumber",
            type: "text",
            title: "Contact number:",
            placeHolder: "Insert your contact number here.",
            isRequired: true
        }, {
            name: "projectTitle",
            type: "text",
            title: "Project Title:",
            placeHolder: "Insert the title of your project here.",
            isRequired: true
        }, {
            name: "startDate",
            type: "text",
            inputType: "date",
            title: "Start Date:",
            isRequired: true
        }, {
            name: "projectDuration",
            type: "text",
            title: "Duration of Project:",
            placeHolder: "Insert the duration of your project here.",
            isRequired: true
        }, {
            name: "funding",
            type: "text",
            title: "Is anybody funding this research? (Amount and Source):",
            placeHolder: "If anyone is funding research please input both the amount and source in here, if not leave blank.",
            isRequired: false
        }, {
            type: "radiogroup",
            name: "researchType",
            title: "Type of Research:",
            isRequired: true,
            colCount: 5,
            choices: [
                "UG",
                "Taught PG",
                "Masters",
                "Doctoral Student",
                "Staff"
            ]
          }
        ],
    }, {
      "name": "Section2",
      questions: [
        {
            type: "html",
            name: "info",
            html: "<h2>S2 Screening Questions</h2><p>Please answer the following questions to identify the level of risk in the proposed project:</p>"
        }, {
            type: "boolean",
            name: "q1",
            title: "Please answer the question",
            label: "Is the research clinical in nature?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q2",
            title: "Please answer the question",
            label: "Is the research in a health care setting?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q3",
            title: "Please answer the question",
            label: "Is the research investigating socially or culturally 'controversial' topics (for example pornography, extremist politics, or illegal activities)?",
            isRequired: true
        }
      ],
    }, {
      "name": "Section3A",
      questions: [
        {
          type: "html",
          name: "info",
          html: "<h2>S3A Details of Project</h2><p>In this section please provide details of your project and outline the data collection methods, how participant consent will be given as well as details of storage and dissemination.</p>"
        }
      ]
    }, {
      "name": "Section3B",
      questions: [
        {
          type: "html",
          name: "info",
          html: "<h2>S3B Identification and Mitigation of Potential Risks</h2><p>This section is designed to identify any realistic risk to the participants and how you propose to deal with it.</p>"
        }
      ]
    }, {
      "name": "Section3C",
      questions: [
        {
          type: "html",
          name: "info",
          html: "<h2>S3C Justification of High Risk Project</h2><p>If you answered 'yes' to the screening questions 1-5 this section asks for justification on the choice of research topic and methodology. The reviewers have the right to refer high risk applications to the Research Integrity Committee for approval.</p>"
        }
      ]
    }, {
      "name": "FinalPage",
      questions: [
        {
          type: "html",
          name: "info",
          html: "<h2>Declaration</h2>"
        }, {
          type: "html",
          name: "info",
          html: "<h2>Checklist</h2><p>All applicants require the following to be submitted with the application form</p>"
        }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

var app = new Vue({
    el: '#surveyElement',
    data: {
        survey: survey
    }
});
