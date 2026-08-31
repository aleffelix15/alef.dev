@echo off
chcp 65001 >nul
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;C:\Program Files\Git\cmd;%PATH%"
echo.
echo ============================================
echo   SUBINDO PORTFOLIO PARA O GITHUB
echo   github.com/aleffelix15/-DEV
echo ============================================
echo.
cd /d "c:\Users\aleff\OneDrive\Documents\alef.dev"

echo Atualizando a URL remota do repositório para HTTPS...
git remote set-url origin https://github.com/aleffelix15/-DEV.git

echo Adicionando modificacoes ao Git...
git add .

echo Criando commit...
git commit -m "fix: resolve lint errors, polish components and prepare clean build"

echo Enviando para o GitHub (main)...
git push -u origin main --force

echo.
if %ERRORLEVEL%==0 (
    echo SUCESSO! Codigo enviado com sucesso para o GitHub!
) else (
    echo ERRO ao enviar para o GitHub.
)
echo.
pause
