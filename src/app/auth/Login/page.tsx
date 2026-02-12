"use client";

import { motion } from "framer-motion";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function Login() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Branding panel — hidden on mobile, visible on lg+ */}
      <div className="hidden lg:flex lg:w-1/2 2xl:w-3/5 items-center justify-center border-r border-foreground/10 bg-foreground/[0.02]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-md px-12 2xl:max-w-lg"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground 2xl:text-5xl">
            greynat
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/40 2xl:text-xl">
            Sign in to pick up where you left off.
          </p>
        </motion.div>
      </div>

      {/* Form panel */}
      <div className="flex w-full items-center justify-center px-5 py-12 sm:px-8 lg:w-1/2 2xl:w-2/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-sm"
        >
          <div className="mb-8 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-foreground/50">
              Sign in to your account to continue
            </p>
          </div>

          <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5 sm:p-6">
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 sm:py-3"
              >
                <GoogleIcon />
                Continue with Google
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-foreground/10 bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5 sm:py-3"
              >
                <GitHubIcon />
                Continue with GitHub
              </motion.button>
            </div>

            <div className="my-5 flex items-center gap-3 sm:my-6">
              <div className="h-px flex-1 bg-foreground/10" />
              <span className="text-xs text-foreground/30">or</span>
              <div className="h-px flex-1 bg-foreground/10" />
            </div>

            <form className="space-y-3.5 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground/70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-foreground/70"
                  >
                    Password
                  </label>
                  <a
                    href="/auth/forgot-password"
                    className="text-xs text-foreground/40 transition-colors hover:text-foreground/70"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-foreground/10 bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-foreground/30 focus:outline-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Sign in
              </motion.button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-foreground/40 lg:text-left">
            Don&apos;t have an account?{" "}
            <a
              href="/auth/register"
              className="font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              Create one
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
