import React, { useState, useEffect } from 'react'
import PolicyPage from '../components/PolicyPage'

const CookiePreferences = () => {
  const [preferences, setPreferences] = useState({
    essential: true, // Always active
    analytics: true,
    marketing: false,
    functional: true,
  })
  const [saved, setSubmitted] = useState(false)

  // Load saved preferences from localStorage if available
  useEffect(() => {
    const savedPrefs = localStorage.getItem('luxe_cookie_preferences')
    if (savedPrefs) {
      try {
        setPreferences(JSON.parse(savedPrefs))
      } catch {
        // Fallback to defaults
      }
    }
  }, [])

  const handleToggle = (key) => {
    if (key === 'essential') return // Cannot disable essential cookies
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }))
    setSubmitted(false)
  }

  const handleSave = () => {
    localStorage.setItem('luxe_cookie_preferences', JSON.stringify(preferences))
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <PolicyPage
      title="Cookie Preferences"
      subtitle="Manage how cookies and tracking technologies support your experience on Luxe Estate."
    >
      <div className="space-y-6">
        <p>
          We use essential cookies to keep the platform secure and functional, as well as performance and preference cookies to tailor our portfolio recommendations to your interests.
        </p>

        {saved && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold rounded-xl animate-fadeIn">
            Your cookie preferences have been successfully updated and saved.
          </div>
        )}

        {/* Interactive Cookie Categories */}
        <div className="space-y-4 pt-2">
          {/* Essential Cookies */}
          <div className="p-5 border border-slate-100 rounded-2xl bg-slate-50/50 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-[#002045]">Essential & Security Cookies</h3>
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                  Required
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Necessary for basic site navigation, authentication, and platform security. These cannot be disabled.
              </p>
            </div>
            <input
              type="checkbox"
              checked={true}
              disabled
              className="w-5 h-5 accent-[#002045] cursor-not-allowed opacity-60"
            />
          </div>

          {/* Functional Preferences */}
          <div className="p-5 border border-slate-100 rounded-2xl bg-white flex items-center justify-between gap-4 hover:border-slate-200 transition-colors">
            <div className="space-y-1">
              <h3 className="font-bold text-[#002045]">Functional & Personalization</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Remembers your selected currency, location filters, and saved property collections.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle('functional')}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${preferences.functional ? 'bg-[#002045]' : 'bg-slate-300'
                }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${preferences.functional ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Analytics & Performance */}
          <div className="p-5 border border-slate-100 rounded-2xl bg-white flex items-center justify-between gap-4 hover:border-slate-200 transition-colors">
            <div className="space-y-1">
              <h3 className="font-bold text-[#002045]">Analytics & Telemetry</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Helps our team understand how clients navigate properties and platform features to optimize system performance.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle('analytics')}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${preferences.analytics ? 'bg-[#002045]' : 'bg-slate-300'
                }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${preferences.analytics ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>

          {/* Marketing & Advisory Alerts */}
          <div className="p-5 border border-slate-100 rounded-2xl bg-white flex items-center justify-between gap-4 hover:border-slate-200 transition-colors">
            <div className="space-y-1">
              <h3 className="font-bold text-[#002045]">Targeted Market Insights</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Allows us to deliver tailored off-market estate announcements and advisory insights across connected channels.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleToggle('marketing')}
              className={`w-12 h-6 rounded-full transition-colors relative p-1 cursor-pointer ${preferences.marketing ? 'bg-[#002045]' : 'bg-slate-300'
                }`}
            >
              <div className={`w-4 h-4 bg-white rounded-full transition-transform ${preferences.marketing ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-[#002045] hover:bg-[#003366] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-xs transition-colors cursor-pointer"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </PolicyPage>
  )
}

export default CookiePreferences