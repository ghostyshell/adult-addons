export const AGE_GATE_KEY = "adult-addons-age-verified";

export function hasAgeConsent(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(AGE_GATE_KEY) === "true";
}

export function setAgeConsent(): void {
  sessionStorage.setItem(AGE_GATE_KEY, "true");
  window.dispatchEvent(new Event("age-gate-change"));
}

export function clearAgeConsent(): void {
  sessionStorage.removeItem(AGE_GATE_KEY);
  window.dispatchEvent(new Event("age-gate-change"));
}

export function subscribeAgeGate(onStoreChange: () => void): () => void {
  window.addEventListener("age-gate-change", onStoreChange);
  return () => window.removeEventListener("age-gate-change", onStoreChange);
}
