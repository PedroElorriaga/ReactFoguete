param(
    [string]$mensagem
)

if (-not $mensagem) {
    Write-Host "⚠️  Por favor, Pedrinho insira uma mensagem de commit." -ForegroundColor Yellow
    exit
}

git add .
git commit -m "$mensagem"
git push github main