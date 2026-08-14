import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  List,
  CalendarDays,
  BarChart3,
  Users,
  Settings,
  Search,
  User,
  Plus,
  SlidersHorizontal,
  Building2,
  Bed,
  Bath,
  Ruler,
  ArrowRight,
  Paperclip,
  Smile,
  FileText,
  Send,
  Inbox,
  Home,
  Mail,
  BadgeCheck,
} from 'lucide-react'
import { apiRequest } from '../lib/backend'
import { useBackendData } from '../hooks/useBackendData'
import { resolveAgentImage, resolvePropertyImage } from '../lib/media'

const Inquiries = () => {
  const [selectedLeadId, setSelectedLeadId] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [replyMessage, setReplyMessage] = useState('')
  const [sending, setSending] = useState(false)

  // Fetch all leads / inquiries
  const { data, loading, error, refetch } = useBackendData(async () => {
    const response = await apiRequest('/inquiries').catch(() => ({ items: [] }))
    const items = response?.items || response || []
    return {
      leads: items,
      total: response?.total || items.length,
    }
  }, [])

  const leads = data?.leads || []

  // Set default selected lead if none active
  const activeLead = leads.find((l) => (l.id || l._id) === selectedLeadId) || leads[0] || null

  // Fetch full conversation thread for the active lead
  const { data: threadData, loading: threadLoading } = useBackendData(async () => {
    if (!activeLead) return { messages: [], property: null }
    const id = activeLead.id || activeLead._id
    const response = await apiRequest(`/inquiries/${id}`).catch(() => null)
    return {
      messages: response?.messages || activeLead.messages || [
        {
          id: 1,
          sender: activeLead.name || 'Client',
          text: activeLead.message || 'I am interested in scheduling a private tour.',
          time: activeLead.createdAt ? new Date(activeLead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
          isClient: true,
        }
      ],
      property: response?.property || activeLead.property || null,
      score: response?.leadScore || activeLead.score || 95,
    }
  }, [activeLead?.id, activeLead?._id])

  // Filter leads based on header search
  const filteredLeads = leads.filter((lead) => {
    const query = searchTerm.toLowerCase()
    return (
      lead.name?.toLowerCase().includes(query) ||
      lead.email?.toLowerCase().includes(query) ||
      lead.propertyTitle?.toLowerCase().includes(query) ||
      lead.message?.toLowerCase().includes(query)
    )
  })

  // Handle sending a reply
  const handleSendReply = async (e) => {
    e.preventDefault()
    if (!replyMessage.trim() || !activeLead || sending) return

    setSending(true)
    try {
      const id = activeLead.id || activeLead._id
      await apiRequest(`/inquiries/${id}/reply`, {
        method: 'POST',
        body: JSON.stringify({ message: replyMessage.trim() }),
      })
      setReplyMessage('')
      refetch()
    } catch {
      alert('Unable to transmit reply. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-[#F8F9FF] text-[#0B1C30]">
      <div className="flex h-full min-h-0">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col h-screen w-64 bg-[#F8F9FF] py-8 px-4 gap-6 sticky top-0 shadow-md border-r border-[#C4C6CF]/40">
          <div>
            <div className="px-2 pb-2">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-[32px] font-bold leading-none tracking-tight text-[#002045]">LUXE</span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#43474E] pt-2">Estate</span>
              </Link>
            </div>

            <nav className="flex flex-col gap-1 mt-4">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all">
                <LayoutDashboard className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Dashboard</span>
              </Link>
              <Link to="/properties" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all">
                <List className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Listings</span>
              </Link>
              <Link to="/inquiries" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1A365D] text-[#86A0CD] font-semibold shadow-sm">
                <CalendarDays className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em]">Bookings</span>
              </Link>
              <Link to="/system-admin" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all">
                <BarChart3 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Analytics</span>
              </Link>
              <Link to="/agents" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all">
                <Users className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Team</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-[#C4C6CF]/40">
            <Link to="/system-admin" className="flex items-center gap-3 px-4 py-3 w-full text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all">
              <Settings className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.08em] font-semibold">Settings</span>
            </Link>

            <div className="flex items-center gap-3 px-4 py-6 mt-4">
              <div className="h-10 w-10 rounded-full bg-[#002045] text-white flex items-center justify-center font-bold text-xs">
                LE
              </div>
              <div>
                <p className="text-xs font-bold leading-none text-[#0B1C30] uppercase tracking-[0.08em]">Elite Portfolio</p>
                <p className="text-[10px] uppercase tracking-[0.08em] text-[#43474E] mt-1">Institutional Access</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Pane */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          <header className="bg-white/90 backdrop-blur-md flex justify-between items-center w-full px-3 md:px-8 py-3 md:py-4 z-10 shadow-md shadow-[#1A365D]/5 border-b border-[#C4C6CF]/30">
            <div className="flex items-center gap-4 min-w-0">
              <h1 className="text-[22px] md:text-[32px] font-semibold text-[#002045] leading-none whitespace-nowrap">
                Inquiries Inbox
              </h1>
              <div className="hidden lg:flex items-center bg-[#EFF4FF] px-4 py-2 rounded-full border border-[#C4C6CF]/30 ml-2 w-96">
                <Search className="h-3.5 w-3.5 text-[#43474E] mr-2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search leads by name, property, or email..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-[#43474E]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/properties" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#002045] text-white rounded-full text-xs font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-all active:scale-95">
                <Plus className="h-4 w-4" />
                New Listing
              </Link>
              <Link to="/dashboard" className="h-9 w-9 rounded-full text-[#43474E] hover:text-[#002045] transition-colors flex items-center justify-center">
                <User className="h-4 w-4" />
              </Link>
            </div>
          </header>

          <div className="flex-1 min-h-0 flex">
            {/* Left Leads Column */}
            <section className="hidden md:flex md:w-100 bg-[#F8F9FF] flex-col border-r border-[#C4C6CF]/30">
              <div className="p-6 flex items-center justify-between">
                <p className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold">
                  Recent Leads ({filteredLeads.length})
                </p>
                <button className="text-[#4B5563]" aria-label="Filters">
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-none">
                {loading ? (
                  <div className="p-6 space-y-4 animate-pulse">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="h-20 bg-slate-200 rounded-xl" />
                    ))}
                  </div>
                ) : filteredLeads.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 text-xs italic">
                    No active inquiries match your search.
                  </div>
                ) : (
                  filteredLeads.map((lead) => {
                    const id = lead.id || lead._id
                    const isSelected = activeLead && (activeLead.id || activeLead._id) === id
                    const status = (lead.status || 'NEW').toUpperCase()

                    return (
                      <article
                        key={id}
                        onClick={() => setSelectedLeadId(id)}
                        className={`p-6 flex flex-col gap-2 cursor-pointer transition-all border-b border-[#C4C6CF]/20 ${isSelected ? 'bg-[#E5EEFF] border-l-4 border-l-[#1A365D]' : 'hover:bg-[#EFF4FF]'
                          }`}
                      >
                        <div className="flex justify-between items-start">
                          <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-[0.08em] uppercase ${status === 'URGENT' ? 'bg-[#001E45] text-white' : 'bg-[#D8E8FF] text-[#234D83]'
                            }`}>
                            {status}
                          </span>
                          <span className="text-[11px] text-[#43474E]">
                            {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'Recent'}
                          </span>
                        </div>
                        <h3 className="text-[18px] text-[#0B1C30] font-semibold">{lead.fullName || lead.name || 'Inquirer'}</h3>
                        <p className="text-sm text-[#475F83] flex items-center gap-1 truncate">
                          <Building2 className="h-3.5 w-3.5 shrink-0" />
                          {lead.propertyTitle || lead.type || 'Institutional Inquiry'}
                        </p>
                        <p className="text-sm text-[#43474E] line-clamp-1 italic">{lead.message}</p>
                      </article>
                    )
                  })
                )}
              </div>
            </section>

            {/* Middle & Right Thread Display */}
            <section className="flex-1 min-w-0 bg-[#F8F9FF] overflow-hidden relative flex flex-col min-h-0">
              {activeLead ? (
                <>
                  <div className="px-3 md:px-8 py-4 md:py-6 border-b border-[#C4C6CF]/30 flex justify-between items-center bg-white/50">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-[#002045] text-white font-bold flex items-center justify-center text-sm shadow-xs">
                        {(activeLead.fullName || activeLead.name || 'I').charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-[20px] text-[#002045] font-semibold">{activeLead.fullName || activeLead.name}</h2>
                        <p className="text-xs md:text-sm text-[#43474E]">{activeLead.email} {activeLead.phone ? `• ${activeLead.phone}` : ''}</p>
                      </div>
                    </div>

                    <div className="hidden lg:flex gap-2">
                      <button className="px-4 py-2 border border-[#002045] text-[#002045] rounded-lg text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#002045]/5 transition-all cursor-pointer">
                        Archive
                      </button>
                      <button className="px-4 py-2 bg-[#002045] text-white rounded-lg text-xs font-semibold uppercase tracking-[0.08em] shadow-md hover:opacity-90 transition-all cursor-pointer">
                        Assign Agent
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 min-h-0 flex overflow-hidden">
                    {/* Chat Messages */}
                    <div className="flex-1 min-h-0 flex flex-col border-r border-[#C4C6CF]/20 overflow-hidden">
                      <div className="flex-1 min-h-0 p-3 md:p-8 overflow-y-auto flex flex-col gap-5 md:gap-6">
                        <div className="flex items-center gap-4 py-1">
                          <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#74777F]">Message Stream</span>
                          <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                        </div>

                        {threadLoading ? (
                          <div className="space-y-4 animate-pulse">
                            <div className="h-16 bg-slate-200 rounded-xl w-3/4"></div>
                            <div className="h-16 bg-slate-200 rounded-xl w-3/4 self-end"></div>
                          </div>
                        ) : (
                          (threadData?.messages || []).map((msg, i) => (
                            <div
                              key={msg.id || i}
                              className={`flex flex-col gap-1 max-w-[92%] md:max-w-[80%] ${!msg.isClient ? 'self-end items-end' : ''
                                }`}
                            >
                              <div
                                className={`p-3 md:p-4 rounded-2xl text-sm md:text-base ${!msg.isClient
                                    ? 'bg-[#002045] text-white rounded-tr-none shadow-lg'
                                    : 'bg-[#DCE9FF] text-[#0B1C30] rounded-tl-none border-l-4 border-[#002045]'
                                  }`}
                              >
                                {msg.text || msg.message}
                              </div>
                              <span className="text-[10px] text-[#43474E] px-1 uppercase">{msg.time || 'Recent'}</span>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Reply Box */}
                      <form onSubmit={handleSendReply} className="p-3 md:p-6 bg-white border-t border-[#C4C6CF]/30">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-2">
                            <button type="button" className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><Paperclip className="h-5 w-5" /></button>
                            <button type="button" className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><Smile className="h-5 w-5" /></button>
                            <button type="button" className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><FileText className="h-5 w-5" /></button>
                          </div>

                          <div className="flex gap-2 md:gap-4">
                            <textarea
                              value={replyMessage}
                              onChange={(e) => setReplyMessage(e.target.value)}
                              placeholder="Type your response..."
                              className="flex-1 bg-[#F8F9FF] border border-[#C4C6CF]/45 rounded-xl p-3 md:p-4 text-sm focus:ring-1 focus:ring-[#002045] resize-none h-20 md:h-24 outline-none"
                            />
                            <button
                              type="submit"
                              disabled={sending || !replyMessage.trim()}
                              className="p-3 md:p-4 bg-[#002045] text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center shrink-0 cursor-pointer disabled:opacity-50"
                            >
                              <Send className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    {/* Right Property Subject Panel */}
                    <div className="hidden xl:flex w-80 p-8 flex-col gap-8 bg-[#F8F9FF] overflow-y-auto">
                      {threadData?.property && (
                        <div>
                          <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold mb-4">Inquiry Subject</h3>
                          <div className="rounded-xl overflow-hidden bg-white shadow-xl shadow-[#1A365D]/5 border border-[#C4C6CF]/30">
                            <div className="h-32 w-full relative bg-slate-900">
                              <img
                                src={resolvePropertyImage(threadData.property)}
                                alt={threadData.property.title || 'Property Subject'}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                              <div className="absolute bottom-2 left-4">
                                <p className="text-white font-bold text-sm">{threadData.property.amount || threadData.property.price}</p>
                              </div>
                            </div>
                            <div className="p-4">
                              <h4 className="text-sm font-semibold text-[#002045]">{threadData.property.title}</h4>
                              <p className="text-xs text-[#43474E]">{threadData.property.city || threadData.property.location}</p>
                              <div className="flex gap-4 mt-3 pt-3 border-t border-[#C4C6CF]/30">
                                {threadData.property.beds && (
                                  <div className="flex items-center gap-1"><Bed className="h-3.5 w-3.5 text-[#74777F]" /><span className="text-xs font-semibold">{threadData.property.beds}</span></div>
                                )}
                                {threadData.property.baths && (
                                  <div className="flex items-center gap-1"><Bath className="h-3.5 w-3.5 text-[#74777F]" /><span className="text-xs font-semibold">{threadData.property.baths}</span></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col gap-3">
                        <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold">Quick Actions</h3>
                        <Link to="/inquiries" className="w-full flex items-center justify-between p-3.5 bg-white border border-[#C4C6CF]/30 rounded-xl hover:bg-[#EFF4FF] transition-colors group">
                          <span className="text-xs uppercase tracking-[0.08em] font-semibold text-[#002045]">Schedule Viewing</span>
                          <ArrowRight className="h-4 w-4 text-[#002045] transition-transform group-hover:translate-x-1" />
                        </Link>
                        <a href={`mailto:${activeLead.email}`} className="w-full flex items-center justify-between p-3.5 bg-white border border-[#C4C6CF]/30 rounded-xl hover:bg-[#EFF4FF] transition-colors group">
                          <span className="text-xs uppercase tracking-[0.08em] font-semibold text-[#002045]">Send Portfolio</span>
                          <Mail className="h-4 w-4 text-[#002045] transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>

                      <div>
                        <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold mb-3">Lead Score</h3>
                        <div className="bg-[#1A365D] p-6 rounded-2xl text-[#86A0CD] relative overflow-hidden">
                          <div className="relative z-10">
                            <p className="text-[32px] font-bold text-white">{threadData?.score || 92}<span className="text-lg opacity-60">/100</span></p>
                            <p className="text-xs text-slate-300">High Conversion Priority</p>
                            <div className="mt-4 h-1.5 w-full bg-[#86A0CD]/20 rounded-full">
                              <div className="h-full bg-amber-300 rounded-full" style={{ width: `${threadData?.score || 92}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-slate-400">
                  <Inbox className="w-12 h-12 mb-3 text-slate-300" />
                  <p className="text-sm font-semibold">Select an inquiry lead to inspect details and respond.</p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Mobile Footer Navigation */}
      <nav className="md:hidden bg-white/90 backdrop-blur-md flex justify-around items-center py-3 z-50 shadow-2xl border-t border-[#C4C6CF]/30">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#43474E] hover:text-[#002045] transition-colors">
          <Home className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.08em]">Home</span>
        </Link>
        <Link to="/inquiries" className="flex flex-col items-center gap-1 text-[#002045]">
          <Inbox className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.08em] font-bold">Inbox</span>
        </Link>
        <Link to="/properties" className="flex flex-col items-center gap-1 text-[#43474E] hover:text-[#002045] transition-colors">
          <Building2 className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.08em]">Properties</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center gap-1 text-[#43474E] hover:text-[#002045] transition-colors">
          <User className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.08em]">Profile</span>
        </Link>
      </nav>
    </div>
  )
}

export default Inquiries