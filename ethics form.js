Survey
    .StylesManager
    .applyTheme("default");

var json = {
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
        }, {
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
        }, {
            type: "boolean",
            name: "q4",
            title: "Please answer the question",
            label: "Will any covert research method be used?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q5",
            title: "Please answer the question",
            label: "Will the research involve deliberately misleading participants (deception) in any way?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q6",
            title: "Please answer the question",
            label: "Does the research involve staff or students within the University?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q7",
            title: "Please answer the question",
            label: "Does the research involve vulnerable people? (For example people under 18 or over 70 years of age, disabled (either physically or mentally), those with learning difficulties, people in custody, migrants etc).",
            isRequired: true
        }, {
            type: "boolean",
            name: "q8",
            title: "Please answer the question",
            label: "Is the information gathered from participants of a sensitive or personal nature?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q9",
            title: "Please answer the question",
            label: "Is there any realistic risk of any participants experiencing either physical or psychological distress or discomfort?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q10",
            title: "Please answer the question",
            label: "Have you identified any potential risks to the researcher in carrying out the research? (for example physical/emotional/social/economic risks?)",
            isRequired: true
        }, {
            type: "boolean",
            name: "q11",
            title: "Please answer the question",
            label: "Is there a possible conflict of interest between researcher and participant that would affect the voluntary nature of the participation, e.g. managerial influence, Research using current students as participants?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q12",
            title: "Please answer the question",
            label: "Will the research require the use of assumed consent rather than informed consent? (For example when it may be impossible to obtain informed consent due to the setting for the research – e.g. observational studies/videoing/photography within a public space)",
            isRequired: true
        }, {
            type: "boolean",
            name: "q13",
            title: "Please answer the question",
            label: "Is there any risk to respondents’ anonymity in any report/thesis/publication from the research, even if real names are not used?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q14",
            title: "Please answer the question",
            label: "Will any payment or reward be made to participants, beyond reimbursement or out-of-pocket expenses?",
            isRequired: true
        }, {
            type: "boolean",
            name: "q15",
            title: "Please answer the question",
            label: "Does the research require external ethics clearance? (For example from the NHS or another institution)",
            isRequired: true
        }, {
            type: "boolean",
            name: "q16",
            title: "Please answer the question",
            label: "Does the research involve the use of secondary datasets?",
            isRequired: true
        }, {
          type: "html",
          name: "info",
          html: "<h2>S3A Details of Project</h2><p>In this section please provide details of your project and outline the data collection methods, how participant consent will be given as well as details of storage and dissemination.</p>"
        }, {
          name: "projectOverview",
          type: "comment",
          title: "Please give a 300 word overview of the research project",
          placeHolder: "Insert your overview here.",
          isRequired: true,
            validators: [
                {
                    type: "text",
                    minLength: 20
                }
            ]
        }, {
          type: "html",
          name: "info",
          html: "<h3>Data Collection</h3>"
        }, {
          name: "q3a1",
          type: "text",
          title: "How will you collect and analyse the research data? (please outline all methods e.g. questionnaires/focus groups/internet searches/literature searches/interviews/observation)",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a2",
          type: "text",
          title: "Who will be the participants in the research?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a3",
          type: "text",
          title: "Where will the data will be gathered (e.g. in the classroom/on the street/telephone/online)",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a4",
          type: "text",
          title: "Please describe your selection criteria for inclusion of participants in the study",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a5",
          type: "text",
          title: "If your research is based on secondary data, please outline the source, validity and reliability of the data set",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          type: "html",
          name: "info",
          html: "<h3>Consent and Participation Information</h3>"
        }, {
          name: "q3a6",
          type: "text",
          title: "How will you invite research participants to take part in the study? (e.g letter/email/asked in lecture)",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a7",
          type: "text",
          title: "How will you explain the nature and purpose of the research to participants?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a8",
          type: "text",
          title: "How will you record obtaining informed consent from your participants?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          type: "html",
          name: "info",
          html: "<h3>Data storage and Dissemination</h3>"
        }, {
          name: "q3a9",
          type: "text",
          title: "How and in what format will data be stored? And what steps will be taken to ensure data is stored securely?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a10",
          type: "text",
          title: "Who will have access to the data?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a11",
          type: "text",
          title: "Will the data be anonymised so that files contain no information that could be linked to any participant?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a12",
          type: "text",
          title: "How long will the data be kept?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a13",
          type: "text",
          title: "What will be done with the data at the end of the project? ",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a14",
          type: "text",
          title: "How will the findings be disseminated?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          name: "q3a15",
          type: "text",
          title: "Will any individual be identifiable in the findings?",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          type: "html",
          name: "info",
          html: "<h2>S3B Identification and Mitigation of Potential Risks</h2><p>This section is designed to identify any realistic risk to the participants and how you propose to deal with it.</p>"
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          type: "matrixdropdown",
            name: "individuals",
            title: "Does this research project involve working with potentially vulnerable individuals?",

            columns: [
                {
                  name: "using",
                  title: "Will this project involve the group?",
                  choices: [
                      "Yes", "No"
                  ],
                  cellType: "radiogroup",
                  isRequired: true
                }, {
                    name: "comment",
                    title: "Details (for example programme student enrolled on, or details of children’s age/care situation, disability)",
                    cellType: "comment"
                }
            ],
            rows: [
                "Students at Napier",
                "Staff at ENU",
                "Children under 18",
                "Elderly (over 70)",
                "Disabled",
                "Migrant workers",
                "Prisoners / people in custody",
                "Learning difficulties"
            ]
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          name: "q3b2",
          type: "text",
          title: "If you are recruiting children (under 18 years) or people who are otherwise unable to give informed consent, please give full details of how you will obtain consent from parents, guardians, carers etc.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          name: "q3b3",
          type: "text",
          title: "Please describe any identified risks to participants or the researcher as a result of this research being carried out.",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          name: "q3b4",
          type: "text",
          title: "Please describe what steps have been taken to reduce these identified risks? (for example providing contact details for appropriate support services (e.g. University Counselling, Samaritans), reminding participants of their right to withdraw and/or not answering questions, or providing a full debriefing to participants and understanding the responsibility of the researcher when dealing with confidential and sensitive information).",
          placeHolder: "Insert your answer here.",
          isRequired: true
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          name: "q3b5",
          type: "text",
          title: "If you plan to use assumed consent rather than informed consent please outline why this is necessary.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True or {q7} = True or {q8} = True or {q9} = True or {q10} = True or {q11} = True or {q12} = True or {q13} = True or {q14} = True or {q15} = True or {q16} = True",
          name: "q3b6",
          type: "text",
          title: "If payment or reward will be made to participants please justify that the amount and type are appropriate (for example the amount should not be so high that participants would be financially coerced into taking part, or that the type of reward is appropriate to the research topic).",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True",
          type: "html",
          name: "info",
          html: "<h2>S3C Justification of High Risk Project</h2><p>If you answered 'yes' to the screening questions 1-5 this section asks for justification on the choice of research topic and methodology. The reviewers have the right to refer high risk applications to the Research Integrity Committee for approval.</p>"
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True",
          name: "q3c1",
          type: "text",
          title: "If you have answered yes to question 1, please give a full description of all medical procedures to be used within the research and provide evidence that the project has obtained NHS ethical approval.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True",
          name: "q3c2",
          type: "text",
          title: "If you have answered yes to question 2, please give a full description of the health care setting and what steps have been taken to reduce any potential risks and describe how you have gained permission from the Health Care Organisation.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True",
          name: "q3c3",
          type: "text",
          title: "If you have answered yes to questions 3 (research into a controversial topic), please provide a justification for your choice of research topic, and describe how you would deal with any potential issues arising from researching that topic.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True",
          name: "q3c4",
          type: "text",
          title: "If you have answered yes to questions 4 or 5 (use of deception or covert research methods) please provide a justification for your choice of methodology, and state how you will mitigate the risks associated with these approaches.",
          placeHolder: "Insert your answer here.",
          isRequired: false
        }, {
          type: "html",
          name: "info",
          html: "<h2>Declaration</h2>"
        }, {
            type: "checkbox",
            name: "dec1",
            title: "I confirm that I have considered the ethical risks arising from this project and have provided accurate information and the research will be conducted in the manner described.",
            isRequired: true,
            colCount: 1,
            choices: [
                ""
            ]
        }, {
          type: "html",
          name: "info",
          html: "<h3>AND</h3>"
        }, {
            type: "checkbox",
            name: "dec2",
            title: "I consider that this project has no significant ethical implications that requires the attention of the Research Integrity Committee.",
            isRequired: false,
            colCount: 1,
            choices: [
                ""
            ]
        }, {
          type: "html",
          name: "info",
          html: "<h3>OR</h3>"
        }, {
            type: "checkbox",
            name: "dec3",
            title: "I consider that this project may have significant ethical implications that requires the attention of the Research Integrity Committee.",
            isRequired: false,
            colCount: 1,
            choices: [
                ""
            ]
        }, {
          type: "matrixdropdown",
            name: "individuals",
            title: "Signatures and Dates",

            columns: [
                {
                  name: "signatures",
                  title: "Signatures:",
                  cellType: "text",
                  isRequired: true
                }, {
                    name: "dates",
                    title: "Date Signed:",
                    cellType: "text",
                    inputType: "date",
                    isRequired: true
                }
            ],
            rows: [
                "Researcher Signature:",
                "Director of Studies/Supervisor/Principal Investigator Signature:"
            ]
        }, {
          type: "html",
          name: "info",
          html: "<h2>Checklist</h2><p>All applicants require the following to be submitted with the application form</p>"
        }, {
          type: "html",
          name: "info",
          html: "<p>Either checkboxes or file upload will be here</p>"
        }
  ],

  completedHtml: "<p><h4>Your application has been successfully completed, the supervisor will return to you with a response.</h4></p>"
};

window.survey = new Survey.Model(json);
survey.onComplete.add(function (sender, options) {
  //var user_id = <?php echo $user_id?>;
  var xhr = new XMLHttpRequest();
  var changed = JSON.stringify(sender.data);
  xhr.open("POST", "submit.php",true);
  console.log(changed);
  xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  xhr.send(changed);
  
  
});

//just for testing NEED TO BE DELETED IN FULL VERSION!!!!!!
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
