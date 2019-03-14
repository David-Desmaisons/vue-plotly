function noOp() {}

if (
  typeof window !== "undefined" &&
  typeof window.URL.createObjectURL === "undefined"
) {
  Object.defineProperty(window.URL, "createObjectURL", { value: noOp });
}
