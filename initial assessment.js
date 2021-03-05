document.getElementById('continueButton').style.display = "none";

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
          "type": "boolean",
          "name": "q1",
          "title": "Please answer the question",
          "label": "Will your project involve people other than yourself (or project team) and your supervisor?",
          "isRequired": true
        }, {
					"type": "boolean",
					"name": "q2",
					"title": "Please answer the question",
					"label": "Will your project involve asking people to complete a questionnaire (survey), interview or usability/beta test?",
					"isRequired": true
				}, {
					"type": "boolean",
					"name": "q3",
					"title": "Please answer the question",
					"label": "Will your project involve observing human behaviour online, using a system/tool or in person?",
					"isRequired": true
				}, {
					"type": "boolean",
					"name": "q4",
					"title": "Please answer the question",
					"label": "Will your project use information (data) that belongs to someone?",
					"isRequired": true
				}, {
					"type": "boolean",
					"name": "q5",
					"title": "Please answer the question",
					"label": "Will your project involve information (data) from social media?",
					"isRequired": true
				}, {
					"type": "boolean",
					"name": "q6",
					"title": "Please answer the question",
					"label": "Will your project use secondary data (e.g. data you have been given from your supervisor) that is not fully anonymised?",
					"isRequired": true
				}, {
					visibleIf: "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
          type: "html",
          name: "info",
          html: "<p>What type of ethics review do I need:</p>"
        }, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q7",
					"title": "Please answer the question",
					"label": "Does the project involve vulnerable people? (For example people under 18 or over 70 years of age, disabled (either physically or mentally), those with learning difficulties, poeple in custody, migrants etc).",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q8",
					"title": "Please answer the question",
					"label": "Is the project investigating socially or culturally 'controversial' topics (for example pornography, extremist politics, or illegal activities)?",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q9",
					"title": "Please answer the question",
					"label": "Is the information gathered from participants of a sensitive or personal nature?",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q10",
					"title": "Please answer the question",
					"label": "Will the project involve deliberately misleading participants (deception) in any way?",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q11",
					"title": "Please answer the question",
					"label": "Will the project require the use of assumed consent rather than informed consent? (For example when it may be impossible to obtain informed consent due to the setting for the research - e.g. observational studies/videoing/photography within a public space)",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q12",
					"title": "Please answer the question",
					"label": "Is there any realistic risk of any participants experiencing either physically or psychological distress or discomfort?",
					"isRequired": true
				}, {
					"visibleIf": "{q1} = True or {q2} = True or {q3} = True or {q4} = True or {q5} = True or {q6} = True",
					"type": "boolean",
					"name": "q13",
					"title": "Please answer the question",
					"label": "Will any covert research method be used?",
					"isRequired": true
				}
    ],

		completedHtml: "<p><h4>Please read the message below, and follow the steps to finish your ethical application.</h4></p>"
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function (result) {
        document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3); //Assigns the results to a div
				document.getElementById('surveyResult').style.display = "none"; //Hides the result div from view

				if (!document.getElementById('surveyResult').textContent.includes('true')) {
					var t = document.createTextNode('No ethics review is required for your project.');
				} else if (document.getElementById('surveyResult').textContent.includes('"q7": true' || '"q8": true' || '"q9": true' || '"q10": true' || '"q11: true' || '"q12": true' || '"q13": true')) {
					var t = document.createTextNode('Your project is "high risk" and as such you will need to contact your supervisor as you may need to complete a full ethics review through the SoC Committee.');
				} else {
					var t = document.createTextNode('Your project is "low risk" and as such you will need to complete the self assessment on this website. Please press the button below to create an account.');
					document.getElementById('continueButton').style.display = "block";
				}
				document.getElementById('finalMessage').appendChild(t);
    });

var app = new Vue({
    el: '#surveyElement',
    data: {
        survey: survey
    }
});
