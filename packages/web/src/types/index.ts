import { sources } from "md4k-constants";

export type ToastProps = { message: string; onUndo?: () => void };

export type ValueOf<T> = T[keyof T];

export type SourceValue = ValueOf<typeof sources>;
