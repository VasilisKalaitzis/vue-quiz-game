const questDialogData = {
  0: {
    header:
      "Hello Lindsey and Elodie! You need to <b>scroll down</b> and <b>click on me!</b>",
    body: [],
    footer: []
  },
  1: {
    header:
      "I am here to answer to the two questions of the email!<br> Remember, you have the ability to copy paste the whole text simply by clicking on the white flying bubble! The text should have already been copied!",
    body: [],
    footer: [
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 2
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: true
          }
        ]
      }
    ]
  },
  2: {
    header:
      "So Let's start!<b> Question 1: Please describe your involvement in the development lifecycle (i.e. end to end involvement such as collecting requirement, design, implementation) within your most current role",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 1
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: false
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 3
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 1
          }
        ]
      }
    ]
  },
  3: {
    header:
      "So Let's start!<b> Question 1: Please describe your involvement in the development lifecycle (i.e. end to end involvement such as collecting requirement, design, implementation) within your most current role",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 2
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 0
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 4
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 2
          }
        ]
      }
    ]
  },
  4: {
    header:
      "So Let's start!<b> Question 1: Please describe your involvement in the development lifecycle (i.e. end to end involvement such as collecting requirement, design, implementation) within your most current role",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 3
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 1
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 5
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 3
          },
          {
            item: "questMap",
            action: "changeComponent",
            property: "dataCounter",
            value: 1
          }
        ]
      }
    ]
  },
  5: {
    header:
      "Question 2: Please describe your experience designing or architecting a system or components of a system. Please also include information about the system and/or component(s) (i.e. external- or internal-facing, etc.).",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 4
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 2
          },
          {
            item: "questMap",
            action: "changeComponent",
            property: "dataCounter",
            value: 0
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 6
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 4
          }
        ]
      }
    ]
  },
  6: {
    header:
      "Question 2: Please describe your experience designing or architecting a system or components of a system. Please also include information about the system and/or component(s) (i.e. external- or internal-facing, etc.).",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 5
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 3
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 7
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 5
          }
        ]
      }
    ]
  },
  7: {
    header:
      "Question 2: Please describe your experience designing or architecting a system or components of a system. Please also include information about the system and/or component(s) (i.e. external- or internal-facing, etc.).",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 6
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 4
          }
        ]
      },
      {
        text: "Next",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 8
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 6
          },
          {
            item: "questResult",
            action: "changeComponent",
            property: "visibility",
            value: true
          }
        ]
      }
    ]
  },
  8: {
    header:
      "Question 2: Please describe your experience designing or architecting a system or components of a system. Please also include information about the system and/or component(s) (i.e. external- or internal-facing, etc.).",
    body: [],
    footer: [
      {
        text: "Previous",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 7
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "dataCounter",
            value: 5
          }
        ]
      }
    ]
  }
};
export default questDialogData;
