# RA Empilhadeiras - Website Institucional

Website institucional moderno, robusto e responsivo desenvolvido sob medida para a empresa **RA Empilhadeiras**.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 Semântico**: Estrutura acessível, otimizada para SEO e indexação em mecanismos de busca.
- **CSS3 Moderno**: Variáveis de tema (CSS Custom Properties), Grid, Flexbox, efeitos de hover sutis e design responsivo (Mobile-First / Desktop).
- **JavaScript Vanilla**: Sem dependências externas ou frameworks pesados; carregamento instantâneo, compatível nativamente com **GitHub Pages**, Vercel, Netlify ou qualquer hospedagem estática.
- **Identidade Visual**: Amarelo Industrial (`#FFB800`), Preto Carbono (`#0E1013`), Grafite Escuro (`#15181E`) e Branco Puro.

---

## 📂 Estrutura de Arquivos

```
RA SITE 2/
├── index.html                   # Página principal com todas as seções
├── README.md                    # Documentação e guia de publicação
├── css/
│   └── style.css                # Estilização completa, variáveis e responsividade
├── js/
│   ├── config.js                # Central de dados de contato e telefones
│   └── main.js                  # Lógica do menu mobile, modal de orçamento, lightbox e WhatsApp
└── assets/
    └── img/
        ├── logo-ra.png          # Logotipo recortado do cartão oficial
        ├── hyster-oficina.jpg   # Foto real: Hyster 55 em manutenção (Hero/Oficina)
        ├── toyota-galpao.jpg    # Foto real: Toyota 25 em armazém logístico (Locação)
        ├── prensa-pneu.jpg      # Foto real: Prensa hidráulica de pneus maciços
        └── ra-cartao-oficial.jpg # Cartão e identidade oficial RA
```

---

## ⚙️ Como Personalizar os Contatos

Todos os contatos comerciais são centralizados no arquivo **`js/config.js`**.

Por padrão, o arquivo já está configurado com os dados reais identificados no cartão oficial da empresa:
- **WhatsApp**: `(16) 99268-9771`
- **Fixo**: `(16) 3419-9704`
- **Anthony**: `(16) 99129-4888`
- **Douglas**: `(16) 99173-9634`
- **Endereço**: `R. Arthur Rodrigues de Castro, 876 - Jardim São Paulo, São Carlos/SP`

Caso deseje alternar para o modo de placeholders para testes, basta alterar em `js/config.js`:
```javascript
useOfficialCardData: false, // Define se exibe dados reais ou placeholders
```

---

## 🖼️ Como Adicionar Mais Fotos na Galeria

Para adicionar novas fotos reais à galeria no `index.html`:
1. Salve a nova foto na pasta `assets/img/` (exemplo: `nova-foto.jpg`).
2. No arquivo `index.html`, dentro da seção `<div class="gallery-grid">`, adicione o bloco:

```html
<div class="gallery-item" data-img-src="assets/img/nova-foto.jpg" data-img-title="Descrição da Foto">
  <img src="assets/img/nova-foto.jpg" alt="Descrição da Foto">
  <div class="gallery-overlay">
    <span class="gallery-category">Categoria</span>
    <h4 class="gallery-title">Título da Foto</h4>
  </div>
  <div class="gallery-zoom-icon">
    <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
  </div>
</div>
```

---

## 🚀 Como Publicar no GitHub Pages (Passo a Passo)

1. Crie um repositório no seu GitHub (exemplo: `ra-empilhadeiras`).
2. No terminal dentro da pasta deste projeto:
   ```bash
   git init
   git add .
   git commit -m "Site institucional RA Empilhadeiras"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/ra-empilhadeiras.git
   git push -u origin main
   ```
3. No GitHub, acesse as **Settings** (Configurações) do repositório.
4. Na aba lateral esquerda, clique em **Pages**.
5. Em **Source**, selecione a branch `main` e a pasta `/(root)`, e clique em **Save**.
6. Pronto! Em 1 a 2 minutos seu site estará no ar gratuitamente com HTTPS em:
   `https://SEU-USUARIO.github.io/ra-empilhadeiras/`
