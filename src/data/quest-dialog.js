const questDialogData = {
  0: {
    header:
      "Hey! Hey, you there! <br/> Where are you looking at? <b>Scroll down</b> and <b>click on me!</b>",
    body: [],
    footer: []
  },
  1: {
    header: "You found me! Excelent, now we can finally continue our Spring!",
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
      "But first...! Do you remember anything about yourself? For example <b> what class are you? <b>",
    body: [],
    footer: []
  },
  3: {
    header: "Well, warlocks are cool... Anyway, let's move on!",
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
            value: 6
          }
        ]
      }
    ]
  },
  4: {
    header: "Of course, but let's stick with the fighter fow now!",
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
            value: 6
          }
        ]
      }
    ]
  },
  5: {
    header:
      "That's right! With a mission to protect the universe from global warming!",
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
            value: 6
          }
        ]
      }
    ]
  },
  6: {
    header:
      "Our task takes us deep into the 'Silicon Valley' where the evil 'Product Owner' have woken up the release process, shaping it into the form of an huge dragon!",
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
            value: 7
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: true
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
  7: {
    header:
      "But wait?!.. What's that?! A pile of rocks blocking our path! <b>What will our rockstar do?</b>",
    body: [],
    footer: []
  },
  8: {
    header:
      "<span style='color:grey; font-style: oblique;'>~As you try to lift the first epic, bugs starts coming out of the old tech debt~</span>",
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
            value: 11
          }
        ]
      }
    ]
  },
  9: {
    header:
      "<span style='color:grey; font-style: oblique;'>~You see as the spirit of your supervisor 'Mierelikee' flies above you! You try to do the same but now you are filled with even more responsibilities~</span>",
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
            value: 11
          }
        ]
      }
    ]
  },
  10: {
    header:
      "<span style='color:grey; font-style: oblique;'>~You fall to the ground and starts crying! From the nearest mountain you notice a senior waving at you, but seems too busy to take any action~</span>",
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
            value: 11
          }
        ]
      }
    ]
  },
  11: {
    header:
      "Well, to tell you the truth I am not so confident that we are going to make it on time. So I was wondering...",
    body: [],
    footer: [
      {
        text: "Next!",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 12
          }
        ]
      }
    ]
  },
  12: {
    header: "Instead of setting a camp tonight, could you work overtime?",
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
            value: 13
          }
        ]
      },
      {
        text: "Whatever",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 13
          }
        ]
      }
    ]
  },
  13: {
    header: "Excelent! That's what I wanted to hear! Oh, wait a moment...",
    body: [],
    footer: [
      {
        text: "Oh well...",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 14
          },
          {
            item: "questHandler",
            action: "changeComponent",
            property: "visibility",
            value: true
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
  14: {
    header:
      "Nevermind! The dragon is here!!! He seems mad and wish to speak with you!",
    body: [],
    footer: []
  },
  15: {
    header: "Yes! We pet the dragon!",
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
            value: 18
          }
        ]
      }
    ]
  },
  16: {
    header: "No. We can't fight the dragon. He has the key to production!",
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
            value: 18
          }
        ]
      }
    ]
  },
  17: {
    header:
      "No. We can't outrun the dragon. He will gets us before our next Spring",
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
            value: 18
          }
        ]
      }
    ]
  },
  18: {
    header:
      "Anyway! Let's see how well you have done. I'm pretty sure it's going to be great!",
    body: [],
    footer: [
      {
        text: "Submit & Continue",
        description: "",
        correct: "NA",
        feedback: [
          {
            item: "questResult",
            action: "submitResult"
          },
          {
            item: "questDialog",
            action: "changeComponent",
            property: "visibility",
            value: false
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
  }
};
export default questDialogData;
