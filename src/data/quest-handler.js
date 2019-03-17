const questHandlerData = {
  0: {
    header: "What class are you?",
    body: [
      {
        text: "Abyssal warlock",
        description: "Are you a wizard Harry?",
        correct: false,
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
            property: "visibility",
            value: false
          }
        ]
      },
      {
        text: "Overpowered killer monkey",
        description: "Can alter requirements on will?",
        correct: false,
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
            property: "visibility",
            value: false
          }
        ]
      },
      {
        text: "Not so exciting fighter",
        description: "Can you solve some problems?",
        correct: true,
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
            property: "visibility",
            value: false
          }
        ]
      }
    ],
    footer: []
  },
  1: {
    header: "Rocks with tasks are blocking your way",
    body: [
      {
        text: "I am going to lift them one by one",
        description: "But there are deadlines comming up!",
        correct: false,
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
            property: "visibility",
            value: false
          }
        ]
      },
      {
        text: "I am going to use fly",
        description: "The solution to our everyday problems?",
        correct: false,
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 9
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
        text: "I am going to fall down and cry for help",
        description: "The client will never know!",
        correct: true,
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 10
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: false
          }
        ]
      }
    ],
    footer: []
  },
  2: {
    header:
      "Furious Dragon with breath that spits defects and wings that can reopen tickets",
    body: [
      {
        text: "Pet the dragon",
        description: "He is cute to my eyes!",
        correct: true,
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 15
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
        text: "Fight the dragon",
        description: "But the deadlines are already here!",
        correct: false,
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 16
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
        text: "Run for your life",
        description: "Remember that pile of rock behind us?",
        correct: false,
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 17
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: false
          }
        ]
      }
    ],
    footer: []
  }
};
export default questHandlerData;
