/**
 * ===================================================================
 * RA EMPILHADEIRAS - JAVASCRIPT PRINCIPAL
 * Interatividades: Menu Mobile, Rolagem Suave, Modal de Orçamento,
 * Lightbox da Galeria, Integração com Configuração e WhatsApp
 * ===================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initAppConfig();
  initHeader();
  initMobileNav();
  initSmoothScroll();
  initModals();
  initGalleryLightbox();
  initForms();
});

/**
 * Aplica os dados configurados em RA_CONFIG nos elementos da página
 */
function initAppConfig() {
  if (typeof RA_CONFIG === 'undefined') return;

  const isReal = RA_CONFIG.useOfficialCardData;
  const c = RA_CONFIG.contacts;
  const p = RA_CONFIG.placeholders;

  const whatsappDisplay = isReal ? c.whatsapp.formatted : p.whatsapp;
  const whatsappRaw = isReal ? c.whatsapp.number : '';
  const phoneDisplay = isReal ? c.phoneFixed.formatted : p.phoneFixed;
  const phoneRaw = isReal ? c.phoneFixed.number : '';
  const emailDisplay = isReal ? c.email.address : p.email;
  const addressDisplay = isReal ? c.address.full : p.address;

  // Atualiza textos
  document.querySelectorAll('[data-config="whatsapp-display"]').forEach(el => el.textContent = whatsappDisplay);
  document.querySelectorAll('[data-config="phone-display"]').forEach(el => el.textContent = phoneDisplay);
  document.querySelectorAll('[data-config="email-display"]').forEach(el => el.textContent = emailDisplay);
  document.querySelectorAll('[data-config="address-display"]').forEach(el => el.textContent = addressDisplay);

  // Atualiza links de ação (WhatsApp e Telefone)
  document.querySelectorAll('[data-config="whatsapp-link"]').forEach(el => {
    if (whatsappRaw) {
      el.href = `https://wa.me/${whatsappRaw}?text=${encodeURIComponent(c.whatsapp.defaultMessage)}`;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.href = "#contato";
    }
  });

  document.querySelectorAll('[data-config="phone-link"]').forEach(el => {
    if (phoneRaw) {
      el.href = `tel:+55${phoneRaw}`;
    } else {
      el.href = "#contato";
    }
  });

  document.querySelectorAll('[data-config="email-link"]').forEach(el => {
    if (isReal) {
      el.href = `mailto:${c.email.address}`;
    } else {
      el.href = "#contato";
    }
  });

  document.querySelectorAll('[data-config="maps-link"]').forEach(el => {
    if (isReal && c.address.googleMapsLink) {
      el.href = c.address.googleMapsLink;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    } else {
      el.href = "#contato";
    }
  });
}

/**
 * Comportamento do Cabeçalho com Scroll
 */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Navegação Mobile (Hambúrguer)
 */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (!hamburger || !navMenu) return;

  const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Fecha o menu ao clicar em qualquer link
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

/**
 * Rolagem Suave com offset preciso
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Gerenciamento do Modal de Orçamento
 */
function initModals() {
  const modal = document.getElementById('quoteModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Gatilhos de Abertura do Modal com serviço opcional
  document.querySelectorAll('[data-open-modal="quote"]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const serviceTarget = btn.getAttribute('data-service') || '';
      const selectField = modal.querySelector('#modalService');
      if (selectField && serviceTarget) {
        selectField.value = serviceTarget;
      }
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/**
 * Visualizador de Imagem Expandida (Lightbox da Galeria)
 */
function initGalleryLightbox() {
  const lightbox = document.getElementById('galleryLightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  document.querySelectorAll('.gallery-item[data-img-src]').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-img-src');
      const title = item.getAttribute('data-img-title') || '';
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = title;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
}

/**
 * Envio de formulários com formatação direta para WhatsApp Comercial
 */
function initForms() {
  const handleFormSubmission = (form, isModal = false) => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]')?.value.trim() || 'Não informado';
      const company = form.querySelector('[name="company"]')?.value.trim() || 'Não informada';
      const phone = form.querySelector('[name="phone"]')?.value.trim() || 'Não informado';
      const service = form.querySelector('[name="service"]')?.value || 'Geral';
      const message = form.querySelector('[name="message"]')?.value.trim() || 'Solicitação de cotação';

      const whatsappTarget = (typeof RA_CONFIG !== 'undefined' && RA_CONFIG.useOfficialCardData)
        ? RA_CONFIG.contacts.whatsapp.number
        : '5516992689771'; // Fallback número do cartão oficial

      const text = `*SOLICITAÇÃO DE ORÇAMENTO - RA EMPILHADEIRAS*\n\n` +
                   `*Nome:* ${name}\n` +
                   `*Empresa:* ${company}\n` +
                   `*Telefone / WhatsApp:* ${phone}\n` +
                   `*Serviço de Interesse:* ${service}\n` +
                   `*Mensagem:* ${message}\n\n` +
                   `_Enviado através do site oficial da RA Empilhadeiras._`;

      const url = `https://wa.me/${whatsappTarget}?text=${encodeURIComponent(text)}`;

      // Se for modal, fecha antes de abrir
      if (isModal) {
        const modal = document.getElementById('quoteModal');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }

      window.open(url, '_blank');
      form.reset();
    });
  };

  const pageForm = document.getElementById('quoteSectionForm');
  if (pageForm) handleFormSubmission(pageForm, false);

  const modalForm = document.getElementById('modalQuoteForm');
  if (modalForm) handleFormSubmission(modalForm, true);
}
