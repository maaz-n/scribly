"use client"

import { motion } from "framer-motion"
import { PenLine, Users, Share2, Sparkles } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: PenLine,
    title: "Easy Writing",
    desc: "Focus on your words with our clean and distraction-free editor.",
  },
  {
    icon: Users,
    title: "Community Driven",
    desc: "Connect with other writers and readers from around the world.",
  },
  {
    icon: Share2,
    title: "Instant Sharing",
    desc: "Publish with one click and share your ideas instantly.",
  },
  {
    icon: Sparkles,
    title: "Smart Tools",
    desc: "Use AI-assisted tools to refine your writing and spark creativity.",
  },
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-medium text-primary">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">
            Powerful Features for Every Writer
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From drafting to publishing, our blogging app has everything you need
            to share your story.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Card className="h-full transition-transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
