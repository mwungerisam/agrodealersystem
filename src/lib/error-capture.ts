let lastCapturedError: Error | null = null;

if (typeof process !== "undefined") {
  process.on("unhandledRejection", (reason) => {
    lastCapturedError = reason instanceof Error ? reason : new Error(String(reason));
  });

  process.on("uncaughtException", (error) => {
    lastCapturedError = error;
  });
}

export function captureError(error: unknown) {
  lastCapturedError = error instanceof Error ? error : new Error(String(error));
}

export function consumeLastCapturedError(): Error | null {
  const err = lastCapturedError;
  lastCapturedError = null;
  return err;
}
