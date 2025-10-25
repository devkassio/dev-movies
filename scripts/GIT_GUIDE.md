# 🎬 DevMovies - Configurações Git Úteis

## ⚙️ Aliases Git Recomendados

Para facilitar o uso do Git, adicione estes aliases ao seu `.gitconfig`:

```bash
# Adicionar aliases úteis
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
git config --global alias.pushf 'push --force-with-lease'
git config --global alias.pom 'push origin main'
git config --global alias.puom 'pull origin main'
```

## 🚀 Comandos Rápidos para DevMovies

### Commit Rápido

```bash
# Adicionar, commitar e fazer push em um comando
git add . && git commit -m "feat: 🎬 atualizações" && git push origin main
```

### Verificar Status

```bash
git st  # em vez de git status
```

### Push Rápido

```bash
git pom  # em vez de git push origin main
```

### Pull Rápido

```bash
git puom  # em vez de git pull origin main
```

## 📋 Scripts Disponíveis

1. **`scripts/commit.sh`** - Script Bash para Linux/Mac
2. **`scripts/commit.ps1`** - Script PowerShell para Windows

### Como usar no Windows:

```powershell
# Executar script PowerShell
.\scripts\commit.ps1

# Ou usar diretamente no PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Como usar no Linux/Mac:

```bash
# Dar permissão e executar
chmod +x scripts/commit.sh
./scripts/commit.sh
```

## 🔑 Configuração de Credenciais

### Token GitHub (Recomendado)

1. Vá para GitHub → Settings → Developer settings → Personal access tokens
2. Gere um novo token com permissões de repo
3. Use o token como senha quando solicitar credenciais

### SSH (Alternativa)

```bash
# Gerar chave SSH
ssh-keygen -t ed25519 -C "kassioxis@icloud.com"

# Adicionar ao ssh-agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Adicionar chave pública ao GitHub
cat ~/.ssh/id_ed25519.pub
```

## 🛠️ Troubleshooting

### Problema: Credenciais

```bash
# Limpar credenciais salvas
git config --global --unset credential.helper
git config --global credential.helper store
```

### Problema: Push rejeitado

```bash
# Pull primeiro, depois push
git pull origin master
git push origin master
```

### Problema: Conflitos

```bash
# Resolver conflitos e continuar
git add .
git commit -m "fix: resolve conflicts"
git push origin master
```

## 📞 Suporte

Se tiver problemas, execute:

```bash
git status
git log --oneline -5
git remote -v
```

E compartilhe a saída para diagnóstico.
