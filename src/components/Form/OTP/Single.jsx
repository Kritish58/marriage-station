import React, { memo, useRef, useLayoutEffect } from "react";
import usePrev from "./usePrev";

export function SingleOTPInput({ focus, autoFocus, ...rest }) {
  const inputRef = useRef(null);
  const prevFocus = usePrev(!!focus);
  useLayoutEffect(() => {
    if (inputRef.current) {
      if (focus && autoFocus) {
        inputRef.current.focus();
      }
      if (focus && autoFocus && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus, inputRef]);

  return <input ref={inputRef} {...rest} />;
}

export const Single = memo(SingleOTPInput);
