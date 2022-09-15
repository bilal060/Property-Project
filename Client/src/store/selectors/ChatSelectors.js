import { createSelector } from "reselect";

const chat = (state) => state.chat;

export const getChatBoxStatus = createSelector(
  [chat],
  (chat) => chat.toggleChatBox
);

export const getNewMessage = createSelector([chat], (chat) => chat.newMessage);
