/**
 * Jamlex popup engine
 * ----------------------------------------------------------------------------
 * The ONLY way to surface anything to the user. Every success / error /
 * info / confirmation goes through showPopup().
 *
 * Usage:
 *
 *   showPopup({ type: 'success', message: 'ذخیره شد' });
 *   showPopup({ type: 'error',   message: 'ایمیل تکراری است' });
 *   showPopup({ type: 'info',    message: 'به‌زودی بازمی‌گردیم' });
 *
 *   // Confirmation (returns a Promise<boolean>):
 *   const ok = await showPopup({
 *     type: 'confirm',
 *     title: 'حذف دسته‌بندی',
 *     message: 'مطمئنی؟ این کار قابل برگشت نیست.',
 *     confirmText: 'حذف',
 *     cancelText: 'انصراف',
 *     danger: true,
 *   });
 *
 * The popup:
 *   - is a centered modal (NOT a snackbar / NOT inline / NOT a corner toast)
 *   - has a branded icon disc (success=check, error=!, info=i, confirm=?)
 *   - auto-dismisses success/info after 2.5s; error and confirm stay until tapped
 *   - locks scroll while open
 *   - traps focus on the button(s)
 *   - i18n: pass keys via { messageKey, titleKey } as an alternative to literals
 */

import { t } from './i18n.js?v=mpp2q2g3';

const ICONS = {
  success: { color: '#26D07C', svg: `<polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>` },
  error:   { color: '#F44336', svg: `<line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/>` },
  info:    { color: '#4A90D9', svg: `<line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="12" cy="8" r="1.4" fill="currentColor"/>` },
  confirm: { color: '#F5B945', svg: `<path d="M12 8v5" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="12" cy="16.5" r="1.4" fill="currentColor"/>` },
};

let openCount = 0;

/**
 * Show a centered popup. Returns:
 *   - Promise<void> for success/error/info (resolves on close)
 *   - Promise<boolean> for confirm (true=confirmed, false=cancelled)
 */
export function showPopup ({
  type = 'info',
  title,
  titleKey,
  message,
  messageKey,
  confirmText,
  confirmKey,
  cancelText,
  cancelKey,
  danger = false,
  autoDismiss,
} = {}) {
  const resolvedTitle   = title   ?? (titleKey   ? t(titleKey)   : null);
  const resolvedMessage = message ?? (messageKey ? t(messageKey) : '');
  const resolvedConfirm = confirmText ?? (confirmKey ? t(confirmKey) : t('common.ok'));
  const resolvedCancel  = cancelText  ?? (cancelKey  ? t(cancelKey)  : t('common.cancel'));

  const isConfirm = type === 'confirm';
  const dismissMs = autoDismiss !== undefined
    ? autoDismiss
    : (type === 'success' || type === 'info' ? 2500 : 0);

  return new Promise((resolve) => {
    const scrim = document.createElement('div');
    scrim.className = 'popup-scrim';
    scrim.setAttribute('role', 'dialog');
    scrim.setAttribute('aria-modal', 'true');

    const icon = ICONS[type] || ICONS.info;

    scrim.innerHTML = `
      <div class="popup-dialog popup-dialog--${type}">
        <div class="popup-dialog__icon-wrap">
          <div class="popup-dialog__icon" style="background:${icon.color}1A;color:${icon.color};">
            <svg viewBox="0 0 24 24" width="32" height="32">${icon.svg}</svg>
          </div>
        </div>
        ${resolvedTitle ? `<h3 class="popup-dialog__title">${escapeHtml(resolvedTitle)}</h3>` : ''}
        <p class="popup-dialog__message">${escapeHtml(resolvedMessage)}</p>
        <div class="popup-dialog__actions">
          ${isConfirm ? `<button class="popup-dialog__btn popup-dialog__btn--ghost" data-popup-cancel>${escapeHtml(resolvedCancel)}</button>` : ''}
          <button class="popup-dialog__btn popup-dialog__btn--primary${danger ? ' popup-dialog__btn--danger' : ''}" data-popup-confirm>${escapeHtml(resolvedConfirm)}</button>
        </div>
      </div>
    `;

    document.body.appendChild(scrim);
    openCount++;
    if (openCount === 1) document.body.style.overflow = 'hidden';

    // Focus the primary button so Enter/Space dismisses
    const primary = scrim.querySelector('[data-popup-confirm]');
    primary.focus();

    let timer = null;

    function close (value) {
      if (timer) clearTimeout(timer);
      scrim.removeEventListener('click', onScrimClick);
      scrim.classList.add('popup-scrim--leaving');
      setTimeout(() => {
        scrim.remove();
        openCount--;
        if (openCount === 0) document.body.style.overflow = '';
      }, 160);
      resolve(value);
    }

    function onScrimClick (e) {
      // Click outside dialog = cancel (for confirm) or dismiss (others)
      if (e.target === scrim) close(isConfirm ? false : undefined);
    }
    scrim.addEventListener('click', onScrimClick);

    primary.addEventListener('click', () => close(isConfirm ? true : undefined));
    const cancel = scrim.querySelector('[data-popup-cancel]');
    if (cancel) cancel.addEventListener('click', () => close(false));

    // Escape key
    function onKey (e) {
      if (e.key === 'Escape') {
        document.removeEventListener('keydown', onKey);
        close(isConfirm ? false : undefined);
      }
    }
    document.addEventListener('keydown', onKey);

    if (dismissMs > 0) {
      timer = setTimeout(() => close(isConfirm ? false : undefined), dismissMs);
    }
  });
}

// Convenience wrappers — these are the actual API the codebase uses
export const popupSuccess = (message, opts = {}) => showPopup({ type: 'success', message, ...opts });
export const popupError   = (message, opts = {}) => showPopup({ type: 'error',   message, ...opts });
export const popupInfo    = (message, opts = {}) => showPopup({ type: 'info',    message, ...opts });
export const popupConfirm = (message, opts = {}) => showPopup({ type: 'confirm', message, ...opts });

/**
 * Destructive-action helper. Looks up four i18n keys under v3.confirm.<base>:
 *   .title, .message, .confirm, .done
 * Shows a danger confirm popup; on confirm, shows a success popup.
 * Returns Promise<boolean> so callers can chain navigation after success.
 *
 *   await window.confirmAction('deleteCategory');
 *   window.confirmAction('logout').then(ok => { if (ok) setTimeout(() => location.href='/login', 800); });
 */
export const confirmAction = (keyBase) =>
  showPopup({
    type: 'confirm',
    titleKey:   `v3.confirm.${keyBase}.title`,
    messageKey: `v3.confirm.${keyBase}.message`,
    confirmKey: `v3.confirm.${keyBase}.confirm`,
    danger: true,
  }).then((ok) => {
    if (ok) {
      showPopup({ type: 'success', messageKey: `v3.confirm.${keyBase}.done` });
    }
    return ok;
  });

// Make popups available globally so HTML onclick handlers can invoke them.
if (typeof window !== 'undefined') {
  window.showPopup     = showPopup;
  window.popupSuccess  = popupSuccess;
  window.popupError    = popupError;
  window.popupInfo     = popupInfo;
  window.popupConfirm  = popupConfirm;
  window.confirmAction = confirmAction;
}

function escapeHtml (s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
