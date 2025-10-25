# 🎬 DevMovies - Script de Commit Automatizado PowerShell
# Este script facilita commits rápidos e organizados no Windows

Write-Host "🎬 DevMovies - Commit Automatizado" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Verificar status
Write-Host "📋 Verificando status do repositório..." -ForegroundColor Yellow
git status

# Perguntar se quer adicionar todos os arquivos
Write-Host ""
$addAll = Read-Host "➕ Adicionar todos os arquivos modificados? (y/n)"

if ($addAll -eq "y" -or $addAll -eq "Y") {
    git add .
    Write-Host "✅ Todos os arquivos adicionados!" -ForegroundColor Green
}

# Mensagem de commit
Write-Host ""
Write-Host "📝 Digite a mensagem do commit (ou pressione Enter para mensagem padrão):" -ForegroundColor Yellow
$commitMessage = Read-Host

if ([string]::IsNullOrEmpty($commitMessage)) {
    $commitMessage = "feat: 🎬 Atualizações do projeto DevMovies"
}

# Fazer commit
Write-Host ""
Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push
Write-Host ""
$doPush = Read-Host "🚀 Fazer push para GitHub? (y/n)"

if ($doPush -eq "y" -or $doPush -eq "Y") {
    Write-Host "🌐 Enviando para GitHub..." -ForegroundColor Yellow
    git push origin master
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
}

Write-Host ""
Write-Host "🎉 Processo concluído!" -ForegroundColor Green
Write-Host "📂 Repositório: https://github.com/devkassio/dev-movies" -ForegroundColor Cyan
