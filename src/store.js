import Vue from "vue";
import Vuex from "vuex";

import questHandlerData from "./data/quest-handler.js";
import questDialogData from "./data/quest-dialog.js";
import questMapData from "./data/quest-map.js";
import questResultData from "./data/quest-result.js";
import otherPlayerResults from "./data/other_player_results.js";

Vue.use(Vuex);

// Tech Debt: These should be pulled by the server
export default new Vuex.Store({
  state: {
    tips: null,
    correctAnswers: 0,
    wrongAnswers: 0,
    questGiver: {
      assistant: {
        visibility: false,
        roaming: true,
        positionTop: "0px",
        positionLeft: "0px",
        feedback: [
          {
            action: "copyToClipboard"
          }
        ]
      }
    },
    questHandler: {
      visibility: false,
      dataCounter: 0,
      data: questHandlerData
    },
    questDialog: {
      visibility: true,
      dataCounter: 0,
      data: questDialogData
    },
    questResult: {
      visibility: false,
      dataCounter: 0,
      data: questResultData,
      resultCompared: null
    },
    questMap: {
      dataCounter: 0,
      assistant: {
        visibility: true,
        roaming: false,
        positionTop: "90%",
        positionLeft: "50%",
        feedback: [
          {
            item: "questMap",
            action: "changeAssistant",
            property: "visibility",
            value: false
          },
          {
            item: "questGiver",
            action: "changeAssistant",
            property: "visibility",
            value: true
          },
          {
            item: "questDialog",
            action: "changeComponent",
            property: "dataCounter",
            value: 1
          },
          {
            action: "copyToClipboard"
          }
        ]
      },
      data: questMapData
    }
  },
  mutations: {
    CHANGE_COMPONENT: (state, payload) => {
      state[payload.item][payload.property] = payload.value;
    },
    CHANGE_ASSISTANT: (state, payload) => {
      state[payload.item].assistant[payload.property] = payload.value;
    },
    UPDATE_TIPS: (state, tips) => {
      state["tips"] = tips;

      //for mobile, clear the tips after 2 seconds
      setInterval(function() {
        if (state["tips"] != "" && state["tips"] == tips) {
          state["tips"] = "";
        }
      }, 2500);
    },
    CORRECT_ANSWER_RECEIVED: state => {
      state["correctAnswers"]++;
    },
    WRONG_ANSWER_RECEIVED: state => {
      state["wrongAnswers"]++;
    },
    SUBMIT_RESULT: (state, resultCompared) => {
      state["questResult"].resultCompared = resultCompared;
    }
  },
  actions: {
    handleFeedback: (context, feedback) => {
      for (var modify of feedback) {
        switch (modify.action) {
          case "copyToClipboard": {
            /* Get the text field */
            var copyText = document.getElementById("textToCopy");
            /* Select the text field */
            copyText.select();
            /* Copy the text inside the text field */
            document.execCommand("copy");
            /* Alert the copied text */
            context.commit(
              "UPDATE_TIPS",
              "Your text has been copied to the clipboard!"
            );
            break;
          }
          case "changeComponent": {
            context.commit("CHANGE_COMPONENT", modify);
            break;
          }
          case "changeAssistant": {
            context.commit("CHANGE_ASSISTANT", modify);
            break;
          }
          case "submitResult": {
            let correctAnswers = context.state.correctAnswers;
            let wrongAnswers = context.state.wrongAnswers;
            let otherPlayerResults = require("./data/other_player_results.js");

            let resultCompared = otherPlayerResults.overallPerformance(
              0,
              0,
              correctAnswers,
              wrongAnswers
            );
            context.commit("SUBMIT_RESULT", resultCompared.toFixed(2));
          }
          default: {
            console.log("Invalid action");
            break;
          }
        }
      }
    },
    handleAnswer: (context, isAnswerCorrect) => {
      switch (isAnswerCorrect) {
        case true: {
          console.log("correct!");
          context.commit("CORRECT_ANSWER_RECEIVED");
          break;
        }
        case false: {
          console.log("wrong!");
          context.commit("WRONG_ANSWER_RECEIVED");
          break;
        }
        default: {
          break;
        }
      }
    },
    updateTips: (context, tips) => {
      context.commit("UPDATE_TIPS", tips);
    },
    submitResult: (context, resultCompared) => {
      context.commit("SUBMIT_RESULT", resultCompared);
    }
  }
});
