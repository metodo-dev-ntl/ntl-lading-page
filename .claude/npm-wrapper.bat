@echo off
REM Wrapper script to ensure npm commands run in the correct directory
cd /d "C:\Users\Marcia\Dev\lp-castilha-repo" || exit /b 1
npm %*
