import React, { useState } from "react"; // Importing React and useState hook
import { Button, TextField, Grid, Typography, Box, Container } from "@mui/material"; // Importing Material UI components

function App() {
    // State for Blue and Red Tokens
    const [blueTokens, setBlueTokens] = useState({ count: 0, prefix: "", perRow: 1 }); // State to manage blue tokens
    const [redTokens, setRedTokens] = useState({ count: 0, prefix: "", perRow: 1 }); // State to manage red tokens
    const [generatedTokens, setGeneratedTokens] = useState({ blue: [], red: [] }); // State to store generated tokens

    // Function to Generate Tokens
    const handleGenerate = () => {
        // Function to create an array of token strings
        const generateTokenList = (count, prefix) =>
            Array.from({ length: count }, (_, i) => `${prefix}${i + 1}`); // Generates tokens based on count and prefix

        // Update the state with generated tokens
        setGeneratedTokens({
            blue: generateTokenList(blueTokens.count, blueTokens.prefix),
            red: generateTokenList(redTokens.count, redTokens.prefix),
        });
    };

    // Function to Clear Tokens
    const handleClear = () => {
        // Reset the states for blue and red tokens
        setBlueTokens({ count: 0, prefix: "", perRow: 1 });
        setRedTokens({ count: 0, prefix: "", perRow: 1 });
        setGeneratedTokens({ blue: [], red: [] }); // Clear generated tokens
    };

    // Function to Render Tokens in Grid
    const renderTokens = (tokens, color, perRow) => (
        // Creates a Grid container to display tokens
        <Grid container spacing={1} justifyContent="center" style={{ marginBottom: "20px" }}>
            {tokens.map((token, index) => (
                // Maps through each token to create a Grid item
                <Grid item key={index} xs={12 / perRow}> {/* Adjust column size based on perRow */}
                    <Box
                        sx={{
                            bgcolor: color, // Set background color based on token color
                            color: "white", // Text color is white for visibility
                            padding: "10px", // Padding for box
                            borderRadius: "5px", // Rounded corners
                            textAlign: "center", // Center text alignment
                        }}
                    >
                        {token} {/* Display the token */}
                    </Box>
                </Grid>
            ))}
        </Grid>
    );

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Token Generator</Typography> {/* Main title of the app */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    {/* Input fields for Blue Tokens */}
                    <TextField
                        label="Number of Blue Tokens"
                        type="number"
                        value={blueTokens.count} // Controlled input for count
                        onChange={(e) => setBlueTokens({ ...blueTokens, count: +e.target.value })} // Update count on change
                        fullWidth
                    />
                    <TextField
                        label="Blue Token Prefix"
                        value={blueTokens.prefix} // Controlled input for prefix
                        onChange={(e) => setBlueTokens({ ...blueTokens, prefix: e.target.value })} // Update prefix on change
                        fullWidth
                    />
                    <TextField
                        label="Blue Tokens per Row"
                        type="number"
                        value={blueTokens.perRow} // Controlled input for perRow
                        onChange={(e) => setBlueTokens({ ...blueTokens, perRow: +e.target.value })} // Update perRow on change
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    {/* Input fields for Red Tokens */}
                    <TextField
                        label="Number of Red Tokens"
                        type="number"
                        value={redTokens.count} // Controlled input for count
                        onChange={(e) => setRedTokens({ ...redTokens, count: +e.target.value })} // Update count on change
                        fullWidth
                    />
                    <TextField
                        label="Red Token Prefix"
                        value={redTokens.prefix} // Controlled input for prefix
                        onChange={(e) => setRedTokens({ ...redTokens, prefix: e.target.value })} // Update prefix on change
                        fullWidth
                    />
                    <TextField
                        label="Red Tokens per Row"
                        type="number"
                        value={redTokens.perRow} // Controlled input for perRow
                        onChange={(e) => setRedTokens({ ...redTokens, perRow: +e.target.value })} // Update perRow on change
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Box mt={2}>
                {/* Buttons to generate and clear tokens */}
                <Button variant="contained" color="primary" onClick={handleGenerate} sx={{ marginRight: "10px" }}>
                    Generate
                </Button>
                <Button variant="contained" color="secondary" onClick={handleClear}>
                    Clear
                </Button>
            </Box>
            <Box mt={4}>
                <Typography variant="h6">Blue Tokens</Typography> {/* Section title for Blue Tokens */}
                {renderTokens(generatedTokens.blue, "blue", blueTokens.perRow)} {/* Render blue tokens */}
                <Typography variant="h6">Red Tokens</Typography> {/* Section title for Red Tokens */}
                {renderTokens(generatedTokens.red, "red", redTokens.perRow)} {/* Render red tokens */}
            </Box>
        </Container>
    );
}

export default App; // Exporting the App component for use in other parts of the application

