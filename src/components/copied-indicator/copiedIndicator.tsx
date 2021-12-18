import React from "react";
import { TCopiedIndicatorProps } from "./copiedIndicator.types";

export default function CopiedIndicator({
  copied,
  displayCode,
}: TCopiedIndicatorProps) {
  return (
    <>
      {copied
        ? " 🙌 Copied to clipboard!  🙌"
        : displayCode
        ? "Hint - click to copy to clipboard"
        : ""}
    </>
  );
}
