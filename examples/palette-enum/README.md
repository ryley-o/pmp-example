# palette-enum

This project demonstrates how to use a palette enum feature field to select a palette from a list of predefined palettes.

## Setup

1. Create a new project in the PMP Creator Dashboard
2. Script type and version: `p5` and `1.9.0`
3. Update Project script to the contents of the `project-script.js` file
4. Upload feature-fields.json to the Project Features Fields section
5. Update Features script to the contents of the `features-script.js` file
6. Add a PMP Parameter with the following settings:
   - Name: `Palette`
   - Type: `enum`
   - Options: `Midnight Citrus`, `Electric Bloom`, `Forest Neon`
   - Editor roles: 'Token owner'

The tokens will now enable token owners to edit their tokens and modify their token's palette to align with their taste.

## Editing a token

Eventually, this will be done through the Art Blocks Frontend.

Until then, you can edit a token's palette directly on etherscan:

1. Navigate to etherscan, pmp contract at `0x00000000a78e278b2d2e2935faebe19ee9f1ff14`
2. Click on the `Write Contract` button
3. Connect your token owner wallet
4. Click on the `configureTokenParams` field
5. Enter the token's core contract address and token ID
6. in pmpInputs, enter `[["Palette",1,"0x0000000000000000000000000000000000000000000000000000000000000000",false,""]]`, where `0x0000...0000` is either 0, 1, or 2, corresponding to the index of the palette in the `options` array in the PMP Configuration
7. Click on the `Transact` button
8. Return to the token in the generator to see the new palette (may take a few minutes to update)
