import { Search } from "@/components/search"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle, SearchIcon, Shield } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950">

      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <div className="flex flex-col items-center justify-center space-y-12 py-16 text-center">
          <div className="space-y-6">
            <Badge
              variant="outline"
              className="border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300"
            >
              Certificate Verification Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Verify Your <span className="text-teal-400">Credentials</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-slate-300">
              Instantly verify the authenticity of your Inovus Labs certificates with our secure blockchain-powered
              verification system
            </p>
            <div className="flex justify-center">
              <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-300">
                <CheckCircle className="mr-1 h-3.5 w-3.5" />
                Trusted by thousands of students and employers
              </Badge>
            </div>
          </div>

          <div className="w-full max-w-2xl rounded-xl bg-slate-800/50 p-8 shadow-xl backdrop-blur-sm">
            <div className="mb-6 text-left">
              <h2 className="text-xl font-semibold text-white">Verify Your Certificate</h2>
              <p className="mt-1 text-sm text-slate-300">Enter your certificate ID or full name below</p>
            </div>
            <Search />
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-3">
            <Card className="border-none bg-slate-800/50 shadow-xl backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-teal-500/20 p-3 text-teal-400">
                  <SearchIcon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Search</h3>
                <p className="text-sm text-slate-300">
                  Enter your certificate ID or name to begin the verification process
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-slate-800/50 shadow-xl backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-teal-500/20 p-3 text-teal-400">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Verify</h3>
                <p className="text-sm text-slate-300">
                  Our blockchain system verifies the authenticity of your certificate instantly
                </p>
              </CardContent>
            </Card>

            <Card className="border-none bg-slate-800/50 shadow-xl backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-teal-500/20 p-3 text-teal-400">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">Download</h3>
                <p className="text-sm text-slate-300">View and download your verified certificate for your records</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 border-t border-slate-800 lg:py-5 py-10 text-slate-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="flex gap-6 flex-wrap items-center justify-center md:justify-start">
            <div className="flex flex-row items-center gap-6">
              <img src="/badges/opensource.svg" alt="Open Source" className="h-8 w-auto" />
              <img src="/badges/carbonneutral.svg" alt="Carbon Neutral" className="h-8 w-auto" />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="mt-2 text-slate-500 text-sm">
              Built with ❤️ by <a href="https://inovuslabs.org" target="blank" className="text-slate-400 hover:text-teal-400 transition">Inovus Labs</a>
            </p>
          </div>

          <div className="text-center md:text-right text-sm text-slate-500">
            <span className="text-xs text-slate-500">
              <a href="#" className="text-slate-400 hover:text-teal-400 transition">Privacy Policy</a> | <a href="#" className="text-slate-400 hover:text-teal-400 transition">Terms of Service</a>
            </span>
            <br />
            <span className="text-xs text-slate-500">
              © {new Date().getFullYear()} Inovus Labs. All rights reserved.
            </span>
          </div>

        </div>
      </footer>

    </div>
  )
}
