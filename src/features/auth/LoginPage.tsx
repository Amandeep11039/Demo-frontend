import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Smartphone,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Card } from "../../components/ui/Card";
import { AuthFormFields } from "../../components/auth/AuthFormFields";
import { getAuthSchema } from "./schema/auth.schema";

interface LoginPageProps {
  onBackToHome?: () => void;
}

export const LoginPage = ({ onBackToHome }: LoginPageProps) => {
  const [authMode, setAuthMode] = useState<"signin" | "signup" | "otp">(
    "signin",
  );
  const [showPassword, setShowPassword] = useState(false);

  // Interactive UI states
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(getAuthSchema(authMode, otpSent)),
    defaultValues: {
      email: "",
      password: "",
      mobile: "",
      otpCode: "",
      rememberMe: true,
    },
  });

  const onSubmit = (data: any) => {
    setStatusMessage(null);
    setIsLoading(true);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);

      if (authMode === "otp" && !otpSent) {
        setOtpSent(true);
        setStatusMessage({
          type: "success",
          text: `OTP sent successfully to +91 ${data.mobile.slice(-4)}`,
        });
      } else {
        setStatusMessage({
          type: "success",
          text:
            authMode === "signup"
              ? "Welcome to House of MIT! Account created with AI Style-DNA."
              : "Authentication successful. Synchronizing your digital wardrobe...",
        });
      }
    }, 1200);
  };

  const changeAuthMode = (mode: "signin" | "signup" | "otp") => {
    setAuthMode(mode);
    setStatusMessage(null);
    setOtpSent(false);
    reset();
  };

  return (
    <div className="relative flex min-h-[calc(100vh-65px)] flex-col items-center justify-center bg-[#F8F8F8] px-4 py-8 md:py-12">
      {/* Radial Background Accent */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,154,99,0.08)_0%,rgba(248,248,248,0)_70%)]" />

      <div className="relative z-10 w-full max-w-md animate-fade-in">
        {onBackToHome && (
          <div className="mb-4 text-center">
            <button
              type="button"
              onClick={onBackToHome}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#C69A63] hover:underline"
            >
              ← Return to House of MIT Atelier Landing Page
            </button>
          </div>
        )}

        {/* Main Card */}
        <Card className="p-6 sm:p-9">
          {/* Form Header */}
          <div className="mb-7 text-center">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#111111]">
              {authMode === "signin" && "Sign In to Your Account"}
              {authMode === "signup" && "Create Your Fashion Profile"}
              {authMode === "otp" && "Instant Mobile Sign In"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B7280]">
              {authMode === "signin" &&
                "Access curated fashion, AI recommendations & digital wardrobe."}
              {authMode === "signup" &&
                "Join House of MIT for personalized sizing and express delivery."}
              {authMode === "otp" &&
                "Enter your phone number to receive a 1-click verification code."}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="mb-6 grid grid-cols-3 rounded-lg bg-[#F4F4F4] p-1">
            <Button
              type="button"
              variant="tab"
              active={authMode === "signin"}
              onClick={() => changeAuthMode("signin")}
            >
              Sign In
            </Button>

            <Button
              type="button"
              variant="tab"
              active={authMode === "signup"}
              onClick={() => changeAuthMode("signup")}
            >
              Register
            </Button>

            <Button
              type="button"
              variant="tab"
              active={authMode === "otp"}
              onClick={() => changeAuthMode("otp")}
            >
              Quick OTP
            </Button>
          </div>

          {/* Feedback Status Alert */}
          {statusMessage && (
            <div
              role="alert"
              className={`mb-5 flex items-center gap-2.5 rounded-lg border p-3.5 text-xs font-medium ${
                statusMessage.type === "success"
                  ? "border-[#22C55E] bg-[rgba(34,197,94,0.08)] text-green-800"
                  : "border-[#EF4444] bg-[rgba(239,68,68,0.08)] text-red-700"
              }`}
            >
              {statusMessage.type === "success" ? (
                <CheckCircle2 size={18} className="shrink-0 text-[#22C55E]" />
              ) : (
                <AlertCircle size={18} className="shrink-0 text-[#EF4444]" />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Authentication Form */}
          <form
            onSubmit={hookFormSubmit(onSubmit)}
            className="flex flex-col gap-4.5"
          >
            {authMode !== "otp" ? (
              <AuthFormFields
                authMode={authMode}
                register={register}
                errors={errors}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            ) : (
              /* Mobile OTP Flow */
              <>
                <Input
                  label="Mobile Number (India)"
                  type="tel"
                  placeholder="98765 43210"
                  {...register("mobile")}
                  error={(errors as any).mobile?.message as string}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                  }}
                  prefixText={
                    <span className="flex items-center gap-1.5">
                      <Smartphone size={16} className="text-[#9CA3AF]" />
                      <span>+91</span>
                    </span>
                  }
                />

                {otpSent && (
                  <div className="animate-fade-in">
                    <label
                      htmlFor="otp-input"
                      className="block text-xs font-semibold text-[#111111] mb-1.5"
                    >
                      Enter 4-Digit Code
                    </label>
                    <Input
                      id="otp-input"
                      type="text"
                      maxLength={4}
                      placeholder="• • • •"
                      {...register("otpCode")}
                      error={(errors as any).otpCode?.message as string}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value
                          .replace(/\D/g, "")
                          .slice(0, 4);
                      }}
                      className="text-center font-mono text-xl font-bold tracking-[8px]"
                    />
                  </div>
                )}
              </>
            )}

            {/* Remember Me Checkbox */}
            <div className="mt-1 flex items-center gap-2">
              <input
                type="checkbox"
                id="remember"
                {...register("rememberMe")}
                className="h-4 w-4 rounded-xs border-[#E5E5E5] text-[#111111] focus:ring-[#111111] cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="cursor-pointer text-xs text-[#6B7280]"
              >
                Remember this device for seamless 1-click checkout
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              fullWidth
              className="mt-2"
            >
              {isLoading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>
                    {authMode === "signin" && "Sign In to House of MIT"}
                    {authMode === "signup" && "Create Fashion Profile"}
                    {authMode === "otp" &&
                      (otpSent ? "Verify Code" : "Send Verification OTP")}
                  </span>
                  <ArrowRight size={16} />
                </>
              )}
            </Button>
          </form>

          {/* Or Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#E5E5E5]" />
            <span className="text-[11px] font-medium uppercase tracking-wider text-[#9CA3AF]">
              OR
            </span>
            <div className="h-px flex-1 bg-[#E5E5E5]" />
          </div>

          {/* Social Authentication Options */}
          <div className="flex flex-col gap-2.5">
            <Button
              type="button"
              variant="secondary"
              fullWidth
              onClick={() => {
                setStatusMessage({
                  type: "success",
                  text: "Logged in with Google sandbox session.",
                });
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.15C3.25 21.3 7.31 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.27C.46 8.2 0 10.04 0 12s.46 3.8 1.27 5.42l4.01-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.25 2.7 1.27 6.58l4.01 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>Continue with Google</span>
            </Button>

            <Button
              type="button"
              variant="secondary"
              fullWidth
              onClick={() => {
                setStatusMessage({
                  type: "success",
                  text: "Logged in with Apple sandbox session.",
                });
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.13-1.97.99-3.12-1 .04-2.2.67-2.9 1.49-.62.72-1.16 1.89-.99 3.02 1.12.09 2.23-.57 2.9-1.39z" />
              </svg>
              <span>Continue with Apple</span>
            </Button>
          </div>

          {/* Footer Terms */}
          <footer className="mt-7 border-t border-[#F4F4F4] pt-5 text-center text-xs text-[#6B7280]">
            By continuing, you agree to House of MIT's{" "}
            <a
              href="#terms"
              onClick={(e) => e.preventDefault()}
              className="font-semibold text-[#111111] hover:underline"
            >
              Terms of Atelier
            </a>{" "}
            &{" "}
            <a
              href="#privacy"
              onClick={(e) => e.preventDefault()}
              className="font-semibold text-[#111111] hover:underline"
            >
              Privacy Policy
            </a>
            .
          </footer>
        </Card>
      </div>
    </div>
  );
};
