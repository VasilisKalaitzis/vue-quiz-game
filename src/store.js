import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Tech Debt: These should be pulled by the server
export default new Vuex.Store({
  state: {
    questGiver: {
      data: [
        {
          assistant: {
            visibility: false,
            roaming: true,
            positionTop: "0px",
            positionLeft: "0px",
            feedback: []
          }
        }
      ]
    },
    questHandler: {
      visibility: false,
      data: [
        {
          header: "What is your Class?",
          body: [
            {
              text: "Warrior",
              description: "You are a warrior",
              correct: true,
              feedback: [
                {
                  item: "questDialog",
                  action: "changeData",
                  value: 0
                }
              ]
            },
            {
              text: "Wizard",
              description: "You are a wizzard Harry!",
              correct: true,
              feedback: [
                {
                  item: "questDialog",
                  action: "changeData",
                  value: 1
                }
              ]
            }
          ],
          footer: []
        },
        {
          header: "Angry rocks are falling",
          body: {
            text: "I'm going to climb them",
            description: "Are you sure about that?!",
            correct: true,
            feedback: [
              {
                item: "questDialog",
                action: "changeData",
                value: 0
              }
            ]
          },
          footer: []
        }
      ]
    },
    questDialog: {
      visibility: true,
      data: [
        {
          header:
            "Hey! Hey, you there! <br/> Where are you looking at? <b>Scroll down</b> and <b>click on me!</b>",
          body: [],
          footer: []
        },
        {
          header: "dialog2",
          body: [],
          footer: [
            {
              text: "Previous",
              description: "",
              correct: true,
              feedback: [
                {
                  item: "questDialog",
                  action: "changeData",
                  value: 0
                },
                {
                  item: "questHandler",
                  action: "changeData",
                  value: 0
                }
              ]
            },
            {
              text: "Next",
              description: "",
              correct: true,
              feedback: [
                {
                  item: "questDialog",
                  action: "changeData",
                  value: 0
                },
                {
                  item: "questHandler",
                  action: "changeData",
                  value: 0
                }
              ]
            }
          ]
        }
      ]
    },
    questMap: {
      data: [
        {
          assistant: {
            visibility: true,
            roaming: false,
            positionTop: "90%",
            positionLeft: "50%",
            feedback: [
              {
                item: "questDialog",
                action: "changeData",
                value: 0
              },
              {
                item: "questMap",
                action: "changeData",
                value: 0
              },
              {
                item: "questGiver",
                action: "changeVisibility",
                value: true
              }
            ]
          }
        }
      ]
    }
  },
  mutations: {
    HANDLE_FEEDBACK: (state, feedback) => {}
  },
  actions: {}
});
