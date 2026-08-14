import React from 'react'
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
import AdvisorImage from '../assets/advisor.png'
import PenthouseImage from '../assets/interior-view.png'

const leads = [
  {
    badge: 'URGENT',
    badgeStyle: 'bg-[#001E45] text-white',
    name: 'Julianne Vancini',
    property: 'The Belvedere Heights Penthouse',
    message: 'Is it possible to view the property this Sunday...',
    time: '2 mins ago',
    active: true,
  },
  {
    badge: 'NEW',
    badgeStyle: 'bg-[#D8E8FF] text-[#234D83]',
    name: 'Marcus Thorne',
    property: 'Azure Bay Contemporary Villa',
    message: 'Inquired about floor plans and utility costs.',
    time: '1 hour ago',
  },
  {
    badge: 'IN PROGRESS',
    badgeStyle: 'bg-[#E5E7EB] text-[#4B5563]',
    name: 'Sophia Liang',
    property: 'Heritage Oak Estate',
    message: 'Schedule viewing confirmed for next Thursday.',
    time: '4 hours ago',
  },
  {
    badge: 'NEW',
    badgeStyle: 'bg-[#D8E8FF] text-[#234D83]',
    name: 'Robert Glass',
    property: 'Skyline Loft 402',
    message: 'Interested in lease-to-own options.',
    time: 'Yesterday',
  },
]

const Inquiries = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#F8F9FF] text-[#0B1C30]">
      <div className="flex h-full min-h-0">
        <aside className="hidden md:flex flex-col h-screen w-64 bg-[#F8F9FF] py-8 px-4 gap-6 sticky top-0 shadow-md border-r border-[#C4C6CF]/40">
          <div>
            <div className="px-2 pb-2">
              <div className="flex items-center gap-2">
                <span className="text-[32px] font-bold leading-none tracking-tight text-[#002045]">LUXE</span>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#43474E] pt-2">Estate</span>
              </div>
            </div>

            <nav className="flex flex-col gap-1 mt-4">
              <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all hover:translate-x-0.5">
                <LayoutDashboard className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Dashboard</span>
              </Link>
              <Link to="/properties" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1A365D] text-[#86A0CD] font-semibold shadow-sm">
                <List className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em]">Listings</span>
              </Link>
              <Link to="/inquiries" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all hover:translate-x-0.5">
                <CalendarDays className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Bookings</span>
              </Link>
              <Link to="/system-admin" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all hover:translate-x-0.5">
                <BarChart3 className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Analytics</span>
              </Link>
              <Link to="/agents" className="flex items-center gap-3 px-4 py-3 text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all hover:translate-x-0.5">
                <Users className="h-4 w-4" />
                <span className="text-xs uppercase tracking-[0.08em] font-semibold">Team</span>
              </Link>
            </nav>
          </div>

          <div className="mt-auto pt-6 border-t border-[#C4C6CF]/40">
            <Link to="/membership-plans" className="flex items-center gap-3 px-4 py-3 w-full text-[#43474E] hover:bg-[#D3E4FE]/45 rounded-lg transition-all hover:translate-x-0.5">
              <Settings className="h-4 w-4" />
              <span className="text-xs uppercase tracking-[0.08em] font-semibold">Settings</span>
            </Link>

            <div className="flex items-center gap-3 px-4 py-6 mt-4">
              <img src={AdvisorImage} alt="Elite portfolio" className="h-10 w-10 rounded-full object-cover bg-[#ADC7F7]" />
              <div>
                <p className="text-xs font-bold leading-none text-[#0B1C30] uppercase tracking-[0.08em]">Elite Portfolio</p>
                <p className="text-[10px] uppercase tracking-[0.08em] text-[#43474E] mt-1">Institutional Access</p>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1 flex flex-col min-w-0 min-h-0">
          <header className="bg-white/90 backdrop-blur-md flex justify-between items-center w-full px-3 md:px-8 py-3 md:py-4 z-10 shadow-md shadow-[#1A365D]/5 border-b border-[#C4C6CF]/30">
            <div className="flex items-center gap-4 min-w-0">
              <h1 className="text-[22px] md:text-[32px] font-semibold text-[#002045] leading-none whitespace-nowrap">Inquiries Inbox</h1>
              <div className="hidden lg:flex items-center bg-[#EFF4FF] px-4 py-2 rounded-full border border-[#C4C6CF]/30 ml-2 w-96">
                <Search className="h-3.5 w-3.5 text-[#43474E] mr-2" />
                <input
                  type="text"
                  placeholder="Search by name, property, or ID..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none placeholder:text-[#43474E]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
              <Link to="/properties" className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-[#002045] text-white rounded-full text-xs font-semibold uppercase tracking-[0.08em] hover:opacity-90 transition-all active:scale-95">
                <Plus className="h-4 w-4" />
                New Listing
              </Link>
              <Link to="/properties" className="sm:hidden h-9 w-9 rounded-full bg-[#002045] text-white flex items-center justify-center">
                <Plus className="h-4 w-4" />
              </Link>

              <Link to="/agent-profile" className="h-9 w-9 rounded-full text-[#43474E] hover:text-[#002045] transition-colors flex items-center justify-center">
                <User className="h-4 w-4" />
              </Link>
            </div>
          </header>

          <div className="flex-1 min-h-0 flex">
            <section className="hidden md:flex md:w-100 bg-[#F8F9FF] flex-col border-r border-[#C4C6CF]/30">
              <div className="p-6 flex items-center justify-between">
                <p className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold">Recent Leads (24)</p>
                <button className="text-[#4B5563]">
                  <SlidersHorizontal className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {leads.map((lead) => (
                  <article
                    key={lead.name}
                    className={`p-6 flex flex-col gap-2 cursor-pointer transition-all border-b border-[#C4C6CF]/20 ${lead.active ? 'bg-[#E5EEFF] border-l-4 border-l-[#1A365D]' : 'hover:bg-[#EFF4FF]'}`}
                  >
                    <div className="flex justify-between items-start">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-bold tracking-[0.08em] uppercase ${lead.badgeStyle}`}>
                        {lead.badge}
                      </span>
                      <span className="text-[11px] text-[#43474E]">{lead.time}</span>
                    </div>
                    <h3 className="text-[18px] text-[#0B1C30] font-semibold">{lead.name}</h3>
                    <p className="text-sm text-[#475F83] flex items-center gap-1">
                      <Building2 className="h-3 w-3" />
                      {lead.property}
                    </p>
                    <p className="text-sm text-[#43474E] line-clamp-1 italic">{lead.message}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="flex-1 min-w-0 bg-[#F8F9FF] overflow-hidden relative flex flex-col min-h-0">
              <div className="px-3 md:px-8 py-4 md:py-6 border-b border-[#C4C6CF]/30 flex justify-between items-center bg-white/50">
                <div className="flex items-center gap-3">
                  <img src={AdvisorImage} alt="Julianne Vancini" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <h2 className="text-[20px] text-[#002045] font-semibold">Julianne Vancini</h2>
                    <p className="text-xs md:text-sm text-[#43474E]">julianne.v@techfoundry.com • +1 (555) 092-1844</p>
                  </div>
                </div>

                <div className="hidden lg:flex gap-2">
                  <button className="px-4 py-2 border border-[#002045] text-[#002045] rounded-lg text-xs font-semibold uppercase tracking-[0.08em] hover:bg-[#002045]/5 transition-all">Archive</button>
                  <button className="px-4 py-2 bg-[#002045] text-white rounded-lg text-xs font-semibold uppercase tracking-[0.08em] shadow-md hover:opacity-90 transition-all">Assign Agent</button>
                </div>
              </div>

              <div className="md:hidden px-3 py-3 border-b border-[#C4C6CF]/30 bg-[#F8F9FF]">
                <p className="text-[10px] tracking-[0.08em] uppercase text-[#43474E] font-semibold mb-2">Recent Leads</p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  {leads.map((lead) => (
                    <button
                      key={`mobile-${lead.name}`}
                      className={`shrink-0 px-3 py-2 rounded-lg border text-left ${lead.active ? 'bg-[#E5EEFF] border-[#1A365D]/30' : 'bg-white border-[#C4C6CF]/35'}`}
                    >
                      <p className="text-xs font-semibold text-[#002045] leading-none">{lead.name}</p>
                      <p className="text-[11px] text-[#43474E] mt-1">{lead.time}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-h-0 flex overflow-hidden">
                <div className="flex-1 min-h-0 flex flex-col border-r border-[#C4C6CF]/20 overflow-hidden">
                  <div className="flex-1 min-h-0 p-3 md:p-8 overflow-y-auto flex flex-col gap-5 md:gap-6 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex items-center gap-4 py-1">
                      <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#74777F]">Wednesday, Oct 23</span>
                      <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                    </div>

                    <div className="flex flex-col gap-1 max-w-[92%] md:max-w-[80%]">
                      <div className="bg-[#DCE9FF] p-3 md:p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-sm md:text-base text-[#0B1C30]">
                        Good morning. I've been following the Belvedere Heights listings for some time. The new Penthouse unit looks spectacular. Could you provide the detailed floor plan and a list of building amenities?
                      </div>
                      <span className="text-[10px] text-[#43474E] ml-2 uppercase">10:14 AM</span>
                    </div>

                    <div className="flex flex-col gap-1 max-w-[92%] md:max-w-[80%] self-end items-end">
                      <div className="bg-[#002045] text-white p-3 md:p-4 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl text-sm md:text-base shadow-lg shadow-[#002045]/10">
                        Of course, Julianne. I've attached the full prospectus and the high-resolution floor plans for Penthouse 01. It features the exclusive sky-terrace upgrade.
                      </div>
                      <span className="text-[10px] text-[#43474E] mr-2 uppercase">11:02 AM</span>
                    </div>

                    <div className="flex items-center gap-4 py-1">
                      <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#74777F]">Today</span>
                      <div className="flex-1 h-px bg-[#C4C6CF]/35"></div>
                    </div>

                    <div className="flex flex-col gap-1 max-w-[92%] md:max-w-[80%]">
                      <div className="bg-[#DCE9FF] p-3 md:p-4 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl text-sm md:text-base text-[#0B1C30] border-l-4 border-[#002045]">
                        Thank you for the quick response. Is it possible to view the property this Sunday evening? I will be in the city between 4 PM and 7 PM.
                      </div>
                      <span className="text-[10px] text-[#43474E] ml-2 uppercase">2 mins ago</span>
                    </div>
                  </div>

                  <div className="p-3 md:p-6 bg-white border-t border-[#C4C6CF]/30">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-2">
                        <button className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><Paperclip className="h-5 w-5" /></button>
                        <button className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><Smile className="h-5 w-5" /></button>
                        <button className="p-2 text-[#43474E] hover:text-[#002045] transition-colors"><FileText className="h-5 w-5" /></button>
                      </div>

                      <div className="flex gap-2 md:gap-4">
                        <textarea
                          placeholder="Type your response..."
                          className="flex-1 bg-[#F8F9FF] border border-[#C4C6CF]/45 rounded-xl p-3 md:p-4 text-sm focus:ring-1 focus:ring-[#002045] focus:border-[#002045] resize-none h-20 md:h-24 outline-none"
                        />
                        <button className="p-3 md:p-4 bg-[#002045] text-white rounded-xl hover:opacity-90 transition-all flex items-center justify-center shrink-0">
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex w-80 p-8 flex-col gap-8 bg-[#F8F9FF] overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div>
                    <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold mb-4">Inquiry Subject</h3>
                    <div className="rounded-xl overflow-hidden bg-white shadow-xl shadow-[#1A365D]/5 border border-[#C4C6CF]/30 cursor-pointer transition-all hover:scale-[1.01]">
                      <div className="h-32 w-full relative">
                        <img src={PenthouseImage} alt="The Belvedere Heights" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                        <div className="absolute bottom-2 left-4">
                          <p className="text-white font-bold text-sm">$12,500,000</p>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-[#002045]">The Belvedere Heights</h4>
                        <p className="text-xs text-[#43474E]">Upper East Side, New York</p>
                        <div className="flex gap-4 mt-3 pt-3 border-t border-[#C4C6CF]/30">
                          <div className="flex items-center gap-1"><Bed className="h-3.5 w-3.5 text-[#74777F]" /><span className="text-xs font-semibold">4</span></div>
                          <div className="flex items-center gap-1"><Bath className="h-3.5 w-3.5 text-[#74777F]" /><span className="text-xs font-semibold">5.5</span></div>
                          <div className="flex items-center gap-1"><Ruler className="h-3.5 w-3.5 text-[#74777F]" /><span className="text-xs font-semibold">5,200</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold">Quick Actions</h3>
                    <button className="w-full flex items-center justify-between p-4 bg-white border border-[#C4C6CF]/30 rounded-xl hover:bg-[#EFF4FF] transition-colors group">
                      <span className="text-xs uppercase tracking-[0.08em] font-semibold text-[#002045]">Schedule Viewing</span>
                      <ArrowRight className="h-4 w-4 text-[#002045] transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-white border border-[#C4C6CF]/30 rounded-xl hover:bg-[#EFF4FF] transition-colors group">
                      <span className="text-xs uppercase tracking-[0.08em] font-semibold text-[#002045]">Send Portfolio</span>
                      <Mail className="h-4 w-4 text-[#002045] transition-transform group-hover:translate-x-1" />
                    </button>
                    <button className="w-full flex items-center justify-between p-4 bg-white border border-[#C4C6CF]/30 rounded-xl hover:bg-[#EFF4FF] transition-colors group">
                      <span className="text-xs uppercase tracking-[0.08em] font-semibold text-[#002045]">Request Credit Check</span>
                      <BadgeCheck className="h-4 w-4 text-[#002045] transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xs tracking-[0.08em] uppercase text-[#43474E] font-semibold mb-4">Lead Score</h3>
                    <div className="bg-[#1A365D] p-6 rounded-2xl text-[#86A0CD] relative overflow-hidden">
                      <div className="relative z-10">
                        <p className="text-[32px] font-bold">98<span className="text-lg opacity-60">/100</span></p>
                        <p className="text-sm opacity-80">Highly Qualified Individual</p>
                        <div className="mt-4 h-1.5 w-full bg-[#86A0CD]/20 rounded-full"><div className="h-full w-[98%] bg-[#D4E3FF] rounded-full"></div></div>
                      </div>
                      <div className="absolute -right-4 -bottom-4 opacity-10 text-7xl">★</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

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
        <Link to="/agent-profile" className="flex flex-col items-center gap-1 text-[#43474E] hover:text-[#002045] transition-colors">
          <User className="h-4 w-4" />
          <span className="text-[10px] uppercase tracking-[0.08em]">Profile</span>
        </Link>
      </nav>
    </div>
  )
}

export default Inquiries
