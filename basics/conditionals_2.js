if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}

// line 1 --> line 3, block following line 3 gets executed
// line 1 --> line 5, block following line 5 gets executed
// line 8 --> block following line 8 gets executed
// line 8 --> line 10 --> block following line 10 gets executed
// line 8 --> line 10 --> line 12, block following line 12 gets executed
