"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"
import { siteConfig } from "@/content/site"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "When is the wedding?",
    answer:
      `Our wedding will be held on ${siteConfig.ceremony.date} (${siteConfig.ceremony.day}) at ${siteConfig.ceremony.time}. We kindly ask guests to arrive by ${siteConfig.ceremony.guestsTime} to help us begin promptly.`,
  },
  {
    question: "Where will the ceremony and reception take place?",
    answer:
      `The ceremony will be held at ${siteConfig.ceremony.venue} (${siteConfig.ceremony.location}). The reception will follow at ${siteConfig.reception.venue} (${siteConfig.reception.location}) at ${siteConfig.reception.time}. You can find detailed directions, addresses, and maps in the Details section above.`,
  },
  {
    question: "What time should I arrive?",
    answer:
      `Kindly arrive by ${siteConfig.ceremony.guestsTime} so we can begin the wedding ceremony promptly at exactly ${siteConfig.ceremony.time}. The entourage will arrive at ${siteConfig.ceremony.entourageTime}. Your punctuality means so much to us — and don't forget to have a light snack beforehand so you can enjoy the celebration comfortably!`,
  },
  {
    question: "How do I RSVP?",
    answer:
      `Please RSVP on or before ${siteConfig.details.rsvp.deadline} through the RSVP section on this invitation. Simply search for your name in the guest list, confirm your attendance, and let us know if you'll be bringing companions. We kindly ask for your response to help us prepare for the big day.`,
  },
  {
    question: "Can I bring a plus one or additional guests?",
    answer:
      "The seating will be formal, RSVP-style. That's why we're asking you to fill out this invitation form to secure your spot. Kindly do not bring plus ones unless explicitly stated in your invitation. Please check your invitation details in the RSVP section.",
  },
  {
    question: "Is there a dress code?",
    answer:
      `Yes! We kindly request our guests to dress in formal attire matching our ${siteConfig.dressCode.theme}. Please dress within our wedding color palette: Sage Green (#848B69, #A4AD92), Blush Pink (#E8BBB8, #F3D8DD), and Cream (#F4F5F0) to help create a soft, elegant romantic celebration. Please see the Attire section in Details for specific guidelines:\n\nPrincipal Sponsors:\n• Male: ${siteConfig.dressCode.sponsors.male}\n• Female: ${siteConfig.dressCode.sponsors.female}\n\nGuests:\n• Gents: ${siteConfig.dressCode.guests.gents}\n• Ladies: ${siteConfig.dressCode.guests.ladies}`,
  },
  {
    question: "Will there be assigned seating?",
    answer:
      "Yes, there will be assigned seating at the reception. Your table number will be displayed in the Book of Guests section once your RSVP is confirmed. Our reception team will gladly guide you to your table so you can relax and enjoy the celebration.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, parking is available at the venue. Please arrive early to find a comfortable spot. Plan your route ahead to avoid unexpected delays.",
  },
  {
    question: "What should I give as a gift?",
    answer:
      "The biggest gift to us is your support and presence at our wedding. Please do not feel obligated to give anything else. However, should you feel inclined, we are very much looking forward to our honeymoon and any contribution towards that will always be sincerely appreciated.",
  },
  {
    question: "Can I take photos and videos during the ceremony?",
    answer:
      `We have a professional photographer and videographer capturing our special moments. We kindly ask that you keep your phones on silent and refrain from taking photos during the ceremony. However, we'd love to see your photos and videos from the reception! Please check the Snap & Share section to upload them to our Google Drive folder. Don't forget to use our wedding hashtags: ${siteConfig.snapShare.hashtag}, #JemeloAndJennyWedding, and #JemeloJennyForever when sharing on social media!`,
  },
  {
    question: "What if I have dietary restrictions or allergies?",
    answer:
      "Please let us know about any dietary restrictions or allergies when you RSVP. We want to ensure everyone can enjoy the celebration comfortably.",
  },
  {
    question: "Will the wedding be indoors or outdoors?",
    answer:
      "Both the ceremony and reception will be held at covered venues, so we're prepared for any weather. However, we recommend checking the weather forecast and dressing accordingly.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-[#848B69]"
    >
      {/* Background elements with purple & sage motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#848B69]/85 via-[#A4AD92]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#848B69]/90 via-[#A4AD92]/55 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(164,173,146,0.22),transparent_55%)] opacity-80" />
      </div>

      {/* Section Header */}
      <div className="relative z-30 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
        >
          Questions & Answers
        </p>

        <h2
          className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.85)" }}
        >
          Frequently Asked Questions
        </h2>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-30 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-[#F4F5F0]/95 backdrop-blur-md border border-[#A4AD92]/60 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(132,139,105,0.3)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#A4AD92]/10 via-transparent to-[#848B69]/5 pointer-events-none" />
          
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#A4AD92]/40 bg-white/50 hover:border-[#848B69]/60 hover:bg-white/70 transition-all duration-300 overflow-hidden shadow-sm"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#848B69]/50 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={`${cormorant.className} font-semibold text-[#848B69] pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#848B69]`}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-[#848B69]/60 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#848B69]" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/30 border-t border-[#A4AD92]/40">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className={`${cormorant.className} text-[#848B69] font-medium leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line tracking-wide`}>
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-[#848B69] underline font-bold hover:text-[#A4AD92] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className={`${cormorant.className} text-[#848B69] font-medium leading-relaxed sm:leading-loose text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-line tracking-wide`}>
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
