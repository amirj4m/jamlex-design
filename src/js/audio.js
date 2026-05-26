// ============================================================================
// Jamlex — Audio (preview)
// ----------------------------------------------------------------------------
// In the design preview, the 🔊 button uses the browser's built-in TTS via
// Web Speech API so we can hear pronunciation without needing audio files.
// In the production Flutter app, this is replaced with audioplayers playing
// the URL stored in `word_phonetics.audio_url`.
//
// Standards:
// - Only triggers on a user gesture (autoplay restrictions)
// - Visual "playing" state on the button while speaking
// - Always uses an en-* voice (English pronunciation, regardless of UI locale)
// ============================================================================

let activeBtn = null;

export function initAudio() {
  document.addEventListener('click', onClick);
}

function onClick(e) {
  const btn = e.target.closest('[data-audio]');
  if (!btn) return;
  const text = btn.dataset.audio?.trim();
  if (!text) return;
  e.preventDefault();
  e.stopPropagation();
  speak(text, btn);
}

export function speak(text, btn) {
  if (!('speechSynthesis' in window)) {
    console.warn('[audio] Web Speech API not supported');
    return;
  }
  try {
    window.speechSynthesis.cancel();
    if (activeBtn) activeBtn.dataset.playing = 'false';

    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.95;
    u.pitch = 1;

    // Try to pick an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en-')) || voices[0];
    if (enVoice) u.voice = enVoice;

    if (btn) {
      btn.dataset.playing = 'true';
      activeBtn = btn;
      u.onend = u.onerror = () => {
        if (btn) btn.dataset.playing = 'false';
        if (activeBtn === btn) activeBtn = null;
      };
    }
    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn('[audio] speak failed', e);
    if (btn) btn.dataset.playing = 'false';
  }
}
