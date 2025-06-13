# palette-enum

This project demonstrates how to use a palette enum feature field to select a palette from a list of predefined palettes.

## Setup

1. Create a new testnet project in the Creator Dashboard (https://create.artblocks.io/)
2. Script type and version: `p5` and `1.9.0`
3. Update project script to the contents of the `project-script.js` file
4. Upload feature-fields.json to the Project Features Fields section
5. Update Features script to the contents of the `features-script.js` file
6. Add a PostParams with the following settings:
   - Name: `Palette`
   - Type: `enum`
   - Options: `Midnight Citrus`, `Electric Bloom`, `Forest Neon`
   - Editor roles: 'Token owner'

The tokens will now enable token owners to edit their tokens and modify their token's palette to align with their taste.

## Mint a token to test editing the palette

Minting a token is no different than any other project. Simply configure a set price minter, and mint a token via the Creator Dashboard on testnet.

Activate the project on testnet by clicking the `Activate` button in the Creator Dashboard.

## Edit the palette

Editing a token's PostParams is easily accomplished via the Art Blocks Website.

1. Navigate to the token in the Artist Staging Site (https://artist-staging.artblocks.io) - you may search for your project after your project is set to active
2. Connect your wallet that has appropriate permissions to edit the token (e.g. the token owner)
3. Click on the `Customize Artwork` button
4. Edit the `Palette` field, and preview your new selection
5. Click on the `Submit` button
6. Return to the token generator to see the new palette (may take a bit to update, especially on testnet)
