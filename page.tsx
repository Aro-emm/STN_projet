"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Mail, Lock } from "lucide-react"

export default function FrenchWebsite() {
  const [currentView, setCurrentView] = useState<"landing" | "login">("landing")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (email && password) {
      alert("Connexion réussie!")
      // Reset form
      setEmail("")
      setPassword("")
      setCurrentView("landing")
    }
  }

  const LandingPage = () => (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-dashed border-gray-400"></div>
              </div>
              <h1 className="text-lg font-medium text-gray-900">Nom du logo</h1>
            </div>
            <Button
              onClick={() => setCurrentView("login")}
              variant="ghost"
              className="text-gray-700 hover:text-gray-900"
            >
              Se connecter
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-12">
          <div className="max-w-2xl mx-auto">
            <div className="inline-block bg-gray-300 px-8 py-4 rounded-lg">
              <h2 className="text-xl font-medium text-gray-900">Description</h2>
            </div>
          </div>

          <div className="pt-16">
            <Button
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-8 py-4 text-lg font-medium rounded-lg"
              onClick={() => alert("En savoir plus clicked!")}
            >
              En savoir plus
              <span className="ml-3 text-xl">→</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )

  const LoginPage = () => (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => setCurrentView("landing")}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </Button>
        </div>

        <div className="text-center space-y-8">
          {/* Logo and title */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-dashed border-gray-400"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Nom du logo</h1>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="email"
                placeholder="Email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 bg-gray-300 border-0 rounded-full px-6 placeholder:text-gray-600 text-gray-900 pr-12"
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
            </div>

            <div className="relative">
              <Input
                type="password"
                placeholder="Mot de passe..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 bg-gray-300 border-0 rounded-full px-6 placeholder:text-gray-600 text-gray-900 pr-12"
              />
              <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
            </div>

            <Button
              onClick={handleLogin}
              className="w-full h-14 bg-gray-700 hover:bg-gray-800 text-white rounded-full text-lg font-medium"
            >
              Se connecter
            </Button>

            <button
              className="text-gray-700 hover:text-gray-900 text-sm font-medium"
              onClick={() => alert("Mot de passe oublié clicked!")}
            >
              Mot de passe oublié?
            </button>

            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full h-14 bg-gray-300 hover:bg-gray-400 text-gray-900 border-0 rounded-full text-lg font-medium"
                onClick={() => alert("Créer un compte clicked!")}
              >
                Créé un compte
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {currentView === "landing" && <LandingPage />}
      {currentView === "login" && <LoginPage />}
    </>
  )
}

