export const ChordLibrary = [
    // major triads
    {name: "E Major triad", notes: ["E", "G#", "B"], quality: 'major', type: 'triad'},
    {name: "A Major triad", notes: ["A", "C#", "E"], quality: 'major', type: 'triad'},
    {name: "D Major triad", notes: ["D", "F#", "A"], quality: 'major', type: 'triad'},
    {name: "G Major triad", notes: ["G", "B", "D"], quality: 'major', type: 'triad'},
    {name: "B Major triad", notes: ["B", "D#", "F#"], quality: 'major', type: 'triad'},
    {name: "C Major triad", notes: ["C", "E", "G"], quality: 'major', type: 'triad'},
    {name: "F Major triad", notes: ["F", "A", "C"],quality: 'major', type: 'triad'},
    {name: "Bb Major triad", notes: ["Bb", "D", "F"],quality: 'major', type: 'triad'},
    // minor triads
    {name: "A Minor triad", notes: ["A", "C", "E"],quality: 'minor', type: 'triad'},
    {name: "B Minor triad", notes: ["B", "D", "F#"],quality: 'minor', type: 'triad'},
    {name: "C Minor triad", notes: ["C", "Eb", "G"],quality: 'minor', type: 'triad'},
    {name: "D Minor triad", notes: ["D", "F", "A"],quality: 'minor', type: 'triad'},
    {name: "E Minor triad", notes: ["E", "G", "B"],quality: 'minor', type: 'triad'},
    {name: "F Minor triad", notes: ["F", "Ab", "C"],quality: 'minor', type: 'triad'},
    {name: "G Minor triad", notes: ["G", "Bb", "D"],quality: 'minor', type: 'triad'},
    {name: "C# Minor triad", notes: ["C#", "E", "G#"],quality: 'minor', type: 'triad'},
    {name: "F# Minor triad", notes: ["F#", "A", "C#"],quality: 'minor', type: 'triad'},
    {name: "G# Minor triad", notes: ["G#", "B", "D#"],quality: 'minor', type: 'triad'},
    // minor pentatonics
    {name: "A Minor pentatonic", notes: ["A", "C", "D", "E", "G"],quality: 'minor', type: 'scale'},
    {name: "B Minor pentatonic", notes: ["B", "D", "E", "F#", "A"],quality: 'minor', type: 'scale'},
    {name: "C Minor pentatonic", notes: ["C", "Eb", "F", "G", "Bb"],quality: 'minor', type: 'scale'},
    {name: "C# Minor pentatonic", notes: ["C#", "E", "F#", "G#", "B"],quality: 'minor', type: 'scale'},
    {name: "D Minor pentatonic", notes: ["D", "F", "G", "A", "C"],quality: 'minor', type: 'scale'},
    {name: "E Minor pentatonic", notes: ["E", "G", "A", "B", "D"],quality: 'minor', type: 'scale'},
    {name: "G Minor pentatonic", notes: ["G", "Bb", "C", "D", "F"],quality: 'minor', type: 'scale'},
    {name: "F# Minor pentatonic", notes: ["F#", "A", "B", "C#", "E"],quality: 'minor', type: 'scale'},
    // major pentatonics
    {name: "E major pentatonic", notes: ["E", "F#", "G#", "B", "C#"], quality: "major", type: "scale"},
    {name: "A major pentatonic", notes: ["A", "B", "C#", "E", "F#"], quality: "major", type: "scale"},
    {name: "B major pentatonic", notes: ["B", "C#", "D#", "F#", "G#"], quality: "major", type: "scale"},
    {name: "D major pentatonic", notes: ["D", "E", "F#", "A", "B"], quality: "major", type: "scale"},
    {name: "G major pentatonic", notes: ["G", "A", "B", "D", "E"], quality: "major", type: "scale"},
    {name: "C major pentatonic", notes: ["C", "D", "E", "G", "A"], quality: "major", type: "scale"},
    {name: "F# major pentatonic", notes: ["F#", "G#", "A#", "C#", "D#"], quality: "major", type: "scale"},
    {name: "F major pentatonic", notes: ["F", "G", "A", "C", "D"], quality: "major", type: "scale"},

];

export const KeySignatures = [
    { key: "C",  mode: "major", accidentals: [] },
  
    { key: "G",  mode: "major", accidentals: ["F#"] },
    { key: "D",  mode: "major", accidentals: ["F#", "C#"] },
    { key: "A",  mode: "major", accidentals: ["F#", "C#", "G#"] },
    { key: "E",  mode: "major", accidentals: ["F#", "C#", "G#", "D#"] },
    { key: "B",  mode: "major", accidentals: ["F#", "C#", "G#", "D#", "A#"] },
    { key: "F#", mode: "major", accidentals: ["F#", "C#", "G#", "D#", "A#", "E#"] },
  
    { key: "F",  mode: "major", accidentals: ["Bb"] },
    { key: "Bb", mode: "major", accidentals: ["Bb", "Eb"] },
    { key: "Eb", mode: "major", accidentals: ["Bb", "Eb", "Ab"] },
    { key: "Ab", mode: "major", accidentals: ["Bb", "Eb", "Ab", "Db"] },
    { key: "Db", mode: "major", accidentals: ["Bb", "Eb", "Ab", "Db", "Gb"] }
];

export const basic_mode_spelling = [
    {mode: 'Ionian', spelling: ['R', '2', '3', '4', '5', '6', '7']},
    {mode: 'Dorian', spelling: ['R', '2', 'b3', '4', '5', '6', 'b7']},
    {mode: 'Phrygian', spelling: ['R', 'b2', 'b3', '4', '5', 'b6', 'b7']},
    {mode: 'Lydian', spelling: ['R', '2', '3', '#4', '5', '6', '7']},
    {mode: 'Mixolydian', spelling: ['R', '2', '3', '4', '5', '6', 'b7']},
    {mode: 'Aeolian', spelling: ['R', '2', 'b3', '4', '5', 'b6', 'b7']},
    {mode: 'Locrian', spelling: ['R', 'b2', 'b3', '4', 'b5', 'b6', 'b7']},
]
  
export const KEYS = [
    { key: "C",  prefer: "sharps" },
    { key: "G",  prefer: "sharps" },
    { key: "D",  prefer: "sharps" },
    { key: "A",  prefer: "sharps" },
    { key: "E",  prefer: "sharps" },
    { key: "B",  prefer: "sharps" },
    { key: "F#", prefer: "sharps" },
    { key: "C#", prefer: "sharps" },
  
    { key: "F",  prefer: "flats" },
    { key: "Bb", prefer: "flats" },
    { key: "Eb", prefer: "flats" },
    { key: "Ab", prefer: "flats" }
]; 