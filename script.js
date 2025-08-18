// Get DOM elements
const landingPage = document.getElementById("landing-page")
const loginPage = document.getElementById("login-page")
const dashboardPage = document.getElementById("dashboard-page")
const testsPage = document.getElementById("tests-page")
const profilePage = document.getElementById("profile-page")
const offersPage = document.getElementById("offers-page")
const careersPage = document.getElementById("careers-page")
const learningPage = document.getElementById("learning-page") // Added learning page element
const moreLearningPage = document.getElementById("more-learning-page") // Added more learning page element
const tutorialsPage = document.getElementById("tutorials-page") // Added tutorials page element
const connectBtn = document.getElementById("connect-btn")
const backBtn = document.getElementById("back-btn")
const loginForm = document.getElementById("login-form")
const learnMoreBtn = document.getElementById("learn-more-btn")
const forgotPasswordBtn = document.getElementById("forgot-password")
const createAccountBtn = document.getElementById("create-account")
const homeBtn = document.getElementById("home-btn")
const connectionBtn = document.getElementById("connection-btn")
const startBtn = document.getElementById("start-btn")
const profileBtn = document.getElementById("profile-btn")
const profileBackBtn = document.getElementById("profile-back-btn")

// Navigation functions
function showLoginPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.remove("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showLandingPage() {
  loginPage.classList.add("hidden")
  landingPage.classList.remove("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
  // Clear form
  const emailInput = document.getElementById("email")
  const passwordInput = document.getElementById("password")
  if (emailInput) emailInput.value = ""
  if (passwordInput) passwordInput.value = ""
}

function showDashboardPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.remove("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showTestsPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.remove("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showProfilePage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.remove("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showOffersPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.remove("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showCareersPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.remove("hidden")
  if (learningPage) learningPage.classList.add("hidden") // Added learning page to hide list
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

function showLearningPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.remove("hidden") // Added new function to show learning page
  if (moreLearningPage) moreLearningPage.classList.add("hidden") // Added more learning page to hide list
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

// Added new function to show more learning page
function showMoreLearningPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden")
  if (moreLearningPage) moreLearningPage.classList.remove("hidden")
  if (tutorialsPage) tutorialsPage.classList.add("hidden") // Added tutorials page to hide list
}

// Added new function to show tutorials page
function showTutorialsPage() {
  landingPage.classList.add("hidden")
  loginPage.classList.add("hidden")
  dashboardPage.classList.add("hidden")
  if (testsPage) testsPage.classList.add("hidden")
  if (profilePage) profilePage.classList.add("hidden")
  if (offersPage) offersPage.classList.add("hidden")
  if (careersPage) careersPage.classList.add("hidden")
  if (learningPage) learningPage.classList.add("hidden")
  if (moreLearningPage) moreLearningPage.classList.add("hidden")
  if (tutorialsPage) tutorialsPage.classList.remove("hidden")
}

let currentCareerIndex = 0
const careers = ["tech", "design", "marketing"]

function showCareer(index) {
  const careerItems = document.querySelectorAll(".career-item")
  careerItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active")
    } else {
      item.classList.remove("active")
    }
  })
}

function nextCareer() {
  currentCareerIndex = (currentCareerIndex + 1) % careers.length
  showCareer(currentCareerIndex)
}

function prevCareer() {
  currentCareerIndex = (currentCareerIndex - 1 + careers.length) % careers.length
  showCareer(currentCareerIndex)
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] DOM loaded, setting up event listeners")

  // Event listeners with null checks
  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      console.log("[v0] Connect button clicked")
      showLoginPage()
    })
  }

  if (backBtn) {
    backBtn.addEventListener("click", () => {
      showLandingPage()
    })
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("[v0] Login form submitted")
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      if (email && password) {
        console.log("[v0] Login successful, navigating to dashboard")
        showDashboardPage()
      } else {
        alert("Veuillez remplir tous les champs")
      }
    })
  }

  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      console.log("[v0] Learn more button clicked, navigating to dashboard")
      showDashboardPage()
    })
  } else {
    console.log("[v0] Learn more button not found!")
  }

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      showLandingPage()
    })
  }

  if (connectionBtn) {
    connectionBtn.addEventListener("click", () => {
      showLoginPage()
    })
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      console.log("[v0] Start button clicked, navigating to tests page")
      showTestsPage()
    })
  }

  if (profileBtn) {
    profileBtn.addEventListener("click", () => {
      console.log("[v0] Profile button clicked, navigating to profile page")
      showProfilePage()
    })
  }

  if (profileBackBtn) {
    profileBackBtn.addEventListener("click", () => {
      console.log("[v0] Profile back button clicked, navigating to tests page")
      showTestsPage()
    })
  }

  const navAccueilBtn = document.getElementById("nav-accueil")
  if (navAccueilBtn) {
    navAccueilBtn.addEventListener("click", () => {
      console.log("[v0] Accueil button clicked, navigating to landing page")
      showLandingPage()
    })
  }

  const navMetiersBtn = document.getElementById("nav-metiers")
  if (navMetiersBtn) {
    navMetiersBtn.addEventListener("click", () => {
      console.log("[v0] Métiers button clicked, navigating to careers page")
      showCareersPage()
    })
  }

  const navOffresBtn = document.getElementById("nav-offres")
  if (navOffresBtn) {
    navOffresBtn.addEventListener("click", () => {
      console.log("[v0] Offres button clicked, navigating to offers page")
      showOffersPage()
    })
  }

  const testsNavOffresBtn = document.getElementById("tests-nav-offres")
  if (testsNavOffresBtn) {
    testsNavOffresBtn.addEventListener("click", () => {
      console.log("[v0] Tests page Offres button clicked")
      showOffersPage()
    })
  }

  const navApprendreBtn = document.getElementById("nav-apprendre")
  if (navApprendreBtn) {
    navApprendreBtn.addEventListener("click", () => {
      console.log("[v0] Apprendre button clicked, navigating to learning page")
      showLearningPage()
    })
  }

  const testsNavApprendreBtn = document.getElementById("tests-nav-apprendre")
  if (testsNavApprendreBtn) {
    testsNavApprendreBtn.addEventListener("click", () => {
      console.log("[v0] Tests page Apprendre button clicked")
      showLearningPage()
    })
  }

  const offersNavApprendreBtn = document.getElementById("offers-nav-apprendre")
  if (offersNavApprendreBtn) {
    offersNavApprendreBtn.addEventListener("click", () => {
      console.log("[v0] Offers page Apprendre button clicked")
      showLearningPage()
    })
  }

  const careersNavApprendreBtn = document.getElementById("careers-nav-apprendre")
  if (careersNavApprendreBtn) {
    careersNavApprendreBtn.addEventListener("click", () => {
      console.log("[v0] Careers page Apprendre button clicked")
      showLearningPage()
    })
  }

  const learningNavAccueilBtn = document.getElementById("learning-nav-accueil")
  if (learningNavAccueilBtn) {
    learningNavAccueilBtn.addEventListener("click", () => {
      console.log("[v0] Learning page Accueil button clicked")
      showLandingPage()
    })
  }

  const learningNavTestsBtn = document.getElementById("learning-nav-tests")
  if (learningNavTestsBtn) {
    learningNavTestsBtn.addEventListener("click", () => {
      console.log("[v0] Learning page Tests button clicked")
      showTestsPage()
    })
  }

  const learningNavMetiersBtn = document.getElementById("learning-nav-metiers")
  if (learningNavMetiersBtn) {
    learningNavMetiersBtn.addEventListener("click", () => {
      console.log("[v0] Learning page Métiers button clicked")
      showCareersPage()
    })
  }

  const learningNavOffresBtn = document.getElementById("learning-nav-offres")
  if (learningNavOffresBtn) {
    learningNavOffresBtn.addEventListener("click", () => {
      console.log("[v0] Learning page Offres button clicked")
      showOffersPage()
    })
  }

  const offersNavAccueilBtn = document.getElementById("offers-nav-accueil")
  if (offersNavAccueilBtn) {
    offersNavAccueilBtn.addEventListener("click", () => {
      console.log("[v0] Offers page Accueil button clicked")
      showLandingPage()
    })
  }

  const offersNavTestsBtn = document.getElementById("offers-nav-tests")
  if (offersNavTestsBtn) {
    offersNavTestsBtn.addEventListener("click", () => {
      console.log("[v0] Offers page Tests button clicked")
      showTestsPage()
    })
  }

  const offersNavMetiersBtn = document.getElementById("offers-nav-metiers")
  if (offersNavMetiersBtn) {
    offersNavMetiersBtn.addEventListener("click", () => {
      console.log("[v0] Offers page Métiers button clicked")
      showCareersPage()
    })
  }

  const careersNavAccueilBtn = document.getElementById("careers-nav-accueil")
  if (careersNavAccueilBtn) {
    careersNavAccueilBtn.addEventListener("click", () => {
      console.log("[v0] Careers page Accueil button clicked")
      showLandingPage()
    })
  }

  const careersNavTestsBtn = document.getElementById("careers-nav-tests")
  if (careersNavTestsBtn) {
    careersNavTestsBtn.addEventListener("click", () => {
      console.log("[v0] Careers page Tests button clicked")
      showTestsPage()
    })
  }

  const careersNavMetiersBtn = document.getElementById("careers-nav-metiers")
  if (careersNavMetiersBtn) {
    careersNavMetiersBtn.addEventListener("click", () => {
      console.log("[v0] Careers page Métiers button clicked")
      showCareersPage()
    })
  }

  const careersNavOffresBtn = document.getElementById("careers-nav-offres")
  if (careersNavOffresBtn) {
    careersNavOffresBtn.addEventListener("click", () => {
      console.log("[v0] Careers page Offres button clicked")
      showOffersPage()
    })
  }

  const careersPrevBtn = document.getElementById("careers-prev")
  if (careersPrevBtn) {
    careersPrevBtn.addEventListener("click", () => {
      console.log("[v0] Careers previous button clicked")
      prevCareer()
    })
  }

  const careersNextBtn = document.getElementById("careers-next")
  if (careersNextBtn) {
    careersNextBtn.addEventListener("click", () => {
      console.log("[v0] Careers next button clicked")
      nextCareer()
    })
  }

  showCareer(0)

  const testsNavMetiersBtn = document.getElementById("tests-nav-metiers")
  if (testsNavMetiersBtn) {
    testsNavMetiersBtn.addEventListener("click", () => {
      console.log("[v0] Tests page Métiers button clicked")
      showCareersPage()
    })
  }

  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", () => {
      alert("Mot de passe oublié!")
    })
  }

  if (createAccountBtn) {
    createAccountBtn.addEventListener("click", () => {
      alert("Créer un compte!")
    })
  }

  const playButtons = document.querySelectorAll(".play-btn")
  playButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Commencer le test!")
    })
  })

  const profileActionButtons = document.querySelectorAll(".profile-action-btn")
  profileActionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("primary")) {
        alert("Redirection vers les tests...")
      } else {
        alert("Téléchargement du rapport en cours...")
      }
    })
  })

  const learningMoreBtn = document.getElementById("learning-more-btn")
  if (learningMoreBtn) {
    learningMoreBtn.addEventListener("click", () => {
      console.log("[v0] Learning more button clicked, navigating to more learning page")
      showMoreLearningPage()
    })
  }

  // Added event listeners for more learning page navigation
  const moreLearningBackBtn = document.getElementById("more-learning-back-btn")
  if (moreLearningBackBtn) {
    moreLearningBackBtn.addEventListener("click", () => {
      console.log("[v0] More learning back button clicked, navigating to learning page")
      showLearningPage()
    })
  }

  const tutorialsBtn = document.getElementById("tutorials-btn")
  if (tutorialsBtn) {
    tutorialsBtn.addEventListener("click", () => {
      console.log("[v0] Tutorials button clicked, navigating to tutorials page")
      showTutorialsPage()
    })
  }

  const tutorialsBackBtn = document.getElementById("tutorials-back-btn")
  if (tutorialsBackBtn) {
    tutorialsBackBtn.addEventListener("click", () => {
      console.log("[v0] Tutorials back button clicked, navigating to more learning page")
      showMoreLearningPage()
    })
  }
})
