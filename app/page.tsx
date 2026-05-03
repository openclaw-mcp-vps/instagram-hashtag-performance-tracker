export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          Instagram Analytics
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track which hashtags{" "}
          <span className="text-[#58a6ff]">actually drive engagement</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop wasting posts on vanity hashtags. HashTrack monitors performance across every tag you use and shows you exactly which ones grow your reach over time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $12/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <p className="text-2xl font-bold text-white">2.4x</p>
            <p className="text-xs text-[#8b949e] mt-1">avg engagement lift</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-[#8b949e] mt-1">creators tracking</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">30 days</p>
            <p className="text-xs text-[#8b949e] mt-1">historical data</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff]/40 rounded-xl p-8 bg-[#161b22] text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span> Connect your Instagram account
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span> Track unlimited hashtags
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span> Engagement vs reach breakdown
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span> Weekly performance reports
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#58a6ff]">✓</span> Best-time-to-post insights
            </li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does HashTrack connect to Instagram?</h3>
            <p className="text-sm text-[#8b949e]">We use the official Instagram Basic Display API. You authorize read-only access — we never post or modify anything on your account.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">What counts as "engagement" in the tracker?</h3>
            <p className="text-sm text-[#8b949e]">We track likes, comments, saves, and reach per post, then attribute those metrics to each hashtag used — so you see real signal, not just impressions.</p>
          </div>
          <div className="border border-[#30363d] rounded-lg p-5 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel with one click from your billing portal. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} HashTrack. All rights reserved.
      </footer>
    </main>
  );
}
