import Vue from "vue";
import Vuex from "vuex";

import questHandlerData from "./data/quest-handler.js";
import questDialogData from "./data/quest-dialog.js";
import questMapData from "./data/quest-map.js";

Vue.use(Vuex);

// Tech Debt: These should be pulled by the server
export default new Vuex.Store({
  state: {
    tips: null,
    questGiver: {
      assistant: {
        visibility: false,
        roaming: true,
        positionTop: "0px",
        positionLeft: "0px",
        feedback: []
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
    }
  },
  actions: {
    handleFeedback: (context, feedback) => {
      for (var modify of feedback) {
        switch (modify.action) {
          case "changeComponent": {
            context.commit("CHANGE_COMPONENT", modify);
            break;
          }
          case "changeAssistant": {
            context.commit("CHANGE_ASSISTANT", modify);
            break;
          }
          default: {
            console.log("Invalid action");
            break;
          }
        }
      }
    },
    updateTips: (context, tips) => {
      context.commit("UPDATE_TIPS", tips);
    }
  }
});
