"use client"

import { useState } from "react"
import { Hero } from "@/components/organisms/hero"
import { Stats } from "@/components/organisms/stats"
import { Testimonials } from "@/components/organisms/testimonials"
import { Courses } from "@/components/organisms/courses"
import { Header } from "@/components/organisms/header"
import { ConsultModal } from "@/components/organisms/consult-modal"

export default function Home() {
  const [consultOpen, setConsultOpen] = useState(false)

  return (
    <>
      <Header onConsult={() => setConsultOpen(true)} />
      <Hero onConsult={() => setConsultOpen(true)} />
      <Stats />
      <Courses onConsult={() => setConsultOpen(true)} />
      <Testimonials />
      <ConsultModal open={consultOpen} onClose={() => setConsultOpen(false)} />
    </>
  )
}
