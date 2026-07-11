# World Cup 2026 - Knockout Matches

A very simple webpage showing the World Cup 2026 semifinals and final:

- Semifinal 1 - Tuesday, July 14, 2026
- Semifinal 2 - Wednesday, July 15, 2026
- Final - Sunday, July 19, 2026

## How to update the team names

Open [`matches.js`](matches.js) - it's the only file you need to touch.

Each match is one entry in the `matches` list, like this:

```js
{
  round: "Semifinal 1",
  day: "Tuesday, July 14, 2026",
  time: "3:00 PM ET",
  venue: "AT&T Stadium, Arlington, TX",
  teamA: "Team A",
  teamB: "Team B",
},
```

Replace `"Team A"` and `"Team B"` with the real team names (in quotes), save the file,
and refresh the page in your browser. That's it - `index.html` and `app.js` don't need
to change. Keep the quotes, commas, and key names (`round`, `day`, `teamA`, etc.)
exactly as they are - only change the text inside the quotes.

**Two updates, not one:** the semifinal teams will be known tonight, but the Final's
`"TBD"` / `"TBD"` can't be filled in until both semifinals are finished (July 15) and
the two winners are known. Come back and edit that entry once they are.

## How to view it

Just open `index.html` in your browser - no installation or build step needed.

## Files

- `index.html` - the page structure. Loads `matches.js` before `app.js` - that order matters.
- `style.css` - all the colors and layout
- `matches.js` - the match data (edit this one)
- `app.js` - reads the `matches` list from `matches.js` and builds the match cards on the page
