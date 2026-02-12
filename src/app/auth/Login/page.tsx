export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:py-32">
        <div className="w-full max-w-md space-y-8">
            <span className="block text-center text-3xl font-bold tracking-tight">
                Google Login
            </span>
        </div>
        <div className="relative z-10 w-full">
            <span className="absolute inset-0 rounded-md bg-background/80 p-3">
                GitHub Login
            </span>
        </div>
    </div>
  );
}
