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
  
  