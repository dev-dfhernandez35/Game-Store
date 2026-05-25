@echo off
echo Iniciando GameVault Store...
start "Backend - Puerto 3000" cmd /k "cd /d "%~dp0backend" && npm run dev"
timeout /t 2 /nobreak >nul
start "Frontend - Puerto 5173" cmd /k "cd /d "%~dp0frontend" && npm run dev"
echo.
echo Backend:  http://localhost:3000
echo Frontend: http://localhost:5173
echo.
echo Abre http://localhost:5173 en tu navegador
pause
