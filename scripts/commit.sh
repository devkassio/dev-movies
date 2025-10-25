#!/bin/bash

# 🎬 DevMovies - Script de Commit Automatizado
# Este script facilita commits rápidos e organizados

echo "🎬 DevMovies - Commit Automatizado"
echo "=================================="

# Verificar status
echo "📋 Verificando status do repositório..."
git status

# Perguntar se quer adicionar todos os arquivos
echo ""
read -p "➕ Adicionar todos os arquivos modificados? (y/n): " add_all

if [ "$add_all" = "y" ] || [ "$add_all" = "Y" ]; then
    git add .
    echo "✅ Todos os arquivos adicionados!"
fi

# Mensagem de commit
echo ""
echo "📝 Digite a mensagem do commit (ou pressione Enter para mensagem padrão):"
read commit_message

if [ -z "$commit_message" ]; then
    commit_message="feat: 🎬 Atualizações do projeto DevMovies"
fi

# Fazer commit
echo ""
echo "💾 Fazendo commit..."
git commit -m "$commit_message"

# Push
echo ""
read -p "🚀 Fazer push para GitHub? (y/n): " do_push

if [ "$do_push" = "y" ] || [ "$do_push" = "Y" ]; then
    echo "🌐 Enviando para GitHub..."
    git push origin master
    echo "✅ Push realizado com sucesso!"
fi

echo ""
echo "🎉 Processo concluído!"
echo "📂 Repositório: https://github.com/devkassio/dev-movies"