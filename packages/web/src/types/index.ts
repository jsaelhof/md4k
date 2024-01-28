export type ToastProps = { message: string; onUndo?: () => void };

export type PickOption =
  | { minRuntime: number }
  | { maxRuntime: number }
  | { minRuntime: number; maxRuntime: number }
  | { minAdded: number }
  | { maxAdded: number };
