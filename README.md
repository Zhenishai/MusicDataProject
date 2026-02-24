# Music Data Analysis Project

## Overview

This project analyzes music listening data and presents useful insights for each user.

The application processes raw listening events and calculates statistics such as:

- Most listened song
- Most listened artist
- Friday night listening habits
- Longest listening streak
- Songs listened to every day
- Top genres
The focus of this project is **data processing and logic**, not UI design.


## Project Goals

This project demonstrates the ability to:

- Process structured data dynamically
- Handle edge cases correctly
- Write reusable logic functions
- Separate data logic from UI rendering
- Implement accessible semantic HTML
- Write unit tests for non-trivial logic

---

## Technologies Used

- HTML (semantic structure)
- JavaScript (ES Modules)
- Local Data Module (provided `data.js`)
- GitHub for version control
- GitHub Pages / Netlify / Vercel for deployment

---

## How It Works

1. A dropdown allows selecting one of four users.
2. When a user is selected:
   - Listening data is retrieved dynamically.
   - All statistics are calculated from scratch.
   - Results are displayed in semantic HTML sections.
3. If a question does not apply, it is hidden.
4. If a user has no listening data, a clear message is shown.

---

## Data Processing Strategy

The application:

- Groups events by song, artist, or genre
- Counts occurrences
- Calculates total listening time
- Filters events by time (Friday nights)
- Detects consecutive listening streaks
- Computes intersections of songs across multiple days

All calculations are dynamic and do not rely on precomputed values.

---

## Edge Case Handling

The application correctly handles:

- Users with no listening data
- No Friday night listening
- Fewer than three genres
- Multiple songs tied for longest streak
- Songs not listened to every day

---

## Accessibility

The website is built using semantic HTML:

- Proper headings
- `<section>` elements
- `<label>` associated with `<select>`
- No empty elements rendered

The project achieves **100% Lighthouse accessibility score**.

---

## Running Locally

Because ES modules are used, you must serve the project over HTTP.

Example using `http-server`:

```bash
npm install -g http-server
http-server .

📖 Story

As a user,
I want to select a user from a dropdown and view meaningful listening statistics,
So that I can understand that user's music habits based on the provided data.

🎯 Acceptance Criteria

The application displays a dropdown containing four users.

When a user is selected:

The system retrieves listening events dynamically.

All statistics are calculated from the data (not precomputed).

The following insights are displayed (if applicable):

Most listened song (by count)

Most listened song (by time)

Most listened artist (by count)

Most listened artist (by time)

Most listened song on Friday nights (count & time)

Longest consecutive listening streak

Songs listened to every day

Top genres (up to three)

If a question does not apply (e.g., no Friday night listens), it is completely hidden.

If the user has no listening data:

A clear message is displayed.

No questions are shown.

The application uses semantic HTML and achieves 100% Lighthouse accessibility.

At least one non-trivial unit test is implemented.












