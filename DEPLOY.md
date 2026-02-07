# Guia de Deploy Manual (GitHub + Vercel)

Como as ferramentas de linha de comando (`gh` e `vercel`) não estão instaladas, você precisará fazer o processo em duas etapas simples: subir o código para o GitHub e depois conectar à Vercel.

## 1. Subir o código para o GitHub

1.  Acesse [github.com/new](https://github.com/new) e crie um novo repositório (dê um nome simples, ex: `rocha-tecnologia-site`).
    *   **Não** marque as opções de adicionar README, .gitignore ou License (já temos isso localmente).
2.  Após criar, o GitHub vai te mostrar uma tela com comandos. Copie os comandos da seção **"…or push an existing repository from the command line"**.
3.  Eles devem se parecer com isso (substitua `SEU-USUARIO` e `SEU-REPOSITORIO` pelos seus):

    ```bash
    git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
    git branch -M main
    git push -u origin main
    ```

4.  Abra o terminal neste projeto e cole/rode esses comandos um por um.
    *   Se pedir login/senha, use suas credenciais do GitHub.

## 2. Publicar na Vercel

1.  Acesse [vercel.com/new](https://vercel.com/new).
2.  Em "Import Git Repository", certifique-se de que sua conta do GitHub está conectada.
3.  Procure pelo repositório que você acabou de criar (`rocha-tecnologia-site`) e clique em **Import**.
4.  Na tela de configuração:
    *   **Framework Preset**: Vite (deve detectar automaticamente).
    *   **Root Directory**: Deixe como `./` (padrão).
    *   **Build command**: `npm run build` (padrão).
    *   **Output directory**: `dist` (padrão).
    *   **Install command**: `npm install` (padrão).
5.  Clique em **Deploy**.

A Vercel vai construir o site e te dar um link (ex: `rocha-tecnologia-site.vercel.app`). Esse é o link que você pode mandar para o ChatGPT analisar ou compartilhar com clientes.
