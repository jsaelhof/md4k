export const parseRuntime = (runtimeInput?: string | number) => {
  runtimeInput = runtimeInput?.toString();
  let runtime;

  // Convert the runtime input to seconds
  if (!runtimeInput || runtimeInput === "") {
    runtime = null;
  } else {
    const [hours, minutes] = runtimeInput.includes(":")
      ? runtimeInput.split(":").map((s) => parseInt(s))
      : [0, parseInt(runtimeInput)];

    runtime = (hours ? hours * 3600 : 0) + (minutes ? minutes * 60 : 0);
  }

  return runtime;
};
