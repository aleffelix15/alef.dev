@echo off
chcp 65001 >nul
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;C:\Program Files\Git\cmd;%PATH%"
echo.
echo ============================================
echo   SUBINDO PORTFOLIO PARA O GITHUB
echo   github.com/aleffelix15/alef.dev
echo ============================================
echo.
cd /d "c:\Users\aleff\OneDrive\Documents\alef.dev"

echo Configurando URL do repositório...
git remote set-url origin https://github.com/aleffelix15/alef.dev.git

echo Adicionando modificacoes ao Git...
git add .

echo Criando commit...
git commit -m "fix: resolve lint errors, remove unused imports and polish portfolio code"

echo Enviando para o GitHub (main)...
git push -u origin main --force

echo.
if %ERRORLEVEL%==0 (
    echo SUCESSO! Codigo enviado com sucesso para o GitHub (alef.dev)!
) else (
    echo ERRO ao enviar para o GitHub.
)
echo.
pause
