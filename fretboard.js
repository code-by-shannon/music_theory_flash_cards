<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Fretboard Note Trainer (HTML)</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; margin: 20px; }
    .app { max-width: 980px; margin: 0 auto; }
    .top { display: grid; gap: 10px; margin-bottom: 14px; }
    .row { display: flex; gap: 10px; flex-wrap: wrap; align-items: center; }
    .pill { padding: 6px 10px; border: 1px solid #ccc; border-radius: 999px; }
    .msg { min-height: 1.5em; }

    /* Fretboard grid */
    .fretboard-wrap { overflow-x: auto; border: 1px solid #ddd; border-radius: 10px; padding: 12px; }
    .fretboard { display: grid; gap: 6px; min-width: 860px; }
    .fretboard .header {
      display: grid;
      grid-template-columns: 44px repeat(13, 56px);
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
      font-size: 12px;
      color: #555;
    }
    .fretboard .grid {
      display: grid;
      grid-template-columns: 44px repeat(13, 56px);
      gap: 6px;
      align-items: center;
    }
    .string-label { text-align: right; padding-right: 6px; font-weight: 600; color: #333; }
    .cell {
      height: 44px;
      border: 1px solid #ccc;
      border-radius: 10px;
      display: grid;
      place-items: center;
      position: relative;
      user-select: none;
      background: #fff;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      display: none; /* shown by adding .is-target to a cell */
      position: absolute;
      inset: 0;
      margin: auto;
      border: 2px solid #000;
      background: #fff;
    }
    .cell.is-target .dot { display: block; }
    .cell.is-target { border-width: 2px; }

    /* Controls */
    .controls { display: grid; gap: 10px; margin-top: 14px; }
    .keys { display: flex; gap: 8px; flex-wrap: wrap; }
    button { padding: 10px 12px; border: 1px solid #bbb; border-radius: 10px; background: #fff; cursor: pointer; }
    button:disabled { opacity: 0.5; cursor: not-allowed; }
    .big { padding: 10px 16px; font-weight: 700; }
    .preview { font-weight: 700; }
    .muted { color: #666; font-size: 12px; }
    input[type="text"] { padding: 10px 12px; border: 1px solid #bbb; border-radius: 10px; width: 200px; }

    /* Small screens */
    @media (max-width: 600px) {
      .pill { width: 100%; }
      input[type="text"] { width: 100%; }
    }
  </style>
</head>
<body>
  <div class="app">
    <h1>Fretboard Note Trainer</h1>

    <div class="top">
      <div class="row">
        <span class="pill" id="prompt">
          Find the note at: <strong id="prompt_string">D</strong> string, <strong id="prompt_fret">8</strong>th fret
        </span>
        <span class="pill">Mode:
          <select id="mode_select">
            <option value="show-string">Show string + fret</option>
            <option value="show-fret-only">Show fret only (harder)</option>
            <option value="dot-only">Dot only (hardest)</option>
          </select>
        </span>
        <button id="new_target" class="big">New Note</button>
      </div>

      <div class="msg" id="user_feedback" aria-live="polite"></div>

      <div class="row">
        <span class="pill">Current answer: <span class="preview" id="answer_preview">—</span></span>
        <span class="pill muted">Tip: you can keep your A–G + ♯/♭ UI style from the triad app.</span>
      </div>
    </div>

    <div class="fretboard-wrap" aria-label="Guitar fretboard">
      <div class="fretboard">
        <!-- Fret numbers -->
        <div class="header" id="fret_header">
          <div></div>
          <div>0</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
          <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div>
        </div>

        <!-- 6 strings × 13 frets -->
        <div class="grid" id="fret_grid">
          <!-- high e -->
          <div class="string-label">e</div>
          <div class="cell" data-string="e" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="e" data-fret="12"><span class="dot"></span></div>

          <!-- B -->
          <div class="string-label">B</div>
          <div class="cell" data-string="B" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="B" data-fret="12"><span class="dot"></span></div>

          <!-- G -->
          <div class="string-label">G</div>
          <div class="cell" data-string="G" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="G" data-fret="12"><span class="dot"></span></div>

          <!-- D -->
          <div class="string-label">D</div>
          <div class="cell" data-string="D" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="D" data-fret="12"><span class="dot"></span></div>

          <!-- A -->
          <div class="string-label">A</div>
          <div class="cell" data-string="A" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="A" data-fret="12"><span class="dot"></span></div>

          <!-- low E -->
          <div class="string-label">E</div>
          <div class="cell" data-string="E" data-fret="0"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="1"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="2"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="3"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="4"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="5"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="6"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="7"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="8"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="9"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="10"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="11"><span class="dot"></span></div>
          <div class="cell" data-string="E" data-fret="12"><span class="dot"></span></div>
        </div>
      </div>
    </div>

    <div class="controls" aria-label="Answer controls">
      <!-- You can keep your existing A–G + ♯/♭ workflow -->
      <div class="row">
        <div class="keys" id="letter_keys">
          <button type="button" class="note-letter" data-letter="A">A</button>
          <button type="button" class="note-letter" data-letter="B">B</button>
          <button type="button" class="note-letter" data-letter="C">C</button>
          <button type="button" class="note-letter" data-letter="D">D</button>
          <button type="button" class="note-letter" data-letter="E">E</button>
          <button type="button" class="note-letter" data-letter="F">F</button>
          <button type="button" class="note-letter" data-letter="G">G</button>
        </div>

        <div class="keys" id="accidental_keys">
          <button type="button" id="flat_btn" data-accidental="b">♭</button>
          <button type="button" id="sharp_btn" data-accidental="#">♯</button>
          <button type="button" id="clear_btn">Clear</button>
        </div>

        <button type="button" id="submit_btn" class="big">Enter</button>
      </div>

      <!-- Optional: allow typing instead -->
      <div class="row">
        <label class="pill" for="note_input">Or type:</label>
        <input id="note_input" type="text" placeholder="e.g., Bb or F#" autocomplete="off" />
        <button type="button" id="check_typed" class="big">Check</button>
        <span class="muted">Accept both spellings later if you want.</span>
      </div>
    </div>
  </div>

  <!-- No JS here yet. Hook this HTML into your script when you're ready. -->
</body>
</html>
