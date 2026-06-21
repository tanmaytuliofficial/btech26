import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">OS</span>
            </div>
            <span className="font-bold text-lg">Career OS</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="h-9 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-sm text-muted-foreground mb-6">
            <span className="mr-2">🚀</span>
            For ambitious CS students
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The operating system for engineers{" "}
            <span className="text-primary">chasing 30+ LPA offers.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Track your syllabus, industry skills, projects, and competitive prep
            in one premium workspace built for ambitious CS students.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="h-12 rounded-lg bg-primary px-8 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors flex items-center"
            >
              Start For Free
            </Link>
            <Link
              href="/auth/login"
              className="h-12 rounded-lg border border-border px-8 text-base font-medium hover:bg-muted/50 transition-colors flex items-center"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Students from these companies trust Career OS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
            {["Google", "Microsoft", "Amazon", "Meta", "Adobe", "Atlassian", "Uber", "Nvidia", "Salesforce"].map(
              (company) => (
                <span key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Track Everything",
                description:
                  "Syllabus, skills, projects, and competitions - all in one place with smart progress tracking.",
                icon: "📊",
              },
              {
                title: "AI-Powered Guidance",
                description:
                  "Get personalized recommendations and roadmaps powered by NVIDIA AI models.",
                icon: "🤖",
              },
              {
                title: "Stay Focused",
                description:
                  "Built for CS students who are serious about landing their dream tech job.",
                icon: "🎯",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 px-4">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          © 2026 Career OS. Built for the next generation of engineers.
        </div>
      </footer>
    </div>
  );
}