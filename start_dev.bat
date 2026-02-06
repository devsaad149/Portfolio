@echo off
SET "PATH=C:\Program Files\nodejs;%PATH%"
echo Environment Path: %PATH%
echo Checking Node version:
node -v
echo Checking NPM version:
call npm -v
echo Starting development server...
call npm.cmd run dev
if %errorlevel% neq 0 (
    echo Error occurred. Press any key to exit.
    pause
)
npm run dev