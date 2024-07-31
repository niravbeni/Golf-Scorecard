# Golf Scorecard

A React + TypeScript scoreboard module for a dashboard for TV commentators to use.

## How to view

Open the following link:
www.google.com

## Requirements & Constraints

- Needs to be visually appealing.
- Needs to implement the game's logic correctly.
- Needs to be constrained within a 600px by 600px space.
- Needs to be intuitive and easy to read.

## Features

The toggle buttons to visualize various states (hole progression and player switching).

The scoreboard has a minimal hammer (<img src="./assets/svg/hammer.svg" width="30" height="30" alt="Hammer Icon">) feature implemented.

The scoreboard shows the points scored per hole by each player, current player turn, an indicator of who has the hammer, and visual cues to throws with acceptance (<img src="./assets/svg/tick.svg" width="30" height="30" alt="Tick Icon">) and rejection (<img src="./assets/svg/cross.svg" width="30" height="30" alt="Cross Icon">) modes.

## My Goals

- To create a visually effective yet simple design.
- To prioritize the main information - player names, points, and their total scores (par, distance & remaining hammers were omitted).
- To keep it relatively flat and 2D, to minimize obscuring other dashboard content.
- To keep the design small and compact.
- To make the code modular, robust and relatively responsive to scaling and variation in the data.

## Future Improvements & Tweaks

### Design

- Create color themes for design variations.
- Use a more striking font.
- Add accessibility options.
- Make the design responsive to potential variations in layouts and orientations.
- Emphasize the end of match winner.
- Differentiate the players with more contrast.
- Further investigate edge case game states.

### Development

- Use Redux or some state management tool to deal with more robust datasets.
- Add error handling capabilities.
- Implement useMemo and useCallback for render optimizations.
- Use Storybook for documenting and testing of the designs.
- Implement more robust ESLint and Prettier configs.
