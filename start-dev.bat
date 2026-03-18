@echo off
echo Limpando processos Node.js...
tasklist | findstr "node.exe" > nul
if %errorlevel%==0 (
    echo Matando processos Node.js existentes...
    taskkill /f /im node.exe > nul 2>&1
)

echo Removendo caches...
if exist ".next" rmdir /s /q ".next" > nul 2>&1
if exist "node_modules\.cache" rmdir /s /q "node_modules\.cache" > nul 2>&1
if exist ".turbo" rmdir /s /q ".turbo" > nul 2>&1

echo Iniciando servidor na porta 3004...
npx next dev --port 3004