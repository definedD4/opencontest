#!/bin/bash

concurrently "cd opencontest & npm start" "cd frontend & npm start"