"use client";

import React, { useState, useEffect, JSX } from "react";

interface SegmentedPasswordInputProps {
  length?: number;
  prefill?: Record<number, string>;
  gaps?: number[]; // indexes where gaps should appear
  onChange?: (value: string) => void;
}

const SegmentedPasswordInput = ({
  length = 8,
  prefill = {},
  gaps = [],
  onChange,
}: SegmentedPasswordInputProps) => {
  const [values, setValues] = useState(
    Array.from({ length }, (_, i) => prefill[i] || "")
  );

  const isGap = (index: number) => gaps.includes(index);

  const focusWithCursorAtEnd = (input: HTMLInputElement) => {
    input.focus();
    const length = input.value.length;
    input.setSelectionRange(length, length);
  };

  const focusPrev = (index: number) => {
    let prevIndex = index - 1;
    while (prevIndex >= 0 && isGap(prevIndex)) prevIndex--;
    const prev = document.getElementById(
      `char-${prevIndex}`
    ) as HTMLInputElement;
    if (prev) focusWithCursorAtEnd(prev);
  };

  const focusNext = (index: number) => {
    let nextIndex = index + 1;
    while (nextIndex < length && isGap(nextIndex)) nextIndex++;
    const next = document.getElementById(
      `char-${nextIndex}`
    ) as HTMLInputElement;
    if (next) focusWithCursorAtEnd(next);
  };

  const handleChange = (rawValue: string, index: number) => {
    const value = rawValue.slice(-1); // Always take last typed character
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value) focusNext(index);

    onChange?.(newValues.join(""));
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && values[index] === "") {
      focusPrev(index);
    } else if (e.key === "Backspace" && values[index] !== "") {
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      focusPrev(index);
    }
    if (e.key === "ArrowRight") {
      focusNext(index);
    }
  };

  // 🔥 Auto-focus on mount (first empty input)
  useEffect(() => {
    let firstIndex = 0;
    while (firstIndex < length && (isGap(firstIndex) || values[firstIndex]))
      firstIndex++;
    const firstInput = document.getElementById(
      `char-${firstIndex}`
    ) as HTMLInputElement;
    if (firstInput) firstInput.focus();
  }, [length, values]);

  // Group characters based on gaps
  const groups: JSX.Element[][] = [];
  let currentGroup: JSX.Element[] = [];

  values.forEach((char, i) => {
    if (isGap(i)) {
      if (currentGroup.length) {
        groups.push(currentGroup);
        currentGroup = [];
      }
    } else {
      currentGroup.push(
        <input
          key={i}
          id={`char-${i}`}
          value={char}
          onChange={(e) => handleChange(e.target.value, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-10 border-b uppercase border-gray-400 px-1 md:px-2 py-1 text-center text-lg outline-orange-300 focus:border-b-2 focus:border-orange-300 focus:ring-orange-300"
        />
      );
    }
  });
  if (currentGroup.length) groups.push(currentGroup);

  return (
    <div className="flex flex-wrap justify-center border border-gray-300 rounded-md px-5 pt-5 pb-6 max-md:gap-7">
      {groups.map((group, idx) => (
        <React.Fragment key={idx}>
          <div className="flex gap-3">{group}</div>
          {idx < groups.length - 1 && (
            <div className="w-6 md:w-10" /> // Spacer between groups
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default SegmentedPasswordInput;
