import { useState, useEffect } from "react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className = "" }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");

  // Real-time email validation
  useEffect(() => {
    if (emailTouched && email) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setEmailError("Ungültige E-Mail-Adresse");
      } else {
        setEmailError(null);
      }
    }
  }, [email, emailTouched]);

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
    setEmailTouched(false);
    setEmailError(null);
    setError(null);
    setShowConfetti(false);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden ${className}`}>
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10px',
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6'][Math.floor(Math.random() * 5)],
                    transform: `rotate(${Math.random() * 360}deg)`,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <div className="text-6xl mb-6 animate-[bounce_1s_ease-in-out_3]">🎉</div>
          <h3 className="text-3xl font-bold mb-4 text-emerald-100">Vielen Dank!</h3>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.
          </p>
          <div className="flex items-center justify-center gap-2 text-emerald-300 text-sm mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>E-Mail-Bestätigung wird versendet</span>
          </div>
          <button
            onClick={resetForm}
            className="text-emerald-300 hover:text-emerald-200 underline decoration-emerald-400/40 hover:decoration-emerald-300 transition-colors"
          >
            ← Weitere Anfrage senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 ${className}`}
      onSubmit={async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const data = {
          fullName,
          email,
          message,
        };

        try {
          const response = await fetch("/api/contact/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            const result = await response.json().catch(() => ({}));
            throw new Error(result?.error || "Fehler beim Senden. Bitte versuchen Sie es später erneut.");
          }

          // Success!
          setSubmitted(true);
          setShowConfetti(true);
          setFullName("");
          setEmail("");
          setMessage("");
          setEmailTouched(false);

          // Hide confetti after animation
          setTimeout(() => setShowConfetti(false), 4000);
        } catch (err: unknown) {
          const errorMessage = err instanceof Error ? err.message : "Es gab ein Problem beim Versenden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.";
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
      }}
    >
      <div className="space-y-5 sm:space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-semibold mb-2">
            Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            disabled={loading}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 text-white placeholder:text-gray-500 transition-all duration-200"
            placeholder="Ihr vollständiger Name"
          />
        </div>

        {/* Email Field with Inline Validation */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            E-Mail *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={loading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setEmailTouched(true)}
              className={`w-full px-4 py-3 bg-white/5 border rounded-xl focus:outline-none focus:ring-2 text-white placeholder:text-gray-500 transition-all duration-200 ${
                emailError
                  ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20'
                  : emailTouched && email && !emailError
                  ? 'border-green-400 focus:border-green-400 focus:ring-green-400/20'
                  : 'border-white/10 focus:border-blue-400 focus:ring-blue-400/50'
              }`}
              placeholder="ihre@email.de"
            />
            {emailTouched && email && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                {emailError ? (
                  <div className="text-red-400">✕</div>
                ) : (
                  <div className="text-green-400 animate-[scaleIn_0.2s_ease-out]">✓</div>
                )}
              </div>
            )}
            {emailError && emailTouched && (
              <p className="text-red-400 text-xs mt-1 ml-1 animate-[slideDown_0.2s_ease-out]">{emailError}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            disabled={loading}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 text-white resize-none placeholder:text-gray-500 transition-all duration-200"
            placeholder="Beschreiben Sie Ihr Anliegen..."
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-xl border border-red-400/40 bg-red-500/20 backdrop-blur-sm p-4 animate-[shake_0.5s_ease-in-out]">
            <div className="flex items-start gap-3">
              <div className="text-xl flex-shrink-0 mt-0.5">⚠️</div>
              <div>
                <div className="font-semibold text-red-200 mb-1">Oops!</div>
                <div className="text-sm text-red-100 leading-relaxed">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !!emailError}
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Wird gesendet...</span>
            </>
          ) : (
            <>
              <span>Nachricht senden</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
