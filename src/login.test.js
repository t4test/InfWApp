import LogIn from "./login";

test("Username und Password richtig", () => {
  expect(LogIn("user1", "abc1")).toBe(true);
});

test("Username falsch", () => {
  expect(LogIn("uer", "abc1")).toBe(false);
});

test("Passwort falsch", () => {
  expect(LogIn("user1", "abc")).toBe(false);
});

test("Zuordnung stimmt nicht", () => {
  expect(LogIn("user1", "abc2")).toBe(false);
});
