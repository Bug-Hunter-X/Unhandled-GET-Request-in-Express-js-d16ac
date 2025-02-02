# Unhandled GET Request in Express.js

This repository demonstrates a common error in Express.js applications where a route handler fails to send a response to the client, resulting in a hanging request.  The issue arises from omitting a `res.send()` or `res.json()` call within the route handler.

## Problem

The `bug.js` file contains an Express.js server with a GET route handler that correctly logs a message when a request is received, but it neglects to send a response back to the client. This leads to the client's request hanging indefinitely. 

## Solution

The `bugSolution.js` file provides the corrected code. By adding `res.send('Hello from Express!')`, the server now sends a response to the client, resolving the issue. 