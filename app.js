const setupButton = document.querySelector('[data-phone-setup]');
const phoneSetup = document.querySelector('#phone-setup');
const protocolHelp = document.querySelector('[data-protocol-help]');

setupButton.addEventListener('click', () => {
  const isOpen = !phoneSetup.hidden;
  phoneSetup.hidden = isOpen;
  setupButton.setAttribute('aria-expanded', String(!isOpen));
  if (!isOpen) phoneSetup.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelector('a[href="wonderpair://start"]').addEventListener('click', () => {
  window.setTimeout(() => { protocolHelp.hidden = false; }, 1200);
});
