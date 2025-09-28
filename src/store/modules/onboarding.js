import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    messages: [],
  }),

  getters: {
    messages: (state) => state.messages,
  },

  mutations: {
    ADD_MESSAGE(state, message) {
      state.messages.push(message);
    },
    UPDATE_LAST_MESSAGE(state, newText) {
      if (state.messages.length > 0) {
        const last = state.messages[state.messages.length - 1];
        last.text = newText;
        last.typing = false;
      }
    },
    CLEAR_MESSAGES(state) {
      state.messages = [];
    },
  },

  actions: {
    async start({ commit, rootState }, website) {
      try {
        const uuid = rootState.auth.user?.id;
        if (!uuid) {
          commit("ADD_MESSAGE", {
            sender: "bot",
            text: "⚠️ User not logged in.",
          });
          return { success: false };
        }

        // call onboarding webhook
        const res = await axios.post(
          "https://n8n.growthshaft.com/webhook/onboarding-webhook",
          { website, uuid }
        );

        if (res.status === 200) {
          commit("CLEAR_MESSAGES");

          // show typing dots immediately
          commit("ADD_MESSAGE", { sender: "bot", typing: true, text: "" });

          // fetch first greeting async
          (async () => {
            try {
              const hiRes = await axios.post(
                "https://n8n.growthshaft.com/webhook/onboarding-webhook-chatbot",
                { uuid, user_message: "hi" }
              );

              if (hiRes.data?.output) {
                commit("UPDATE_LAST_MESSAGE", hiRes.data.output);
              } else {
                commit("UPDATE_LAST_MESSAGE", "👋 Hi, let's get started!");
              }
            } catch (err) {
              console.error("First chatbot message error:", err);
              commit("UPDATE_LAST_MESSAGE", "⚠️ Failed to get first message.");
            }
          })();

          return { success: true };
        }
      } catch (err) {
        console.error("Onboarding start error:", err);
        commit("ADD_MESSAGE", {
          sender: "bot",
          text: "❌ Error submitting website.",
        });
        return { success: false };
      }
    },

    async answer({ commit, rootState }, userInput) {
      try {
        commit("ADD_MESSAGE", { sender: "user", text: userInput });

        const uuid = rootState.auth.user?.id;
        if (!uuid) {
          commit("ADD_MESSAGE", {
            sender: "bot",
            text: "⚠️ User not logged in.",
          });
          return { finished: false };
        }

        // show typing bubble
        commit("ADD_MESSAGE", { sender: "bot", typing: true, text: "" });

        const res = await axios.post(
          "https://n8n.growthshaft.com/webhook/onboarding-webhook-chatbot",
          { uuid, user_message: userInput }
        );

        if (res.data?.output) {
          commit("UPDATE_LAST_MESSAGE", res.data.output);
        } else {
          commit("UPDATE_LAST_MESSAGE", "...");
        }

        // ✅ normalize string/boolean response
        const completed = String(res.data?.onboardingCompleted).toLowerCase() === "true";
        if (completed) {
          return { finished: true };
        }

        return { finished: false };
      } catch (err) {
        console.error("Chatbot error:", err);
        commit("UPDATE_LAST_MESSAGE", "❌ Error contacting chatbot.");
        return { finished: false };
      }
    },
  },
};
