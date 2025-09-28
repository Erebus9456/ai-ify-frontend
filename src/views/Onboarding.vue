<template>
  <div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
    <div class="w-full max-w-md relative z-10">
      
      <!-- Toast -->
      <transition name="fade">
        <div
          v-if="toast.visible"
          class="fixed top-4 right-4 bg-red-500 text-white px-4 py-3 rounded-xl shadow-lg z-50"
        >
          {{ toast.message }}
        </div>
      </transition>

      <!-- Welcome -->
      <div v-if="step === 'welcome'" class="text-center space-y-8">
        <h1 class="text-4xl font-bold text-white">Welcome to Ai-Ify</h1>
        <p class="text-gray-300 text-lg">
          Let's get your helpers up and running.
        </p>
        <button
          @click="step = 'website'"
          class="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-4 px-8 rounded-2xl"
        >
          Get Started
        </button>
      </div>

      <!-- Website Input -->
      <div v-else-if="step === 'website'" class="space-y-6">
        <h2 class="text-2xl font-bold text-white text-center">
          Please enter your website
        </h2>
        <input
          v-model="website"
          type="url"
          placeholder="https://example.com"
          class="w-full px-4 py-3 rounded-xl bg-gray-700 text-white"
          pattern="https://.*"
          required
          @keydown.enter.prevent="submitWebsite"
        />
        <button
          @click="submitWebsite"
          :disabled="!isWebsiteValid || loading"
          class="w-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-3 rounded-xl disabled:opacity-50"
        >
          <span v-if="!loading">Next</span>
          <span v-else>Loading...</span>
        </button>
      </div>

      <!-- Chatbot -->
      <div v-else-if="step === 'chatbot'" class="space-y-4">
        <!-- Heading outside chat window -->
        <h2 class="text-2xl font-bold text-white text-center">
          Let’s setup your account
        </h2>

        <!-- Chat Window -->
        <div class="flex flex-col bg-slate-800 rounded-2xl shadow-lg p-4">
          <div
            ref="chatWindow"
            class="flex-1 overflow-y-auto space-y-4 mb-4 scroll-smooth hide-scrollbar pb-6"
            style="max-height: 500px;"
          >
            <div
              v-for="(msg, idx) in messages"
              :key="idx"
              :ref="setLastMessageRef(idx)"
              :class="[
                'flex',
                msg.sender === 'bot' ? 'justify-start' : 'justify-end'
              ]"
            >
              <div
                :class="[
                  'inline-block px-4 py-2 rounded-2xl max-w-[75%] whitespace-pre-line break-words',
                  msg.sender === 'bot'
                    ? 'bg-gray-700 text-white rounded-bl-none'
                    : 'bg-pink-600 text-white rounded-br-none'
                ]"
              >
                <!-- Show typing bubble -->
                <template v-if="msg.typing">
                  <div class="typing-dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </div>
                </template>
                <template v-else>
                  <span v-html="formatMessage(msg.text)"></span>
                </template>
              </div>
            </div>
          </div>

          <!-- Input -->
          <div class="flex items-center space-x-2">
            <input
              ref="inputRef"
              v-model="currentInput"
              @keydown.enter.prevent="sendMessage"
              type="text"
              placeholder="Type your message..."
              class="flex-1 px-4 py-3 rounded-xl bg-gray-700 text-white"
            />
            <button
              @click="sendMessage"
              class="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold px-4 py-3 rounded-xl"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const step = ref("welcome"); // welcome | website | chatbot
const website = ref("");
const loading = ref(false);
const currentInput = ref("");
const chatWindow = ref(null);
const inputRef = ref(null);
const lastMessage = ref(null);

// Toast state
const toast = ref({
  visible: false,
  message: ""
});

const showToast = (message) => {
  toast.value.message = message;
  toast.value.visible = true;
  setTimeout(() => {
    toast.value.visible = false;
  }, 3000);
};

// validation
const isWebsiteValid = computed(() => website.value.startsWith("https://"));

// messages from store
const messages = computed(() => store.getters["onboarding/messages"]);

// function to set last message ref
const setLastMessageRef = (idx) => (el) => {
  if (idx === messages.value.length - 1) {
    lastMessage.value = el;
  }
};

// robust scroll to bottom helper
const scrollToBottom = async (behavior = "smooth") => {
  await nextTick();
  if (lastMessage.value?.scrollIntoView) {
    lastMessage.value.scrollIntoView({ behavior, block: "end" });
  }
};

// auto-scroll on new messages
watch(messages, async () => {
  await scrollToBottom("smooth");
});

// auto-scroll & focus when entering chatbot
watch(step, async (newStep) => {
  if (newStep === "chatbot") {
    await scrollToBottom("auto");
    if (inputRef.value) inputRef.value.focus();
  }
});

// format messages with markdown-like bold
const formatMessage = (text) => {
  if (!text) return "";
  return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
};

// handle website submission
const submitWebsite = async () => {
  if (!isWebsiteValid.value) return;
  loading.value = true;

  const result = await store.dispatch("onboarding/start", website.value);

  if (result?.success) {
    step.value = "chatbot";
  } else {
    showToast("Oops! Something went wrong. Please try again.");
  }

  loading.value = false;
};

// chatbot handler
const sendMessage = async () => {
  if (!currentInput.value) return;
  const userInput = currentInput.value;
  currentInput.value = "";

  const result = await store.dispatch("onboarding/answer", userInput);

  console.log("Answer result:", result);

  if (result && result.finished === true) {
    // ✅ Mark onboarding complete in auth
    await store.dispatch("auth/completeOnboarding");
    console.log("Auth state before redirect:", store.getters["auth/isAuthenticated"]);

    // ✅ Now user exists in store, guard will let them through
    router.push("/dashboard");
  }
};
</script>

<style scoped>
/* Typing dots animation */
.typing-dots {
  display: flex;
  gap: 6px;
}
.dot {
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  animation: blink 1.25s infinite both;
}
.dot:nth-child(2) {
  animation-delay: 0.15s;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes blink {
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.35;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Hide scrollbar */
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Toast fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
