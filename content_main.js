import User from './models/user.js';

export function main() {
  const user = User.new({name: 'content_main'});
  console.log(user.greet());
  console.log(
    "Is chrome.runtime available here?",
    typeof chrome.runtime.sendMessage == "function",
  );
}
